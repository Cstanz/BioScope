(function () {
  "use strict";
  const SUPABASE_URL = "https://ISI-PROJECT-ID.supabase.co";
  const SUPABASE_ANON_KEY = "ISI-ANON-PUBLIC-KEY";
  const TABLE = "responses";
  const PENDING = "bioscopePending";   // antrean: jawaban yang belum terkirim (offline/gagal)
  let flushing = false;

  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  function toRow(r) {
    return {
      type: r.type, participant: r.participant, test: r.test,
      instrument_version: r.instrument_version || null, instrument_status: r.instrument_status || null,
      item_id: r.type === "summary" ? "summary" : r.item_id,
      level: r.level || null, selected: r.selected || null, correct: r.correct === undefined ? null : r.correct,
      ms: r.ms === undefined ? null : r.ms, changes: r.changes === undefined ? null : r.changes, order_opts: r.order || null,
      score: r.score === undefined ? null : r.score, total: r.total === undefined ? null : r.total,
      started_at: r.startedAt || null, finished_at: r.finishedAt || null, consent_at: r.consentAt || null, ts: r.ts || null
    };
  }

  async function flush() {
    if (flushing || SUPABASE_URL.includes("ISI-") || SUPABASE_ANON_KEY.includes("ISI-")) return;
    flushing = true;
    try {
      while (true) {                                   // kirim terus sampai antrean kosong
        const q = read(PENDING, []);
        if (!q.length) break;
        const batch = q.slice(0, 200);
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}?on_conflict=participant,test,item_id`, {
          method: "POST",
          headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}`, "Content-Type": "application/json",
                     Prefer: "resolution=ignore-duplicates,return=minimal" },
          body: JSON.stringify(batch.map(toRow))
        });
        if (!res.ok) { console.warn("BioScope: gagal kirim (" + res.status + "), akan dicoba lagi."); break; }
        write(PENDING, read(PENDING, []).slice(batch.length));   // buang yang sudah terkirim
      }
    } catch (e) { /* offline: tetap di antrean */ }
    flushing = false;
  }

  let timer = null;
  window.BIOSCOPE_API = {
    saveResponse(rec) {
      const q = read(PENDING, []); q.push(rec); write(PENDING, q);
      clearTimeout(timer); timer = setTimeout(flush, 300);      // kumpulkan dulu, kirim sekali
    },
    flush
  };
  window.addEventListener("online", flush);
  window.addEventListener("load", flush);
})();