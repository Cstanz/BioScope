/* Pre-test / post-test BioScope: dipakai oleh pretest.html dan posttest.html.
   Data soal: js/tests.js. Penyimpanan sementara di localStorage lewat saveResponse();
   saat backend siap, cukup definisikan window.BIOSCOPE_API.saveResponse(record). */
(function () {
  "use strict";
  const root = document.getElementById("tes-root");
  if (!root || !window.BIOSCOPE_TESTS) return;

  // ---------- Pengaturan yang perlu kamu isi ----------
  const CONFIG = {
    contact: "[isi kontak peneliti]",          // contoh: email atau WhatsApp peneliti
    instruksiPre: "Pre-test ini mengukur pemahaman awalmu sebelum belajar di BioScope. Tidak ada nilai yang ditampilkan dan tidak ada jawaban benar-salah yang diberitahukan sekarang.",
    instruksiPost: "Post-test ini mengukur pemahamanmu setelah belajar di BioScope. Kerjakan sendiri tanpa membuka materi."
  };

  const JENIS = root.dataset.tes === "post" ? "post" : "pre";
  const T = window.BIOSCOPE_TESTS;
  const SET = T[JENIS];
  const ITEMS = SET.items;
  const PARTICIPANT_KEY = "bioscopeParticipant";
  const RESPONSES_KEY = "bioscopeResponses";
  const doneKey = (c, j) => `bioscopeTestDone:${c}:${j}`;
  const draftKey = (c, j) => `bioscopeTestDraft:${c}:${j}`;

  // ---------- Penyimpanan ----------
  const read = (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  // Satu pintu penyimpanan jawaban. Backend nanti cukup memasang window.BIOSCOPE_API.saveResponse.
  function saveResponse(rec) {
    const all = read(RESPONSES_KEY, []);
    all.push(rec);
    write(RESPONSES_KEY, all);
    if (window.BIOSCOPE_API && typeof window.BIOSCOPE_API.saveResponse === "function") {
      try { window.BIOSCOPE_API.saveResponse(rec); } catch (e) {}
    }
  }

  // ---------- Acak urutan opsi (stabil per peserta dan butir) ----------
  function rng(seed) {
    let h = 2166136261;
    for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
    let a = h >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function orderOf(item, code) {
    const r = rng(code + "|" + item.id), a = item.options.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // ---------- Gaya ----------
  const css = document.createElement("style");
  css.textContent = `
  .tes-wrap{max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.65}
  .tes-card{background:var(--surface,var(--paper-2,#f2f0e8));border:1px solid rgba(127,127,127,.35);border-radius:14px;padding:1.4rem 1.5rem;margin:1rem 0}
  .tes-note{border-left:4px solid var(--accent,#8d5a35);padding:.6rem 1rem;margin:1rem 0;background:rgba(141,90,53,.08);font-size:.95rem}
  .tes-progress{display:flex;justify-content:space-between;font-size:.95rem;margin-bottom:.5rem}
  .tes-bar{height:8px;border-radius:99px;background:rgba(127,127,127,.25);overflow:hidden;margin-bottom:1rem}
  .tes-bar>i{display:block;height:100%;background:var(--forest,#1f5a45)}
  .tes-table{border-collapse:collapse;margin:.8rem 0;width:100%;font-size:.98rem}
  .tes-table th,.tes-table td{border:1px solid rgba(127,127,127,.5);padding:.45rem .6rem;text-align:left}
  .tes-table th{background:rgba(127,127,127,.15)}
  .tes-steps{margin:.6rem 0 .6rem 1.1rem;padding:0;list-style:none}
  .tes-steps li{padding:.1rem 0}
  .tes-opts{border:0;padding:0;margin:1rem 0 0}
  .tes-opts legend{position:absolute;left:-9999px}
  .tes-opt{display:flex;gap:.7rem;align-items:flex-start;border:2px solid rgba(127,127,127,.45);border-radius:10px;padding:.75rem .9rem;margin:.55rem 0;cursor:pointer}
  .tes-opt:hover{border-color:var(--forest,#1f5a45)}
  .tes-opt.is-on{border-color:var(--forest,#1f5a45);background:rgba(31,90,69,.12)}
  .tes-opt input{margin-top:.35rem;width:1.1rem;height:1.1rem;flex:none}
  .tes-actions{display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem}
  .tes-field{display:block;width:100%;max-width:340px;padding:.65rem .8rem;font-size:1.05rem;border:2px solid rgba(127,127,127,.55);border-radius:8px;background:transparent;color:inherit;text-transform:uppercase}
  .tes-err{color:var(--danger,#9a5147);font-weight:600;margin:.6rem 0}
  .tes-check{display:flex;gap:.6rem;align-items:flex-start;margin:1rem 0}
  .tes-check input{margin-top:.4rem;width:1.1rem;height:1.1rem}
  `;
  document.head.appendChild(css);

  // ---------- Util tampilan ----------
  const $ = (h) => { root.innerHTML = `<div class="tes-wrap" id="tes-main">${h}</div>`; return document.getElementById("tes-main"); };
  const draftNote = () => T.status !== "tervalidasi"
    ? `<p class="tes-note"><strong>Instrumen draf (${T.version}).</strong> Soal ini belum divalidasi ahli. Jawaban hanya untuk uji coba teknis, bukan data penelitian.</p>` : "";
  const title = `<span class="eyebrow">${SET.title}</span><h1 class="section-title">${SET.title} BioScope</h1>`;
  const participant = () => read(PARTICIPANT_KEY, null);

  // ---------- Layar 1: persetujuan + kode ----------
  function screenConsent(msg) {
    const p = participant();
    const el = $(`${title}${draftNote()}
      <p>${JENIS === "pre" ? CONFIG.instruksiPre : CONFIG.instruksiPost}</p>
      <div class="tes-card">
        <h2>Lembar persetujuan</h2>
        <ul>
          <li><strong>Tujuan:</strong> mengukur pemahaman klasifikasi makhluk hidup untuk pengembangan media belajar BioScope.</li>
          <li><strong>Data yang disimpan:</strong> kode peserta, jawaban tiap soal, dan waktu pengerjaan. Tidak ada nama, email, atau data pribadi lain.</li>
          <li><strong>Sukarela:</strong> kamu boleh berhenti kapan saja tanpa memberi alasan.</li>
          <li><strong>Kontak peneliti:</strong> ${CONFIG.contact}</li>
        </ul>
        <label class="tes-check"><input type="checkbox" id="tes-agree"> <span>Saya sudah membaca penjelasan di atas dan bersedia berpartisipasi.</span></label>
        <label for="tes-code"><strong>Kode peserta</strong> (dari peneliti, 4-20 huruf/angka)</label>
        <input class="tes-field" id="tes-code" type="text" autocomplete="off" maxlength="20" value="${p ? p.code : ""}">
        ${msg ? `<p class="tes-err" role="alert">${msg}</p>` : ""}
        <div class="tes-actions"><button class="btn btn-primary" id="tes-go" type="button">Lanjut</button></div>
      </div>`);
    el.querySelector("#tes-go").onclick = () => {
      const code = el.querySelector("#tes-code").value.trim().toUpperCase();
      if (!el.querySelector("#tes-agree").checked) return screenConsent("Centang persetujuan terlebih dahulu.");
      if (!/^[A-Z0-9-]{4,20}$/.test(code)) return screenConsent("Kode peserta harus 4-20 karakter (huruf, angka, atau tanda hubung).");
      write(PARTICIPANT_KEY, { code, consentAt: new Date().toISOString() });
      start();
    };
  }

  // ---------- Alur ----------
  function start() {
    const p = participant();
    if (!p) return screenConsent();
    if (read(doneKey(p.code, JENIS), null)) return screenDone(read(doneKey(p.code, JENIS)), true);
    if (JENIS === "post" && !read(doneKey(p.code, "pre"), null)) {
      $(`${title}${draftNote()}<div class="tes-card"><p>Kode <strong>${p.code}</strong> belum mengerjakan pre-test. Kerjakan pre-test lebih dulu agar hasilnya bisa dibandingkan.</p>
        <div class="tes-actions"><a class="btn btn-primary" href="pretest.html">Ke Pre-test</a></div></div>`);
      return;
    }
    const d = read(draftKey(p.code, JENIS), null) || { idx: 0, answers: {}, startedAt: new Date().toISOString() };
    screenQuestion(d, p);
  }

  function screenQuestion(d, p, warn) {
    const item = ITEMS[d.idx], opts = orderOf(item, p.code);
    const ans = d.answers[item.id] || { opt: null, ms: 0, changes: 0 };
    const shownAt = Date.now();
    const tbl = item.table ? `<table class="tes-table"><thead><tr>${item.table[0].map(c => `<th scope="col">${c}</th>`).join("")}</tr></thead><tbody>${item.table.slice(1).map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join("")}</tr>`).join("")}</tbody></table>` : "";
    const steps = item.steps ? `<ul class="tes-steps">${item.steps.map(s => `<li>${s}</li>`).join("")}</ul>` : "";
    const el = $(`${title}${draftNote()}
      <div class="tes-progress" aria-live="polite"><span>Soal ${d.idx + 1} dari ${ITEMS.length}</span><span>Kode: ${p.code}</span></div>
      <div class="tes-bar"><i style="width:${Math.round((d.idx + 1) / ITEMS.length * 100)}%"></i></div>
      <div class="tes-card">
        ${(item.intro || []).map(t => `<p>${t}</p>`).join("")}${tbl}${steps}
        ${(item.question || []).map(t => `<p><strong>${t}</strong></p>`).join("")}
        <fieldset class="tes-opts"><legend>Pilihan jawaban</legend>
          ${opts.map((o, i) => `<label class="tes-opt${ans.opt === o.id ? " is-on" : ""}"><input type="radio" name="opt" value="${o.id}"${ans.opt === o.id ? " checked" : ""}><span><strong>${"ABCD"[i]}.</strong> ${o.text}</span></label>`).join("")}
        </fieldset>
        ${warn ? `<p class="tes-err" role="alert">${warn}</p>` : ""}
        <div class="tes-actions">
          ${d.idx > 0 ? `<button class="btn btn-secondary" id="tes-prev" type="button">Sebelumnya</button>` : ""}
          ${d.idx < ITEMS.length - 1 ? `<button class="btn btn-primary" id="tes-next" type="button">Berikutnya</button>` : `<button class="btn btn-primary" id="tes-submit" type="button">Kirim jawaban</button>`}
        </div>
      </div>`);
    const commit = () => {
      const chosen = el.querySelector("input[name=opt]:checked");
      const a = d.answers[item.id] || { opt: null, ms: 0, changes: 0 };
      if (chosen && chosen.value !== a.opt) { if (a.opt) a.changes++; a.opt = chosen.value; }
      a.ms += Date.now() - shownAt;
      d.answers[item.id] = a;
      write(draftKey(p.code, JENIS), d);
    };
    el.querySelectorAll("input[name=opt]").forEach(r => r.onchange = () => el.querySelectorAll(".tes-opt").forEach(l => l.classList.toggle("is-on", l.querySelector("input").checked)));
    const go = (n) => { commit(); d.idx = n; write(draftKey(p.code, JENIS), d); screenQuestion(d, p); window.scrollTo(0, 0); };
    if (el.querySelector("#tes-prev")) el.querySelector("#tes-prev").onclick = () => go(d.idx - 1);
    if (el.querySelector("#tes-next")) el.querySelector("#tes-next").onclick = () => go(d.idx + 1);
    if (el.querySelector("#tes-submit")) el.querySelector("#tes-submit").onclick = () => {
      commit();
      const miss = ITEMS.findIndex(i => !(d.answers[i.id] && d.answers[i.id].opt));
      if (miss >= 0) { d.idx = miss; return screenQuestion(d, p, `Soal nomor ${miss + 1} belum dijawab.`); }
      finish(d, p);
    };
  }

  function finish(d, p) {
    const ts = new Date().toISOString();
    let score = 0;
    ITEMS.forEach(item => {
      const a = d.answers[item.id], ok = a.opt === item.key; if (ok) score++;
      saveResponse({ type: "item", participant: p.code, test: JENIS, instrument_version: T.version, instrument_status: T.status,
        item_id: item.id, level: item.level, selected: a.opt, correct: ok, ms: a.ms, changes: a.changes, order: orderOf(item, p.code).map(o => o.id).join(""), ts });
    });
    const res = { score, total: ITEMS.length, startedAt: d.startedAt, finishedAt: ts };
    saveResponse({ type: "summary", participant: p.code, test: JENIS, instrument_version: T.version, instrument_status: T.status, consentAt: p.consentAt, ...res });
    write(doneKey(p.code, JENIS), res);
    try { localStorage.removeItem(draftKey(p.code, JENIS)); } catch (e) {}
    screenDone(res, false);
  }

  function screenDone(res, again) {
    const next = JENIS === "pre"
      ? `<a class="btn btn-primary" href="monera.html">Mulai belajar</a>`
      : `<a class="btn btn-primary" href="progress.html">Lihat progress</a>`;
    $(`${title}${draftNote()}<div class="tes-card">
      <h2>${again ? "Kamu sudah mengerjakan " + SET.title : "Terima kasih, jawabanmu tersimpan"}</h2>
      ${JENIS === "post" ? `<p>Skor post-test: <strong>${res.score} dari ${res.total}</strong>.</p>` : `<p>Pre-test selesai. Hasilnya tidak ditampilkan sekarang.</p>`}
      <div class="tes-actions">${next}</div></div>`);
  }

  // ---------- Alat uji coba (hanya lewat URL) ----------
  const q = new URLSearchParams(location.search);
  if (q.has("reset") && confirm("Hapus semua data tes di perangkat ini (hanya untuk uji coba)?")) {
    Object.keys(localStorage).filter(k => /^bioscopeTest|^bioscopeParticipant$|^bioscopeResponses$/.test(k)).forEach(k => localStorage.removeItem(k));
  }
  if (q.has("ekspor")) {
    const rows = read(RESPONSES_KEY, []), cols = ["type","participant","test","instrument_version","instrument_status","item_id","level","selected","correct","ms","changes","order","score","total","ts"];
    const csv = [cols.join(",")].concat(rows.map(r => cols.map(c => JSON.stringify(r[c] ?? "")).join(","))).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = "jawaban-bioscope.csv";
    const b = document.createElement("button"); b.textContent = "Unduh CSV (uji coba)"; b.className = "btn btn-secondary"; b.style.margin = "1rem"; b.onclick = () => a.click();
    document.body.appendChild(b);
  }

  participant() ? start() : screenConsent();
})();