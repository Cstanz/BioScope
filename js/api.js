/* Penghubung BioScope ke Supabase (tanpa library tambahan).
   Isi dua nilai di bawah dari Supabase: Project Settings -> API.
   Pakai kunci "Publishable" (sb_publishable_...) atau "anon" (eyJ...).
   JANGAN PERNAH memakai "secret" atau "service_role". */
(function () {
  "use strict";
  const SUPABASE_URL = "https://tfdqiqtbsyoeobtjcfvm.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_EQaTYPlu0A7OySJUsUWVJg_zT9joosc";
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

  // Kirim baris dengan INSERT biasa. Mode ON CONFLICT ikut memeriksa aturan BACA (RLS), yang sengaja tertutup
  // untuk siswa. Duplikat (409) dianggap sudah terkirim; kalau satu batch kena duplikat, kirim satu per satu.
  async function postRows(path, rows, keepalive) {
    const headers = Object.assign(
      { apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      SUPABASE_ANON_KEY.startsWith("sb_") ? {} : { Authorization: `Bearer ${SUPABASE_ANON_KEY}` }
    );
    const send = (body) => fetch(`${SUPABASE_URL}/rest/v1/${path}`, { method: "POST", keepalive: !!keepalive, headers, body: JSON.stringify(body) });
    const res = await send(rows);
    if (res.ok) return true;
    if (res.status !== 409) { try { console.warn("BioScope: gagal kirim ke " + path + " (" + res.status + ") " + (await res.text())); } catch (e) {} return false; }
    for (const r of rows) {
      const one = await send([r]);
      if (!one.ok && one.status !== 409) { console.warn("BioScope: gagal kirim ke " + path + " (" + one.status + ")"); return false; }
    }
    return true;
  }

  async function flush() {
    if (flushing || SUPABASE_URL.includes("ISI-") || SUPABASE_ANON_KEY.includes("ISI-")) return;
    flushing = true;
    try {
      while (true) {                                   // kirim terus sampai antrean kosong
        const q = read(PENDING, []);
        if (!q.length) break;
        const batch = q.slice(0, 200);
        if (!(await postRows(TABLE, batch.map(toRow), false))) break;   // gagal: tetap di antrean, dicoba lagi nanti
        write(PENDING, read(PENDING, []).slice(batch.length));   // buang yang sudah terkirim
      }
    } catch (e) { /* offline: tetap di antrean */ }
    flushing = false;
  }

  // ---------- Pencatat waktu belajar (tabel activity) ----------
  const ACT_PENDING = "bioscopeActivityPending";
  let flushingAct = false;
  async function flushActivity() {
    if (flushingAct || SUPABASE_URL.includes("ISI-") || SUPABASE_ANON_KEY.includes("ISI-")) return;
    flushingAct = true;
    try {
      while (true) {
        const q = read(ACT_PENDING, []);
        if (!q.length) break;
        const batch = q.slice(0, 200);
        if (!(await postRows("activity", batch, true))) break;
        write(ACT_PENDING, read(ACT_PENDING, []).slice(batch.length));
      }
    } catch (e) { /* offline: tetap di antrean */ }
    flushingAct = false;
  }

  let timer = null;
  window.BIOSCOPE_API = {
    saveResponse(rec) {
      const q = read(PENDING, []); q.push(rec); write(PENDING, q);
      clearTimeout(timer); timer = setTimeout(flush, 300);
    },
    flush,
    flushActivity,
    // Cek apakah kode ada di daftar peserta. true/false; null = tidak bisa dicek (offline/belum diset) -> tes tetap lanjut.
    async checkCode(code) {
      if (SUPABASE_URL.includes("ISI-") || SUPABASE_ANON_KEY.includes("ISI-")) return null;
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/cek_kode`, {
          method: "POST",
          headers: Object.assign({ apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json" },
            SUPABASE_ANON_KEY.startsWith("sb_") ? {} : { Authorization: `Bearer ${SUPABASE_ANON_KEY}` }),
          body: JSON.stringify({ p: code })
        });
        if (!res.ok) return null;
        return (await res.json()) === true;
      } catch (e) { return null; }
    }
  };
  window.addEventListener("online", () => { flush(); flushActivity(); });
  window.addEventListener("load", () => { flush(); flushActivity(); });
})();