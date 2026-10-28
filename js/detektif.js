/* Detektif Taksonomi: dipakai di halaman filum (game) dan classification-challenge.html (galeri kartu). */
(function () {
  if (window.__dt) return;
  window.__dt = 1;
  const SELF = document.currentScript;
  function run() {
    const gm = document.querySelector("[data-detektif],[data-detektif-kingdom]"), al = document.querySelector("#detektif-album"), host = gm || al;
    if (!host) return;
    const MODE = gm ? "game" : "album";
    const ROOT = SELF && SELF.src ? SELF.src.replace(/js\/detektif\.js.*$/, "") : "";
    const ALBUM = ROOT + "classification-challenge.html";
    let R, M, LIST = [];

const DT_CSS = `:host{display:block;--bg:transparent;--fg:var(--ink);--pn:var(--surface);--bd:var(--line-dark);--mu:var(--muted);--ac:var(--forest);--ac2:var(--accent);--ok:var(--success);--no:var(--danger);font:16px/1.6 var(--sans);color:var(--fg)}
*{box-sizing:border-box}

h1,h2,h3{font-family:var(--serif);margin:.2em 0}
a{color:var(--ac)}
button{font:inherit;cursor:pointer;color:var(--fg);background:var(--pn);border:2px solid var(--bd);border-radius:10px;padding:8px 14px}
button:hover{border-color:var(--ac)}button:focus-visible{outline:3px solid var(--ac2);outline-offset:2px}
button.on{background:var(--ac);border-color:var(--ac);color:var(--paper)}
button:disabled{opacity:.55;cursor:default}
.pn{background:var(--pn);border:2px solid var(--bd);border-radius:8px;padding:16px;margin:10px 0}
.spec{display:flex;gap:14px;align-items:center}
.sil{font-size:4.5rem;line-height:1;width:110px;height:110px;display:grid;place-items:center;border-radius:50%;background:radial-gradient(var(--bd),transparent 70%);border:2px dashed var(--mu)}
.sil span{filter:brightness(0) opacity(.75)}
.hearts{font-size:1.4rem;letter-spacing:2px}
.cl{list-style:none;margin:10px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:8px}
.cl li{padding:9px 11px;border:2px solid var(--bd);border-radius:10px;font-size:.95rem}
.cl li.hint{border-color:var(--ac2);background:color-mix(in srgb,var(--ac2) 18%,transparent)}
.cl li.hint::before{content:"Petunjuk: ";font-weight:700}
.opt{display:block;width:100%;text-align:left;margin:8px 0}
.opt b{color:var(--ac)}
.tr{font-size:.9rem;color:var(--mu);margin:6px 0 0}
.msg{min-height:1.5em;font-weight:600}
.ok{color:var(--ok)}.no{color:var(--no)}
.bar{height:14px;background:var(--bd);border-radius:9px;overflow:hidden}
.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--ac),var(--ac2))}
.kh{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:16px}
.mk{font-size:.85rem;background:var(--ac2);color:#222;border-radius:20px;padding:2px 10px;font-weight:700}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;margin-top:8px}
.ov{position:fixed;inset:0;background:rgba(5,10,16,.78);display:grid;place-items:start center;overflow:auto;padding:14px;z-index:1000}
.ov[hidden]{display:none}
.mo{background:var(--pn);border-radius:16px;padding:16px;max-width:380px;width:100%;margin:auto}
.mo .card{width:250px;margin:6px auto 12px;font-size:14px}
/* kartu */
.card{--a:#888;--b:#ccc;position:relative;aspect-ratio:5/7.2;font-size:12.5px;color:#1d1d1d;background:#fffdf4;border:5px solid var(--a);border-radius:14px;padding:6px;display:flex;flex-direction:column;gap:4px;box-shadow:0 6px 16px rgba(0,0,0,.28);transition:transform .15s;transform-style:preserve-3d;overflow:hidden;cursor:default}
.g .card,.pg .card{cursor:pointer}
.ch{display:flex;justify-content:space-between;align-items:baseline;font-size:1.05em}
.hp{color:#d62828;font-weight:800}
.art{position:relative;flex:0 0 36%;display:grid;place-items:center;font-size:3.6em;border-radius:8px;background:linear-gradient(145deg,var(--b),var(--a));border:2px solid rgba(0,0,0,.25)}
.art{isolation:isolate;background:radial-gradient(circle at 50% 52%,rgba(255,255,255,.9),rgba(255,255,255,0) 72%),linear-gradient(145deg,var(--b),var(--a))}
.art img{position:absolute;inset:5%;width:90%;height:90%;object-fit:contain;mix-blend-mode:multiply}
.sil span:not(:has(img)){filter:brightness(0) opacity(.75)}
.sil span:has(img){filter:none}
.sil img{width:84px;height:84px;object-fit:contain;mix-blend-mode:multiply;opacity:.75;filter:grayscale(1) brightness(.56) contrast(100)}
.rar,.hl,.ahli{position:absolute;font-size:.26em;font-weight:800;background:rgba(0,0,0,.6);color:#fff;border-radius:6px;padding:1px 6px}
.rar{top:5px;right:5px}.hl{top:5px;left:5px;background:linear-gradient(90deg,#ff3d81,#ffd23d,#3dffd0,#3d7bff)}.ahli{bottom:5px;left:5px;background:#1b6ee0}
.meta{display:flex;justify-content:space-between;font-size:.92em;border-bottom:1px solid #0002;padding-bottom:2px}
.mv{display:flex;justify-content:space-between;gap:4px;font-weight:700}.mv span{font-weight:400}
.fa{margin:auto 0 0;font-size:.88em;font-style:italic;color:#444}
.cf{display:flex;justify-content:space-between;font-size:.9em;color:#555}
.cf b{color:#d79a00;letter-spacing:1px}
.lock{background:#9aa3ad;border-color:#6d7681;align-items:center;justify-content:center;color:#fff}
.lock .q{font-size:4em;font-weight:800;opacity:.7}
.holo{position:absolute;inset:0;pointer-events:none;border-radius:8px;mix-blend-mode:overlay;opacity:.8;background:linear-gradient(115deg,transparent 15%,#ff3d81aa,#ffd23daa,#3dffd0aa,#3d7bffaa,transparent 85%);background-size:300% 300%;animation:sh 3s ease-in-out infinite alternate}
@keyframes sh{from{background-position:0 0}to{background-position:100% 100%}}
.pop{animation:pop .7s cubic-bezier(.2,1.6,.4,1)}
@keyframes pop{from{transform:scale(.2) rotate(-12deg);opacity:0}to{transform:none;opacity:1}}
@media(prefers-reduced-motion:reduce){.pop,.holo{animation:none}}
.bq{border-top:2px dashed var(--bd);margin-top:8px;padding-top:8px}
.card:not(.lock) .art img{transform-origin:50% 100%;image-rendering:pixelated;will-change:transform;
  animation:idle var(--du,2.6s) ease-in-out infinite;animation-delay:var(--d,0s)}
.card:not(.lock):hover .art img{
  animation:idle var(--du,2.6s) ease-in-out infinite,jump .45s ease-out 1;
  animation-delay:var(--d,0s),0s}
@keyframes idle{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-3.5px) scale(1.03)}}
@keyframes jump{0%{transform:translateY(0) scale(1)}35%{transform:translateY(-12px) scale(.97,1.05)}
  70%{transform:translateY(0) scale(1.04,.96)}100%{transform:translateY(0) scale(1)}}
/* variasi fase/durasi antar kartu (tanpa JS) */
.g .card:nth-child(3n+1){--d:-.5s}
.g .card:nth-child(3n+2){--d:-1.4s}
.g .card:nth-child(4n+3){--du:2.2s}
.g .card:nth-child(5n+1){--du:3s;--d:-2s}
.g .card:nth-child(7n+4){--d:-2.3s;--du:2.4s}
@media(prefers-reduced-motion:reduce){.card .art img{animation:none!important}}
/* gerakan singkat khas tiap karakter: bergerak sebentar, lalu diam sejenak */
.card[data-mv]:not(.lock) .art img{
  animation:idle var(--du,2.6s) ease-in-out infinite var(--d,0s),var(--mvn) var(--mt,3.6s) ease-in-out infinite var(--d,0s)}
.card[data-mv]:not(.lock):hover .art img{
  animation:idle var(--du,2.6s) ease-in-out infinite var(--d,0s),var(--mvn) var(--mt,3.6s) ease-in-out infinite var(--d,0s),jump .45s ease-out 1 0s}
.card[data-mv=wiggle]{--mvn:mv-wiggle;--mt:3.2s}
.card[data-mv=swim]{--mvn:mv-swim;--mt:3.8s}
.card[data-mv=ooze]{--mvn:mv-ooze;--mt:3.6s}
.card[data-mv=sway]{--mvn:mv-sway;--mt:4s}
.card[data-mv=puff]{--mvn:mv-puff;--mt:3.4s}
.card[data-mv=pulse]{--mvn:mv-pulse;--mt:3.2s}
.card[data-mv=crawl]{--mvn:mv-crawl;--mt:4.4s}
.card[data-mv=flutter]{--mvn:mv-flutter;--mt:3s}
.card[data-mv=spin]{--mvn:mv-spin;--mt:4s}
.card[data-mv=hop]{--mvn:mv-hop;--mt:3.2s}
@keyframes mv-wiggle{0%,45%,100%{rotate:0deg}8%{rotate:-9deg}16%{rotate:9deg}24%{rotate:-6deg}32%{rotate:5deg}}
@keyframes mv-swim{0%,50%,100%{translate:0 0;rotate:0deg}15%{translate:-7% 0;rotate:-6deg}32%{translate:7% -3%;rotate:6deg}45%{translate:0 0;rotate:0deg}}
@keyframes mv-ooze{0%,75%,100%{scale:1 1}20%{scale:1.12 .88}40%{scale:.92 1.08}60%{scale:1.05 .97}}
@keyframes mv-sway{0%,80%,100%{rotate:0deg}20%{rotate:-6deg}40%{rotate:5deg}60%{rotate:-3deg}}
@keyframes mv-puff{0%,60%,100%{scale:1}15%{scale:1.14}30%{scale:.96}45%{scale:1.05}}
@keyframes mv-pulse{0%,80%,100%{scale:1 1;translate:0 0}15%{scale:1.1 .86;translate:0 2%}35%{scale:.93 1.1;translate:0 -9%}60%{scale:1 1;translate:0 -3%}}
@keyframes mv-crawl{0%,80%,100%{translate:0 0;scale:1 1}30%{translate:9% 0;scale:1.05 .96}50%{translate:9% 0;scale:1 1}}
@keyframes mv-flutter{0%,40%,100%{translate:0 0;rotate:0deg}8%{translate:3% -8%;rotate:-8deg}16%{translate:-3% -3%;rotate:8deg}24%{translate:3% -9%;rotate:-6deg}32%{translate:0 -2%;rotate:4deg}}
@keyframes mv-spin{0%,70%,100%{rotate:0deg;scale:1}25%{rotate:-14deg;scale:1.06}50%{rotate:14deg;scale:1.06}}
@keyframes mv-hop{0%,58%,100%{translate:0 0;scale:1 1}10%{scale:1.1 .88}28%{translate:0 -22%;scale:.94 1.1}46%{translate:0 0;scale:1.08 .92}}
.card:not(.lock) {
  position: relative;
  isolation: isolate;
}

.card:not(.lock)::after {
  content: "";
  position: absolute;
  z-index: 5;
  top: -25%;
  bottom: -25%;
  left: -80%;
  width: 48%;
  pointer-events: none;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(255,255,255,0.04) 30%,
    rgba(255,255,255,0.72) 50%,
    rgba(255,230,150,0.28) 60%,
    transparent 100%
  );
  transform: skewX(-20deg);
  animation: cardShimmer 3s ease-in-out infinite;
  animation-delay: var(--idle-delay, 0s);
}

@keyframes cardShimmer {
  0%, 15% {
    left: -80%;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  65%, 100% {
    left: 140%;
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card:not(.lock)::after {
    animation: none !important;
    display: none;
  }
}`;
const DT_HTML = `<div id="app"></div>`;

/* ===================== DATA (guru: edit di sini) ===================== */

// Kunci dikotomi: tiap simpul punya pernyataan a dan b.
// Isi kedua = id simpul berikutnya, atau nama kingdom (hasil akhir).
const KEY = {
  n1: { q: "Cara memperoleh makanan", k: "mk",
        a: ["Autotrof: membuat makanan sendiri dengan fotosintesis", "auto", "n2"],
        b: ["Heterotrof: mengambil makanan dari makhluk atau bahan lain", "hetero", "n3"] },
  n2: { q: "Inti sel", k: "inti",
        a: ["Tidak punya membran inti; materi genetik bebas di sitoplasma (prokariot)", "P", "n4"],
        b: ["Punya inti sejati yang dibungkus membran (eukariot)", "E", "n5"] },
  n3: { q: "Cara mengambil makanan", k: "cara",
        a: ["Menyerap zat organik terlarut dari lingkungan (absorpsi)", "serap", "n7"],
        b: ["Menelan makanan lalu mencernanya (ingesti)", "telan", "n8"] },
  n4: { q: "Susunan sel", k: "bentuk",
        a: ["Sel-sel berderet membentuk filamen", "filamen", "Monera"],
        b: ["Sel tunggal yang terpisah", "tunggal", "Monera"] },
  n5: { q: "Jumlah sel", k: "sel",
        a: ["Uniseluler (satu sel)", "U", "Protista"],
        b: ["Multiseluler dengan jaringan", "M", "n6"] },
  n6: { q: "Pembuluh angkut", k: "pemb",
        a: ["Tanpa pembuluh angkut (menyerap air lewat permukaan tubuh)", "tidak", "Plantae"],
        b: ["Memiliki pembuluh angkut (xilem dan floem)", "ya", "Plantae"] },
  n7: { q: "Inti sel dan dinding sel", k: "inti",
        a: ["Tanpa membran inti (prokariot)", "P", "Monera"],
        b: ["Berinti sejati dengan dinding sel dari kitin", "E", "n9"] },
  n8: { q: "Jumlah sel", k: "sel",
        a: ["Uniseluler (satu sel)", "U", "Protista"],
        b: ["Multiseluler tanpa dinding sel", "M", "n10"] },
  n9: { q: "Jumlah sel", k: "sel",
        a: ["Uniseluler (satu sel)", "U", "Fungi"],
        b: ["Multiseluler (tersusun dari hifa)", "M", "Fungi"] },
  n10: { q: "Tulang belakang", k: "tb",
        a: ["Tanpa tulang belakang (invertebrata)", "tidak", "Animalia"],
        b: ["Bertulang belakang (vertebrata)", "ya", "Animalia"] }
};

// Gambar kartu: file SVG buatanmu. Default: Assets/cards/<id>.svg (relatif terhadap folder situs).
// Untuk nama/lokasi lain, tambahkan  img: "Assets/nama-file.svg"  pada spesimen. Jika file tidak ada, dipakai emoji.
const ASSET = "Assets/cards/";

// Warna kartu per kingdom [warna utama, warna terang]
const KG = {
  Monera: ["#2f7de1", "#9cc7ff"], Protista: ["#8a4fd6", "#d3b4f7"], Fungi: ["#8b5a2b", "#dcb78a"],
  Plantae: ["#2e9e4f", "#a4e3b4"], Animalia: ["#ef8a1f", "#ffd49a"]
};
const RAR = ["", "Umum", "Langka", "Epik", "Legendaris"]; // rarity = kedalaman jalur kunci

// Spesimen: tepat satu per filum (22 filum). id = id filum di data.js, jadi gambar default-nya Assets/cards/<id>.svg
// t = ciri aslinya (dipakai kunci), c = 4 petunjuk bahasa sehari-hari,
// ct = ciri (kunci t) yang ditandai tiap petunjuk saat pemain salah pilih ("" = pelengkap),
// fn = nama filum, fq = ciri khas filum (soal bonus "Ahli Filum", pilihan jawaban = filum lain sekingdom).
const SP = [
  { id: "eubacteria", d: "eubacteria", e: "N", n: "Nostoc", l: "Nostoc sp.", k: "Monera", hp: 50, fn: "Eubacteria",
    m: [["Fotosintesis", "pulih 20 HP"], ["Pengikat Nitrogen", "20"]],
    f: "Sianobakteri purba ini ikut menghasilkan oksigen di bumi.",
    t: { mk: "auto", inti: "P", bentuk: "filamen" }, ct: ["mk", "inti", "bentuk", ""],
    c: ["Hijau kebiruan dan membuat makanan dari sinar matahari", "Isi selnya tidak punya ruang inti yang bersekat", "Selnya berderet seperti rantai manik-manik", "Ditemukan di kolam dan tanah lembap"],
    fq: "Bakteri sejati: dinding selnya mengandung peptidoglikan, termasuk sianobakteri dan bakteri penyebab penyakit." },
  { id: "archaea", d: "archaea", e: "H", n: "Halobacterium", l: "Halobacterium salinarum", k: "Monera", hp: 45, fn: "Archaea",
    m: [["Pigmen Ungu", "pulih 15 HP"], ["Semburan Garam", "25"]],
    f: "Hidup di danau sangat asin dan membuat airnya tampak merah muda.",
    t: { mk: "hetero", inti: "P", cara: "serap" }, ct: ["mk", "cara", "inti", ""],
    c: ["Tidak berfotosintesis, hidup dari zat organik di sekitarnya", "Menyerap zat gizi terlarut dari air garam di sekelilingnya", "Isi selnya tidak punya ruang inti yang bersekat", "Hidup di tambak garam yang sangat asin"],
    fq: "Prokariot penghuni lingkungan ekstrem (sangat asin, panas, atau tanpa oksigen) dengan dinding sel tanpa peptidoglikan." },
  { id: "protozoa", d: "protozoa", e: "P", n: "Paramecium", l: "Paramecium caudatum", k: "Protista", hp: 50, fn: "Protozoa",
    m: [["Silia Dayung", "20"], ["Vakuola Kontraktil", "pulih 10 HP"]],
    f: "Ribuan rambut getar (silia) bergerak serempak seperti dayung.",
    t: { mk: "hetero", cara: "telan", sel: "U" }, ct: ["mk", "cara", "sel", ""],
    c: ["Tidak berklorofil, harus mencari makan", "Menyapu bakteri ke 'mulut' lalu menelannya", "Satu sel berbentuk sandal", "Bergerak dengan bulu-bulu getar"],
    fq: "Protista mirip hewan: bersel satu, bergerak aktif dengan silia, flagela, atau kaki semu, dan menelan makanan." },
  { id: "algae", d: "algae", e: "E", n: "Euglena", l: "Euglena viridis", k: "Protista", hp: 55, fn: "Algae",
    m: [["Fotosintesis", "pulih 20 HP"], ["Flagela Cambuk", "25"]],
    f: "Berfotosintesis saat terang, tetapi bisa memangsa saat gelap.",
    t: { mk: "auto", inti: "E", sel: "U" }, ct: ["mk", "inti", "sel", ""],
    c: ["Hijau karena klorofil dan bisa membuat makanan dari cahaya", "Punya inti sel yang jelas", "Satu sel yang berenang dengan cambuk", "Saat gelap ia memangsa, tetapi bukan tumbuhan"],
    fq: "Protista mirip tumbuhan: berklorofil dan berfotosintesis, tetapi bukan tumbuhan sejati." },
  { id: "slime-molds", d: "slime-molds", e: "J", n: "Jamur Lendir", l: "Physarum polycephalum", k: "Protista", hp: 50, fn: "Jamur Lendir",
    m: [["Plasmodium Menjalar", "20"], ["Pencari Jalan", "pulih 15 HP"]],
    f: "Satu sel raksasa ini bisa menemukan jalan terpendek di labirin.",
    t: { mk: "hetero", cara: "telan", sel: "U" }, ct: ["mk", "cara", "sel", ""],
    c: ["Kuning, tak berklorofil, memburu bakteri dan serpihan", "Menelan makanan dengan membungkusnya di seluruh tubuhnya", "Satu sel raksasa berinti banyak yang merayap seperti lendir", "Menyukai kayu lapuk yang lembap"],
    fq: "Protista mirip jamur: merayap seperti lendir sebagai plasmodium atau kumpulan sel, memakan bakteri dan sisa organik, lalu membentuk spora." },
  { id: "chytridiomycota", d: "chytridiomycota", e: "C", n: "Chytrid", l: "Batrachochytrium dendrobatidis", k: "Fungi", hp: 40, fn: "Chytridiomycota",
    m: [["Zoospora Renang", "20"], ["Penyerap Kulit", "pulih 10 HP"]],
    f: "Jamur ini menjadi penyebab menurunnya populasi katak di berbagai benua.",
    t: { mk: "hetero", cara: "serap", inti: "E", sel: "U" }, ct: ["mk", "cara", "inti", "sel"],
    c: ["Tak berfotosintesis, hidup dari kulit inangnya", "Menyerap nutrisi dari kulit katak", "Selnya berinti sejati, dinding selnya dari kitin", "Satu sel yang menghasilkan spora berenang berekor cambuk"],
    fq: "Fungi paling primitif: satu-satunya fungi yang menghasilkan spora berflagela (zoospora), umumnya hidup di air atau tanah lembap." },
  { id: "zygomycota", d: "zygomycota", e: "K", n: "Kapang Roti", l: "Rhizopus stolonifer", k: "Fungi", hp: 40, fn: "Zygomycota",
    m: [["Hifa Menjalar", "20"], ["Spora Hitam", "25"]],
    f: "Mencerna roti dari luar tubuh, lalu menyerap hasilnya.",
    t: { mk: "hetero", cara: "serap", inti: "E", sel: "M" }, ct: ["mk", "cara", "inti", "sel"],
    c: ["Tidak hijau, tumbuh di roti tanpa fotosintesis", "Mencerna roti di luar tubuh lalu menyerap hasilnya", "Selnya berinti sejati, dinding selnya dari kitin", "Tubuh banyak sel berupa benang putih berbintik hitam"],
    fq: "Fungi dengan hifa tanpa sekat yang berkembang biak seksual dengan zigospora dan aseksual dengan sporangiospora (contoh kapang roti)." },
  { id: "ascomycota", d: "ascomycota", e: "R", n: "Ragi", l: "Saccharomyces cerevisiae", k: "Fungi", hp: 35, fn: "Ascomycota",
    m: [["Pertunasan", "pulih 15 HP"], ["Fermentasi", "20"]],
    f: "Dipakai untuk membuat roti mengembang dan tape.",
    t: { mk: "hetero", cara: "serap", inti: "E", sel: "U" }, ct: ["mk", "cara", "inti", "sel"],
    c: ["Tidak berfotosintesis, hidup dari gula di sekitarnya", "Menyerap gula terlarut lewat dindingnya yang kaku", "Selnya berinti sejati, dinding selnya dari kitin", "Satu sel yang berkembang biak dengan 'tunas'"],
    fq: "Fungi kantung: spora seksualnya terbentuk di dalam kantung (askus), contoh ragi, Penicillium, dan morel." },
  { id: "basidiomycota", d: "basidiomycota", e: "J", n: "Jamur Tiram", l: "Pleurotus ostreatus", k: "Fungi", hp: 45, fn: "Basidiomycota",
    m: [["Spora Kabut", "20"], ["Penyerap Nutrisi", "pulih 15 HP"]],
    f: "Menguraikan kayu lapuk menjadi zat hara bagi tanah.",
    t: { mk: "hetero", cara: "serap", inti: "E", sel: "M" }, ct: ["mk", "cara", "inti", "sel"],
    c: ["Tidak hijau dan tidak membuat makanan sendiri", "Menyerap nutrisi dari kayu lapuk", "Selnya berinti sejati, dinding selnya dari kitin", "Tubuh dari banyak benang halus (hifa) yang menyatu"],
    fq: "Fungi gada: spora seksualnya terbentuk di atas basidium, contoh jamur tiram, jamur merang, dan jamur payung." },
  { id: "bryophyta", d: "bryophyta", e: "L", n: "Lumut", l: "Bryophyta sp.", k: "Plantae", hp: 40, fn: "Bryophyta",
    m: [["Fotosintesis", "pulih 20 HP"], ["Spora Kapsul", "20"]],
    f: "Tidak berakar sejati; air diserap lewat seluruh permukaan tubuhnya.",
    t: { mk: "auto", inti: "E", sel: "M", pemb: "tidak" }, ct: ["mk", "inti", "sel", "pemb"],
    c: ["Hijau dan membuat makanan sendiri dari cahaya", "Selnya punya inti sejati", "Tersusun dari banyak sel", "Menyerap air lewat seluruh permukaan karena tak punya 'pipa' angkut"],
    fq: "Tumbuhan tanpa pembuluh angkut dengan fase gametofit dominan dan rizoid sebagai akar semu." },
  { id: "pteridophyta", d: "pteridophyta", e: "P", n: "Paku", l: "Pteridophyta sp.", k: "Plantae", hp: 55, fn: "Pteridophyta",
    m: [["Fotosintesis", "pulih 20 HP"], ["Spora Berserak", "25"]],
    f: "Daun mudanya menggulung seperti kepala biola.",
    t: { mk: "auto", inti: "E", sel: "M", pemb: "ya" }, ct: ["mk", "inti", "sel", "pemb"],
    c: ["Hijau dan membuat makanan sendiri dari cahaya", "Selnya punya inti sejati", "Tubuh banyak sel dengan akar, batang, dan daun", "Punya 'pipa' angkut air dan zat hara, tetapi tanpa bunga"],
    fq: "Tumbuhan berpembuluh yang berkembang biak dengan spora; daun muda menggulung dan spora berada di sorus." },
  { id: "gymnosperms", d: "gymnosperms", e: "P", n: "Pinus", l: "Pinus merkusii", k: "Plantae", hp: 65, fn: "Gymnospermae",
    m: [["Daun Jarum", "20"], ["Hujan Serbuk Sari", "25"]],
    f: "Bijinya terbuka di sisik runjung, tanpa dilindungi buah.",
    t: { mk: "auto", inti: "E", sel: "M", pemb: "ya" }, ct: ["mk", "inti", "sel", "pemb"],
    c: ["Hijau sepanjang tahun dan membuat makanan dari cahaya", "Selnya punya inti sejati", "Pohon tinggi dengan jutaan sel dan berdaun jarum", "Punya 'pipa' angkut, tidak berbunga, bijinya di runjung"],
    fq: "Tumbuhan berpembuluh dengan biji terbuka (tanpa buah) yang terletak pada sisik runjung." },
  { id: "angiosperms", d: "angiosperms", e: "P", n: "Pohon Mangga", l: "Mangifera indica", k: "Plantae", hp: 60, fn: "Angiospermae",
    m: [["Fotosintesis", "pulih 25 HP"], ["Buah Jatuh", "30"]],
    f: "Bijinya terlindungi di dalam buah yang manis.",
    t: { mk: "auto", inti: "E", sel: "M", pemb: "ya" }, ct: ["mk", "inti", "sel", "pemb"],
    c: ["Tidak perlu makan, cukup air, udara, dan cahaya", "Selnya punya inti sejati", "Raksasa dengan jutaan sel, berakar dan berkayu", "Punya 'pipa' angkut air, berbunga, dan berbuah"],
    fq: "Tumbuhan berbunga dengan biji tertutup di dalam buah dan mengalami pembuahan ganda." },
  { id: "porifera", d: "porifera", e: "S", n: "Spons", l: "Euspongia sp.", k: "Animalia", hp: 45, fn: "Porifera",
    m: [["Saringan Air", "pulih 15 HP"], ["Spikula Tajam", "20"]],
    f: "Seluruh tubuhnya berpori dan menyaring air sebagai cara makan.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Tidak membuat makanan sendiri, menyaring plankton", "Memasukkan partikel makanan lewat pori lalu dicerna di dalam sel", "Tubuh banyak sel, tetapi belum punya organ sejati", "Tanpa tulang belakang, menempel diam di dasar laut"],
    fq: "Hewan berpori yang menempel di dasar laut, menyaring makanan dengan sel koanosit, dan belum punya jaringan sejati." },
  { id: "cnidaria", d: "cnidaria", e: "U", n: "Ubur-ubur", l: "Aurelia aurita", k: "Animalia", hp: 50, fn: "Cnidaria",
    m: [["Sengat Nematokista", "25"], ["Denyut Payung", "pulih 10 HP"]],
    f: "Tubuhnya hampir seluruhnya air dan bersel penyengat.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Memangsa plankton, tidak berfotosintesis", "Menangkap mangsa dengan tentakel lalu memasukkannya ke mulut", "Tubuh banyak sel berbentuk payung lunak", "Tanpa tulang belakang, tentakelnya bersel penyengat"],
    fq: "Hewan berbentuk polip atau medusa dengan tentakel bersel penyengat (knidosit) dan rongga gastrovaskuler." },
  { id: "platyhelminthes", d: "platyhelminthes", e: "P", n: "Planaria", l: "Dugesia sp.", k: "Animalia", hp: 40, fn: "Platyhelminthes",
    m: [["Regenerasi", "pulih 25 HP"], ["Bintik Mata", "15"]],
    f: "Dipotong menjadi dua, tiap potongan bisa tumbuh menjadi planaria utuh.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Pemakan sisa hewan kecil, bukan pembuat makanan sendiri", "Menelan makanan lewat belalai di perutnya", "Tubuh banyak sel, pipih seperti pita", "Tanpa tulang belakang dan tanpa rongga tubuh"],
    fq: "Cacing pipih tanpa rongga tubuh dengan satu lubang pencernaan, contoh planaria, cacing hati, dan cacing pita." },
  { id: "nematoda", d: "nematoda", e: "C", n: "Cacing Gelang", l: "Ascaris lumbricoides", k: "Animalia", hp: 45, fn: "Nematoda",
    m: [["Cengkeraman Usus", "20"], ["Telur Tahan Lama", "pulih 15 HP"]],
    f: "Bisa bertelur ratusan ribu butir per hari di usus inangnya.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Hidup dari makanan setengah cerna di usus inangnya", "Menelan sari makanan dari usus inang", "Tubuh banyak sel, panjang bulat dan licin", "Tanpa tulang belakang, tubuhnya tidak beruas"],
    fq: "Cacing bulat panjang tak beruas dengan saluran pencernaan lengkap dan rongga tubuh semu (pseudoselom)." },
  { id: "annelida", d: "annelida", e: "C", n: "Cacing Tanah", l: "Lumbricus terrestris", k: "Animalia", hp: 45, fn: "Annelida",
    m: [["Gali Tanah", "20"], ["Pupuk Alami", "pulih 20 HP"]],
    f: "Kotorannya menyuburkan tanah, dan jantungnya berjumlah lima pasang.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Memakan tanah dan sisa daun, tidak berfotosintesis", "Menelan tanah lalu mencerna zat organiknya di dalam tubuh", "Tubuh banyak sel, memanjang dan terbagi ruas-ruas", "Tanpa tulang belakang, tubuh bersegmen dan berlendir"],
    fq: "Cacing bersegmen (metameri) dengan rongga tubuh sejati dan sistem peredaran darah tertutup." },
  { id: "mollusca", d: "mollusca", e: "S", n: "Siput", l: "Helix aspersa", k: "Animalia", hp: 50, fn: "Mollusca",
    m: [["Cangkang Kokoh", "pulih 15 HP"], ["Radula Parut", "20"]],
    f: "Lendirnya melindungi kakinya saat merayap di permukaan kasar.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Memarut daun, tak bisa membuat makanan sendiri", "Menelan makanan yang diparut lidahnya", "Tubuh lunak, banyak sel, berjaringan", "Tanpa tulang belakang, ada kaki otot"],
    fq: "Hewan bertubuh lunak tanpa ruas dengan kaki otot, mantel, dan umumnya bercangkang." },
  { id: "arthropoda", d: "arthropoda", e: "K", n: "Kupu-kupu", l: "Rhopalocera", k: "Animalia", hp: 45, fn: "Arthropoda",
    m: [["Sisik Kejut", "20"], ["Metamorfosis", "pulih 25 HP"]],
    f: "Berubah dari ulat menjadi kepompong, lalu bersayap.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Menyedot madu karena tak bisa membuat makanan sendiri", "Memasukkan makanan ke tubuh lalu mencernanya di dalam", "Tubuh banyak sel dengan jaringan dan organ", "Tanpa tulang belakang, tubuh beruas dan kaki bersendi"],
    fq: "Hewan berkerangka luar dari kitin dengan tubuh beruas dan anggota gerak bersendi." },
  { id: "echinodermata", d: "echinodermata", e: "B", n: "Bintang Laut", l: "Asterias sp.", k: "Animalia", hp: 55, fn: "Echinodermata",
    m: [["Lengan Pencengkeram", "25"], ["Regenerasi Lengan", "pulih 25 HP"]],
    f: "Kehilangan lengan bukan masalah, karena lengannya bisa tumbuh lagi.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "tidak" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Memangsa kerang, tak membuat makanan sendiri", "Mengeluarkan perutnya untuk mencerna kerang lalu menelannya", "Tubuh banyak sel, simetri bintang berlengan lima", "Tanpa tulang belakang, kulitnya berduri dan berkaki tabung"],
    fq: "Hewan laut berkulit duri dengan simetri radial lima bagian serta sistem pembuluh air dengan kaki tabung." },
  { id: "chordata", d: "chordata", e: "K", n: "Katak", l: "Rana sp.", k: "Animalia", hp: 55, fn: "Chordata",
    m: [["Lidah Lengket", "25"], ["Lompat Jauh", "20"]],
    f: "Bisa bernapas juga lewat kulitnya yang lembap.",
    t: { mk: "hetero", cara: "telan", sel: "M", tb: "ya" }, ct: ["mk", "cara", "sel", "tb"],
    c: ["Memangsa serangga, tak membuat makanan sendiri", "Menelan mangsa bulat-bulat", "Tubuh banyak sel berjaringan dan berorgan", "Punya tulang belakang"],
    fq: "Hewan dengan notokorda, tali saraf dorsal berongga, dan celah faring pada salah satu fase hidupnya." }
];

// Gambar kartu terbaru: folder Assets/Card Asset/ (nama file = nama genus, bukan id filum).
// Protozoa (Paramecium) dan Nematoda (Ascaris) belum punya file di folder itu, jadi tetap pakai Assets/cards/<id>.svg lalu emoji.
const CARD_DIR = "Assets/Card Asset/";
const CARD_IMG = {
  eubacteria: "Nostoc sp", archaea: "Helobacterium", algae: "Euglena", "slime-molds": "Physarum",
  protozoa: "Paramecium",          // <-- tambah ini
  chytridiomycota: "Batrachochytrium", zygomycota: "Rhizopus", ascomycota: "Saccharomyces", basidiomycota: "Pleurotus",
  bryophyta: "Bryophyta", pteridophyta: "Pteridophyta", gymnosperms: "Pinus", angiosperms: "Mangifera",
  porifera: "Euspongia", cnidaria: "Aurelia", platyhelminthes: "Planaria", 
  nematoda: "Ascaris",             // <-- tambah ini
  annelida: "Lumbricus",
  mollusca: "Helix", arthropoda: "Rhopalocera", echinodermata: "Asterias", chordata: "Rana"
};
SP.forEach(s => { if (CARD_IMG[s.id]) s.img = CARD_DIR + CARD_IMG[s.id] + ".svg"; });

// Gerakan singkat karakter di kartu (lihat keyframes mv-* di CSS):
// wiggle = menggeliat, swim = berenang, ooze = melar, sway = bergoyang, puff = mengembang,
// pulse = berdenyut, crawl = merayap, flutter = mengepak, spin = berputar kecil, hop = melompat
const MV = {
  eubacteria: "wiggle", archaea: "wiggle", protozoa: "swim", algae: "swim", "slime-molds": "ooze",
  chytridiomycota: "swim", zygomycota: "puff", ascomycota: "puff", basidiomycota: "puff",
  bryophyta: "sway", pteridophyta: "sway", gymnosperms: "sway", angiosperms: "sway",
  porifera: "puff", cnidaria: "pulse", platyhelminthes: "ooze", nematoda: "wiggle", annelida: "ooze",
  mollusca: "crawl", arthropoda: "flutter", echinodermata: "spin", chordata: "hop"
};

/* ===================== LOGIKA ===================== */
const $ = s => R.querySelector(s);
const art = s => `<img src="${ROOT + encodeURI(s.img || ASSET + s.id + ".svg")}" alt="${s.n}" data-e="${s.e}" onerror="this.replaceWith(this.dataset.e)">`;
const sh = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);
const T = SP.length;

// sisi benar di sebuah simpul ditentukan oleh ciri spesimen (s.t)
const side = (n, s) => s.t[KEY[n].k] === KEY[n].a[1] ? "a" : "b";
// jalur simpul yang dilewati spesimen hingga hasil akhir
function path(s) {
  const p = [];
  let n = "n1";
  while (KEY[n]) { p.push(n); n = KEY[n][side(n, s)][2]; }
  return p;
}

let S = { got: {}, pins: [] };
try { Object.assign(S, JSON.parse(localStorage.getItem("detektif-taksonomi-v1") || "{}")); } catch (e) {}
const save = () => { try { localStorage.setItem("detektif-taksonomi-v1", JSON.stringify(S)); } catch (e) {} };

let G = { tab: "play", q: [], n: 0, rc: 0 };

function nextSp() {
  if (!G.q.length) { const u = LIST.filter(s => !S.got[s.id]); G.q = sh(u.length ? u : LIST); }
  Object.assign(G, { sp: G.q.shift(), node: "n1", lives: 3, mist: 0, trail: [], hint: [], msg: "", ord: sh([0, 1, 2, 3]), n: G.n + 1 });
  M.querySelector("#md").hidden = true;
  draw();
}

/* ---------- kartu ---------- */
function card(s, pop) {
  const g = S.got[s.id], i = String(SP.indexOf(s) + 1).padStart(2, "0");
  if (!g) return `<div class="card lock" data-id="${s.id}"><div class="q">?</div><small>${i}/${T}</small></div>`;
  const d = path(s).length - 2, [a, b] = KG[s.k];
  return `<div class="card${pop ? " pop" : ""}" data-id="${s.id}"${MV[s.id] ? ` data-mv="${MV[s.id]}"` : ""} style="--a:${a};--b:${b}">
  <div class="ch"><b>${s.n}</b><span class="hp">HP ${s.hp}</span></div>
  <div class="art">${art(s)}<span class="rar">${RAR[d]}</span>${g.h ? '<span class="hl">HOLO</span>' : ""}${g.f ? '<span class="ahli">Ahli Filum</span>' : ""}${g.h ? '<div class="holo"></div>' : ""}</div>
  <div class="meta"><i>${s.l}</i><span>${s.k}</span></div>
  ${s.m.map(m => `<div class="mv"><b>${m[0]}</b><span>${m[1]}</span></div>`).join("")}
  <p class="fa">${s.f}</p>
  <div class="cf"><span>${i}/${T}</span><b>${"★".repeat(d)}</b></div></div>`;
}

/* ---------- layar main ---------- */
function playHTML() {
  const s = G.sp, K = KEY[G.node];
  return `<div class="pn">
  <div class="spec"><div class="sil"><span>${art(s)}</span></div>
   <div><h2>Spesimen misterius #${G.n}</h2><div class="hearts" aria-label="Nyawa ${G.lives}">Nyawa ${"●".repeat(G.lives)}${"○".repeat(3 - G.lives)}</div></div></div>
  <ul class="cl">${G.ord.map(i => `<li class="${s.ct[i] && G.hint.includes(s.ct[i]) ? "hint" : ""}">${s.c[i]}</li>`).join("")}</ul></div>
  <div class="pn"><h3>Kunci dikotomi, langkah ${G.trail.length + 1}: ${K.q}</h3>
  <p>Pilih pernyataan yang cocok dengan spesimen.</p>
  <button class="opt" data-act="pick" data-s="a"><b>A.</b> ${K.a[0]}</button>
  <button class="opt" data-act="pick" data-s="b"><b>B.</b> ${K.b[0]}</button>
  <p class="msg ${G.ok ? "ok" : "no"}" aria-live="polite">${G.msg}</p>
  ${G.trail.length ? `<p class="tr">Jalur: ${G.trail.map(t => t.toUpperCase()).join(" → ")}</p>` : ""}</div>`;
}

function pick(x) {
  const s = G.sp;
  if (x === side(G.node, s)) {
    G.trail.push(x);
    const nx = KEY[G.node][x][2];
    if (KEY[nx]) { G.node = nx; G.ok = 1; G.msg = "Tepat! Lanjut ke langkah berikutnya."; draw(); }
    else win();
  } else {
    G.lives--; G.mist++; G.hint.push(KEY[G.node].k); G.ok = 0;
    G.msg = "Belum tepat. Cek ciri yang ditandai “Petunjuk”, lalu coba lagi.";
    G.lives ? draw() : lose();
  }
}

function modal(h) { const m = M.querySelector("#md"); m.innerHTML = `<div class="mo">${h}</div>`; m.hidden = false; }

function lose() {
  draw();
  if (G.q.length) G.q.push(G.sp);
  modal(`<h2>Nyawa habis</h2><p>Spesimen ini belum teridentifikasi. Ia akan muncul lagi nanti, jadi perhatikan ciri yang ditandai “Petunjuk”.</p><button class="on" data-act="next">Spesimen berikutnya</button>`);
}

function win() {
  const s = G.sp, old = S.got[s.id] || { h: 0, f: 0 };
  S.got[s.id] = { h: old.h || (G.mist === 0 ? 1 : 0), f: old.f };
  save(); draw();
  const why = path(s).map((n, i) => KEY[n][G.trail[i]][0].toLowerCase()).join("; ");
  G.bq = null;
  if (!old.f) {
    const o = SP.filter(x => x.k === s.k && x.id !== s.id).map(x => x.fn);
    G.bq = { q: s.fq, o: sh([s.fn, ...sh(o).slice(0, 3)]), a: s.fn, done: 0 };
  }
  G.why = `<p><b>${s.n}</b> masuk <b>${s.k}</b> karena: ${why}.</p>`;
  G.mpop = 1; showWin();
}

function showWin() {
  const s = G.sp, g = S.got[s.id], b = G.bq;
  let bonus = "";
  if (b) bonus = `<div class="bq"><b>Bonus (opsional): Ahli Filum</b><p>${b.q} Filum apa ini?</p>${b.o.map(o => `<button class="opt" data-act="fl" data-v="${o}" ${b.done ? "disabled" : ""}>${o}</button>`).join("")}<p class="msg ${b.ok ? "ok" : "no"}">${b.res || ""}</p></div>`;
  modal(`<h2>Kartu didapat!${g.h ? " (HOLO)" : ""}</h2>${card(s, G.mpop)}${G.why}${g.h ? "<p>Tanpa salah sedikit pun, kartu HOLO!</p>" : ""}${bonus}<button class="on" data-act="next">Lanjut</button>`);
  G.mpop = 0;
}

function fl(v) {
  const b = G.bq, s = G.sp;
  b.done = 1; b.ok = v === b.a;
  if (b.ok) { S.got[s.id].f = 1; save(); b.res = "Benar! Badge Ahli Filum didapat."; }
  else b.res = "Belum tepat. Jawabannya " + b.a + ".";
  showWin();
}

function albumHTML() {
  const ids = Object.keys(S.got), h = ids.filter(i => S.got[i].h).length;
  let o = `<div class="pn"><h2>Koleksi Kartu</h2><div class="bar"><i style="width:${ids.length / T * 100}%"></i></div>
  <p>${ids.length} dari ${T} kartu · ${h} kartu HOLO</p>${ids.length === T ? '<p class="ok"><b>Selamat, Detektif! Seluruh kartu sudah terkumpul.</b></p>' : ""}
  <p class="tr">Klik kartu koleksi untuk memajangnya di Pajangan (maks. 3). Klik lagi untuk melepas.</p></div>`;
  const pins = S.pins.map(i => SP.find(s => s.id === i)).filter(s => s && S.got[s.id]);
  if (pins.length) o += `<div class="pn"><h3>Pajangan</h3><div class="g pg">${pins.map(s => card(s)).join("")}</div></div>`;
  for (const kg of Object.keys(KG)) {
    const l = SP.filter(s => s.k === kg), n = l.filter(s => S.got[s.id]).length;
    o += `<div class="pn"><div class="kh"><h3>${kg}</h3><span>${n}/${l.length}</span>${n === l.length ? `<span class="mk">Master ${kg}</span>` : ""}</div><div class="g">${l.map(s => card(s)).join("")}</div></div>`;
  }
  return o + `<button data-act="reset">${G.rc ? "Yakin? Klik lagi untuk menghapus koleksi" : "Reset koleksi"}</button>`;
}

function draw() {
  $("#app").innerHTML = MODE === "album" ? albumHTML() : playHTML() + mine();
}
function syncScore() {
  if (typeof getProgress !== "function" || typeof saveProgress !== "function") return;
  try {
    const p = getProgress();
    for (const id of Object.keys(p.kingdoms)) {
      const all = SP.filter(s => s.k.toLowerCase() === id);
      if (!all.length) continue;
      const pct = Math.round(all.filter(s => S.got[s.id]).length / all.length * 100);
      p.kingdoms[id].score = Math.max(p.kingdoms[id].score || 0, pct);
    }
    saveProgress(p);
    if (typeof renderKingdomCards === "function") renderKingdomCards();
  } catch (e) {}
}
function mine() {
  const n = LIST.filter(s => S.got[s.id]).length, kg = !!gm.dataset.detektifKingdom, pct = Math.round(n / LIST.length * 100);
  return `<div class="pn"><h3>Kartu ${kg ? "kingdom" : "filum"} ini: ${n}/${LIST.length}</h3>${kg ? `<div class="bar"><i style="width:${pct}%"></i></div><p class="tr">Skor kingdom ${pct}%. Kumpulkan minimal 85% kartu untuk membuka kingdom berikutnya.</p>` : ""}<div class="g">${LIST.map(s => card(s)).join("")}</div><p class="tr"><a href="${ALBUM}">Lihat seluruh galeri kartu</a></p></div>`;
}

if (gm) { LIST = SP.filter(s => gm.dataset.detektifKingdom ? s.k.toLowerCase() === gm.dataset.detektifKingdom : s.d === gm.dataset.detektif); if (!LIST.length) { (gm.closest("section") || gm).hidden = true; return; } }
R = host.attachShadow({ mode: "open" });
R.innerHTML = `<style>${DT_CSS}</style>${DT_HTML}`;
M = document.body.appendChild(document.createElement("div")).attachShadow({ mode: "open" });
M.innerHTML = `<style>${DT_CSS}</style><div class="ov" id="md" hidden></div>`;
const fxOpen = MODE !== "album" ? null : (function () {
  const FX_CSS = `
.fxov{position:fixed;inset:0;z-index:1100;background:rgba(5,10,16,.78);animation:fxbg .25s ease-out}
.fxov[hidden]{display:none}
.fxov canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
.fxst{position:absolute;inset:0;z-index:2;display:grid;place-items:center}
.fxcard{--w:min(90vw,calc(85vh*.694));width:var(--w);animation:fxin .3s cubic-bezier(.2,.9,.3,1) both}
@supports(height:1dvh){.fxcard{--w:min(90vw,calc(85dvh*.694))}}
.fxcard .card{width:100%;font-size:calc(var(--w)/20);cursor:default}
.fxbt{position:absolute;top:10px;right:10px;z-index:3;display:flex;gap:8px}
@keyframes fxbg{from{opacity:0}to{opacity:1}}
@keyframes fxin{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.fxov,.fxcard{animation:none}.fxov canvas{display:none}}`;

  const F = document.body.appendChild(document.createElement("div")).attachShadow({ mode: "open" });
  F.innerHTML = `<style>${DT_CSS}${FX_CSS}</style>
<div class="fxov" hidden role="dialog" aria-modal="true" aria-label="Kartu terpilih">
  <canvas></canvas>
  <div class="fxst"><div class="fxcard"></div></div>
  <div class="fxbt"><button data-fx="pin"></button><button data-fx="close" class="on">Tutup</button></div>
</div>`;

  const ov = F.querySelector(".fxov"), cv = F.querySelector("canvas"), cx = cv.getContext("2d"),
        hostC = F.querySelector(".fxcard"), pinB = F.querySelector('[data-fx="pin"]'),
        RM = matchMedia("(prefers-reduced-motion: reduce)");
  const PAL = { Monera: ["#4aa3ff", "#a9d4ff"], Protista: ["#4fcf6a", "#b6f0a8"], Fungi: ["#e8d9b5", "#9a6a3a"],
                Plantae: ["#3fae5a", "#ffe45c"], Animalia: ["#ff9a2e", "#ffc46b"] };
  let raf = 0, ps = [], W = 0, H = 0, kg = "", cur = "", last = 0;

  function size() {
    const d = Math.min(devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0);
  }
  const edgeX = () => { const r = Math.random() * W * (W < 640 ? .24 : .2); return Math.random() < .5 ? r : W - r; };

  function spawn(p, init) {
    const rnd = Math.random, pal = PAL[kg] || PAL.Monera;
    p.x = edgeX(); p.ph = rnd() * 6.28; p.f = 1 + rnd(); p.amp = 6 + rnd() * 10;
    p.max = 3 + rnd() * 3; p.t = init ? rnd() * p.max : 0; p.c = pal[0]; p.fly = false;
    const y0 = init ? rnd() * H : null;
    if (kg === "Monera") { p.r = 2 + rnd() * 4; p.vy = -(25 + rnd() * 45); p.y = y0 ?? H + 10; }
    else if (kg === "Protista") { p.r = 1.5 + rnd() * 2.5; p.vy = -(5 + rnd() * 10); p.amp = 14 + rnd() * 14; p.f = .8 + rnd() * .6; p.y = y0 ?? H + 10; }
    else if (kg === "Fungi") { p.r = 1.2 + rnd() * 2.3; p.vy = 15 + rnd() * 25; p.c = rnd() < .5 ? pal[0] : pal[1]; p.y = y0 ?? -10; }
    else if (kg === "Plantae") {
      if (p.lf === undefined) p.lf = rnd() < .8;
      if (p.lf) { p.r = 3 + rnd() * 3; p.vy = 25 + rnd() * 30; p.y = y0 ?? -10; p.c = pal[0]; }
      else { p.fly = true; p.r = 1.6 + rnd(); p.vy = (rnd() - .5) * 12; p.y = rnd() * H; p.c = pal[1]; }
    }
    else { p.r = 1 + rnd() * 2; p.vy = -(40 + rnd() * 70); p.max = 1.2 + rnd() * 1.3; p.t = init ? rnd() * p.max : 0;
           p.y = H * (.45 + rnd() * .55); p.c = rnd() < .6 ? pal[0] : pal[1]; }
  }

  function step(ts) {
    const dt = Math.min((ts - last) / 1000 || 0, .05); last = ts;
    cx.clearRect(0, 0, W, H);
    for (const p of ps) {
      p.t += dt; p.ph += dt; p.y += p.vy * dt;
      const x = p.x + Math.sin(p.ph * p.f) * p.amp;
      if (p.y > H + 14 || p.y < -14 || ((kg === "Animalia" || p.fly) && p.t > p.max)) { spawn(p); continue; }
      cx.fillStyle = cx.strokeStyle = p.c;
      if (kg === "Monera") {
        cx.globalAlpha = .25; cx.beginPath(); cx.arc(x, p.y, p.r, 0, 6.283); cx.fill();
        cx.globalAlpha = .8; cx.stroke();
      } else if (kg === "Plantae" && !p.fly) {
        cx.globalAlpha = .85; cx.beginPath(); cx.ellipse(x, p.y, p.r * 1.8, p.r * .9, p.ph * 1.5, 0, 6.283); cx.fill();
      } else if (p.fly) {
        const a = Math.max(0, Math.sin(p.ph * 2.2)) * Math.sin(Math.PI * p.t / p.max);
        cx.globalAlpha = a * .25; cx.beginPath(); cx.arc(x, p.y, p.r * 3, 0, 6.283); cx.fill();
        cx.globalAlpha = a; cx.beginPath(); cx.arc(x, p.y, p.r, 0, 6.283); cx.fill();
      } else {
        cx.globalAlpha = kg === "Animalia" ? Math.max(0, 1 - p.t / p.max) : .7;
        cx.beginPath(); cx.arc(x, p.y, p.r, 0, 6.283); cx.fill();
      }
    }
    cx.globalAlpha = 1;
    raf = requestAnimationFrame(step);
  }

  function togglePin(id) {
    const i = S.pins.indexOf(id);
    if (i >= 0) S.pins.splice(i, 1); else { S.pins.push(id); if (S.pins.length > 3) S.pins.shift(); }
    save(); draw();
  }
  const pinLabel = () => { pinB.textContent = S.pins.includes(cur) ? "Lepas dari Pajangan" : "Pajangkan"; };
  const onKey = e => { if (e.key === "Escape") close(); };

  function close() {
    if (ov.hidden) return;
    cancelAnimationFrame(raf); raf = 0; ps = []; cx.clearRect(0, 0, W, H);
    ov.hidden = true; hostC.replaceChildren();
    document.removeEventListener("keydown", onKey); removeEventListener("resize", size);
  }

  function open(c) {
    const s = SP.find(x => x.id === c.dataset.id);
    if (!s) return;
    c.style.transform = "";
    const n = c.cloneNode(true);
    n.classList.remove("pop"); n.style.transform = "";
    hostC.replaceChildren(n);
    cur = s.id; kg = s.k; pinLabel(); ov.hidden = false;
    F.querySelector('[data-fx="close"]').focus();
    document.addEventListener("keydown", onKey);
    if (!RM.matches) {
      size(); addEventListener("resize", size);
      const cnt = Math.round((25 + Math.floor(Math.random() * 16)) * (W < 640 ? .5 : 1));
      ps = Array.from({ length: cnt }, () => { const p = {}; spawn(p, true); return p; });
      last = performance.now(); raf = requestAnimationFrame(step);
    }
  }

  F.addEventListener("click", e => {
    const b = e.target.closest("[data-fx]");
    if (b) { if (b.dataset.fx === "close") close(); else { togglePin(cur); pinLabel(); } return; }
    if (!e.target.closest(".card")) close(); // klik di luar kartu
  });
  return open;
})();
const on = (ev, fn) => { R.addEventListener(ev, fn); M.addEventListener(ev, fn); };
on("click", e => {
  const b = e.target.closest("[data-act]"), c = e.target.closest(".card");
  if (b) {
    const a = b.dataset.act;
    if (a === "tab") { G.tab = b.dataset.v; G.rc = 0; draw(); }
    else if (a === "pick") pick(b.dataset.s);
    else if (a === "fl") fl(b.dataset.v);
    else if (a === "next") nextSp();
    else if (a === "reset") {
      if (G.rc) { S = { got: {}, pins: [] }; save(); G.rc = 0; G.q = []; } else G.rc = 1;
      draw();
    }
} else if (c && MODE === "album" && !c.closest("#md") && S.got[c.dataset.id]) {
  fxOpen(c);
}
});

on("pointermove", e => {
  const c = e.target.closest && e.target.closest(".card:not(.lock)");
  if (!c) return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  c.style.transform = `perspective(700px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
});
on("pointerout", e => {
  const c = e.target.closest && e.target.closest(".card");
  if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
});

if (MODE === "game") nextSp(); else draw();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();