/*
  BioScope — application logic
  All learning state is stored locally in the browser.
*/

const STORE_KEY = "bioscopeProgress";
const ROLE_KEY = "bioscopeRole";
const THEME_KEY = "bioscopeTheme";

// ---------- Night mode ----------

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);

  if (saved === "dark" || saved === "light") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

function setupThemeToggle() {
  // Terapkan tema tersimpan/preferensi sistem sedari awal
  applyTheme(getPreferredTheme());

  const toggle = document.querySelector("#theme-toggle");

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    if (!textElement) return;

    const words = [
        "PEMBELAJARAN BIOLOGI INTERAKTIF", 
        "JELAJAHI LIMA KERAJAAN", 
        "UNGKAP RAHASIA KLASIFIKASI"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Proses menghapus huruf mundur
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Proses mengetik huruf maju satu per satu
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 40 : 80; // Kecepatan hapus (40ms) vs ketik (80ms)

        // Jika satu kalimat selesai diketik sepenuhnya
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 1000; // Diam sebentar selama 2 detik sebelum mulai menghapus
            isDeleting = true;
        } 
        // Jika satu kalimat selesai dihapus, pindah ke kalimat berikutnya
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Jeda sebelum ngetik kalimat baru
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Jalankan efek ketiknya setelah halaman dimuat
    setTimeout(typeWriter, 500);
});

// Prototype role switch: student mengikuti unlock 85%, admin dapat melihat semua materi.
function isAdminMode() {
  return localStorage.getItem(ROLE_KEY) === "admin";
}

function setRole(role) {
  if (role === "admin") {
    localStorage.setItem(ROLE_KEY, "admin");
  } else {
    localStorage.removeItem(ROLE_KEY);
  }
}

function adminAwareUnlock(kingdomId, progress) {
  return isAdminMode() || kingdomUnlocked(kingdomId, progress);
}

// ---------- Progress state ----------

function freshProgress() {
  const progress = {
    whyClassify: false,
    kingdoms: {},
  };

  for (const [kingdomId, kingdom] of Object.entries(BIOSCOPE_DATA.kingdoms)) {
    progress.kingdoms[kingdomId] = {
      progress: 0,
      score: 0,
      completed: false,
      divisions: {},
    };

    for (const divisionId of kingdom.division_ids) {
      progress.kingdoms[kingdomId].divisions[divisionId] = {
        materialViewed: false,
        challengeCompleted: false,
      };
    }
  }

  return progress;
}

function getProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    return saved ? mergeProgress(freshProgress(), saved) : freshProgress();
  } catch {
    return freshProgress();
  }
}

function mergeProgress(base, saved) {
  for (const kingdomId of Object.keys(base.kingdoms)) {
    if (!saved.kingdoms?.[kingdomId]) {
      continue;
    }

    base.kingdoms[kingdomId] = {
      ...base.kingdoms[kingdomId],
      ...saved.kingdoms[kingdomId],
      divisions: {
        ...base.kingdoms[kingdomId].divisions,
        ...(saved.kingdoms[kingdomId].divisions || {}),
      },
    };
  }

  base.whyClassify = Boolean(saved.whyClassify);
  return base;
}

function saveProgress(progress) {
  localStorage.setItem(STORE_KEY, JSON.stringify(progress));
}

function kingdomUnlocked(kingdomId, progress) {
  const order = Object.keys(BIOSCOPE_DATA.kingdoms);
  const index = order.indexOf(kingdomId);

  if (index === 0) {
    return true;
  }

  const previousId = order[index - 1];
  return (progress.kingdoms[previousId]?.score || 0) >= 85;
}

function recalcKingdom(kingdomId, progress) {
  const kingdomProgress = progress.kingdoms[kingdomId];
  const divisions = Object.values(kingdomProgress.divisions);
  const totalActivities = divisions.length * 2;

  const completedActivities = divisions.reduce((total, division) => {
    return (
      total +
      (division.materialViewed ? 1 : 0) +
      (division.challengeCompleted ? 1 : 0)
    );
  }, 0);

  kingdomProgress.progress = Math.round(
    (completedActivities / totalActivities) * 100,
  );
  kingdomProgress.completed = kingdomProgress.progress === 100;
}

function markMaterial(kingdomId, divisionId) {
  const progress = getProgress();
  const kingdom = progress.kingdoms[kingdomId];

  if (!kingdom || !kingdom.divisions[divisionId]) {
    return;
  }

  kingdom.divisions[divisionId].materialViewed = true;
  recalcKingdom(kingdomId, progress);
  saveProgress(progress);
}

function markChallenge(kingdomId, divisionId) {
  const progress = getProgress();
  const kingdom = progress.kingdoms[kingdomId];

  if (!kingdom || !kingdom.divisions[divisionId]) {
    return;
  }

  kingdom.divisions[divisionId].challengeCompleted = true;
  recalcKingdom(kingdomId, progress);
  saveProgress(progress);
}

// ---------- Glosarium istilah taksonomi (untuk tooltip tag di Taxonomy Tree) ----------
// Definisi singkat 1 kalimat, ditujukan untuk mahasiswa S1 semester 1 yang
// baru mengenal istilah ini. Pakai bersama setupTermTooltips(): tempelkan
// atribut data-term="kunci" (huruf kecil, sesuai key di bawah) pada tag
// istilah di markup (mis. <span class="term-tag" data-term="absorptif">ABSORPTIF</span>),
// lalu tooltip definisinya akan muncul otomatis saat hover (desktop) atau tap (mobile).
const TAXONOMY_GLOSSARY = {
  absorptif: "Cara memperoleh makanan dengan menyerap senyawa sederhana hasil pencernaan di luar tubuh, tanpa perlu menelan makanan.",
  "eukariotik awal": "Kelompok organisme eukariotik purba yang menjadi salah satu garis keturunan paling awal setelah eukariota berevolusi dari nenek moyang prokariotik.",
  heterotrof: "Organisme yang tidak bisa membuat makanannya sendiri dan harus memperolehnya dari organisme lain.",
  autotrof: "Organisme yang mampu membuat makanannya sendiri dari bahan anorganik, biasanya lewat fotosintesis.",
  prokariotik: "Sel yang tidak memiliki membran inti sejati, sehingga materi genetiknya tersebar bebas di sitoplasma.",
  eukariotik: "Sel yang memiliki membran inti sejati beserta organel-organel bermembran lainnya.",
  saprotrof: "Organisme yang memperoleh makanan dengan menguraikan sisa organisme mati atau bahan organik di sekitarnya.",
  parasit: "Organisme yang hidup menumpang pada organisme lain (inang) dan mengambil nutrisi darinya, sering kali merugikan inangnya.",
  motil: "Mampu bergerak aktif berpindah tempat menggunakan alat gerak seperti flagela, silia, atau pseudopodia.",
  "sel tunggal": "Organisme yang seluruh tubuhnya hanya terdiri dari satu sel saja (uniseluler).",
};

function setupTermTooltips() {
  let activeTooltip = null;

  function closeTooltip() {
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
  }

  function openTooltip(tag) {
    closeTooltip();

    const key = (tag.dataset.term || tag.textContent || "").trim().toLowerCase();
    const definition = TAXONOMY_GLOSSARY[key];

    if (!definition) {
      return;
    }

    const tooltip = document.createElement("div");
    tooltip.className = "term-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.textContent = definition;
    tag.appendChild(tooltip);
    activeTooltip = tooltip;
  }

  document.addEventListener("mouseover", (event) => {
    const tag = event.target.closest("[data-term], .term-tag");
    if (tag) {
      openTooltip(tag);
    }
  });

  document.addEventListener("mouseout", (event) => {
    const tag = event.target.closest("[data-term], .term-tag");
    if (tag && !tag.contains(event.relatedTarget)) {
      closeTooltip();
    }
  });

  // Tap di layar sentuh: tampilkan/tutup tooltip, dan tutup jika tap di luar tag.
  document.addEventListener("click", (event) => {
    const tag = event.target.closest("[data-term], .term-tag");

    if (!tag) {
      closeTooltip();
      return;
    }

    if (activeTooltip && tag.contains(activeTooltip)) {
      closeTooltip();
    } else {
      openTooltip(tag);
    }
  });
}

// ---------- Navigation ----------

function setActiveNav() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href");
    const targetPage = href ? href.split("/").pop() : "";

    if (targetPage === currentPage || (currentPage === "" && targetPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (!button || !navigation) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
}

// ---------- Home ----------

function renderKingdomCards() {
  const container = document.querySelector("#kingdom-cards");

  if (!container) {
    return;
  }

  const progress = getProgress();
  const kingdoms = Object.entries(BIOSCOPE_DATA.kingdoms);

  container.innerHTML = kingdoms
    .map(([id, kingdom], index) => {
      const unlocked = adminAwareUnlock(id, progress);
      const kingdomProgress = progress.kingdoms[id];
      const previousKingdom = index
        ? kingdoms[index - 1][1].name
        : "sebelumnya";

      return `
        <article class="kingdom-card ${index === 0 ? "active" : unlocked ? "available" : "locked"}">
          <div class="card-index">0${index + 1}</div>

          <div>
            <span class="eyebrow">${kingdom.eyebrow}</span>
            <h3>${kingdom.name}</h3>
            <p>${kingdom.summary}</p>
          </div>

          <div class="card-footer">
            <span class="status ${unlocked ? "status-open" : "status-locked"}">
              ${isAdminMode() ? "Admin · Akses penuh" : unlocked ? "Terbuka" : "Terkunci"}
            </span>

            ${
              unlocked
                ? `<a class="text-link" href="${id}.html">Jelajahi →</a>`
                : `<span class="lock-note">Skor ${previousKingdom} ≥ 85%</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

// ---------- Kingdom pages ----------

// ---------- Specimen 3D embed: lazy-load on tap (biar nggak berat di HP) ----------

// Menambahkan parameter UI Sketchfab supaya ikon "beli" ($), tombol share,
// dan watermark bawaan Sketchfab tidak ikut tampil — pengguna bisa salah
// kira model ini berbayar. Diterapkan terpusat di sini (bukan di data.js)
// supaya berlaku untuk semua embed tanpa mengedit tiap URL satu per satu.
function sanitizeSketchfabEmbedUrl(embedUrl) {
  if (!embedUrl) {
    return embedUrl;
  }

  try {
    const url = new URL(embedUrl);
    url.searchParams.set("ui_infos", "0"); // sembunyikan panel info (judul/harga)
    url.searchParams.set("ui_controls", "0"); // sembunyikan bar kontrol bawah (termasuk share)
    url.searchParams.set("ui_stop", "0");
    url.searchParams.set("ui_watermark", "0");
    url.searchParams.set("ui_watermark_link", "0");
    return url.toString();
  } catch {
    return embedUrl;
  }
}

function buildSpecimenMarkup(embedUrl, imageUrl, title, fallbackLabel, fallbackSmall) {
  embedUrl = sanitizeSketchfabEmbedUrl(embedUrl);

  if (!embedUrl && imageUrl) {
    return `<img
               src="${imageUrl}"
               alt="${title}"
               class="specimen-image"
               loading="lazy" />`;
  }

  if (!embedUrl) {
    return `<span>
               ${fallbackLabel}<br />
               <small>${fallbackSmall}</small>
             </span>`;
  }

  return `<button
             type="button"
             class="specimen-load-btn"
             data-embed-url="${embedUrl}"
             data-embed-title="${title}"
             aria-label="Muat ${title}">
             <span class="specimen-load-icon">&#9654;</span>
             <span class="specimen-load-text">Ketuk untuk memuat model 3D</span>
           </button>`;
}

function setupSpecimenLazyLoad() {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".specimen-load-btn");
    if (!btn) return;

    const embedUrl = btn.dataset.embedUrl;
    const title = btn.dataset.embedTitle;
    if (!embedUrl) return;

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "20";
    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.title = title;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("mozallowfullscreen", "true");
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("allow", "autoplay; fullscreen; xr-spatial-tracking");
    iframe.setAttribute("xr-spatial-tracking", "");
    iframe.setAttribute("execution-while-out-of-viewport", "");
    iframe.setAttribute("execution-while-not-rendered", "");
    iframe.setAttribute("web-share", "");
    iframe.src = embedUrl;

    btn.replaceWith(iframe);
  });
}

function renderKingdomPage() {
  const container = document.querySelector("[data-kingdom]");

  if (!container) {
    return;
  }

  const kingdomId = container.dataset.kingdom;
  const kingdom = BIOSCOPE_DATA.kingdoms[kingdomId];
  const progress = getProgress();

  if (!kingdom) {
    return;
  }

  if (!adminAwareUnlock(kingdomId, progress)) {
    container.innerHTML = `
      ${renderKingdomBreadcrumb(kingdom)}

      <section class="locked-page">
        <div class="container narrow">
          <span class="eyebrow">Kerajaan terkunci</span>
          <h1>${kingdom.name} belum terbuka.</h1>
          <p>${kingdom.unlock_text}</p>
          <a class="btn btn-primary" href="progress.html">Lihat Progres</a>
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    ${renderKingdomBreadcrumb(kingdom)}

    <section class="chapter-hero kingdom-hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">${kingdom.eyebrow}</span>
          <h1>Kerajaan ${kingdom.name}</h1>
          <p class="lede">${kingdom.summary}</p>
          ${isAdminMode() ? '<span class="admin-preview-badge">PRATINJAU ADMIN · AKSES PENUH</span>' : ""}
        </div>

        <div class="specimen specimen-${kingdomId}">
          ${buildSpecimenMarkup(kingdom.embedUrl, kingdom.image, `3D Model ${kingdom.name}`, "KERAJAAN", kingdom.name.toUpperCase())}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-col">
        <div>
          <span class="eyebrow">Ringkasan</span>
          <h2>Mengapa kelompok ini dipisahkan?</h2>
        </div>

        <div class="prose">
          <!-- Gunakan kingdom.overview (jika ada), kalau tidak ada fallback ke kingdom.summary -->
          <p>${kingdom.overview || kingdom.summary}</p>

          <h3>Ciri utama</h3>
          <ul>
            ${kingdom.chars.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <h3>Kriteria klasifikasi</h3>
          <ul>
            ${kingdom.criteria.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Divisi / Daftar Kelompok</span>
            <h2>Telusuri kelompok</h2>
          </div>
        </div>

        <div class="division-grid">
          ${kingdom.division_ids
            .map((divisionId, index) => {
              const division = BIOSCOPE_DATA.divisions[divisionId];
              const state = progress.kingdoms[kingdomId].divisions[divisionId];
              const completed =
                state.materialViewed && state.challengeCompleted;

              return `
                <article class="division-card">
                  <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
                  <span class="eyebrow">${division.label}</span>
                  <h3>${division.title}</h3>
                  <p>${division.definition}</p>

                  <div class="card-footer">
                    <span class="status ${completed ? "status-done" : "status-open"}">
                      ${state.materialViewed ? "Materi dilihat" : "Belum dipelajari"}
                    </span>
                    <a class="text-link" href="divisions/${divisionId}.html">
                      Pelajari →
                    </a>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="quiz-panel">
          <div>
            <span class="eyebrow">Kuis kerajaan</span>
            <h2>Uji pemahaman ${kingdom.name}</h2>
            <p>Skor minimal 85% diperlukan untuk membuka kingdom berikutnya.</p>
          </div>

          <div id="kingdom-quiz"></div>
        </div>
      </div>
    </section>
  `;

  renderQuiz(kingdomId);
}

// ---------- Division / phylum encyclopedia pages ----------

function initDivisionPage() {
  const container = document.querySelector("[data-division]");

  if (!container) {
    return;
  }

  const divisionId = container.dataset.division;
  const division = BIOSCOPE_DATA.divisions[divisionId];

  if (!division) {
    return;
  }

  const kingdom = BIOSCOPE_DATA.kingdoms[division.kingdom];
  const progress = getProgress();

  if (!adminAwareUnlock(division.kingdom, progress)) {
    container.innerHTML = `
      <section class="locked-page">
        <div class="container narrow">
          <span class="eyebrow">Akses dibatasi</span>
          <h1>Materi masih terkunci.</h1>
          <p>
            Selesaikan ${
              kingdom.name === "Monera" ? "tahap sebelumnya" : kingdom.unlock_text
            }.
          </p>
          <a class="btn btn-primary" href="../${division.kingdom}.html">
            Kembali ke Kerajaan
          </a>
        </div>
      </section>
    `;
    return;
  }

  markMaterial(division.kingdom, divisionId);

  container.innerHTML = `
    ${renderBreadcrumb(kingdom, division)}

    <section class="ency-hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">${division.label} · ${kingdom.name}</span>
          <h1>${division.title}</h1>
          <p class="scientific">${division.scientific}</p>
          <p class="lede">${division.definition}</p>
        </div>

       <div class="specimen specimen-${division.kingdom}">
          ${buildSpecimenMarkup(division.embedUrl, division.image, `3D Model ${division.title}`, "SPESIMEN", division.label.toUpperCase())}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container editorial-grid">
        <aside class="aside-meta">
          <span class="eyebrow">Taksonomi</span>
          <dl>
            <dt>Kerajaan</dt>
            <dd>${kingdom.name}</dd>

            <dt>Kelompok</dt>
            <dd>${division.label}</dd>

            <dt>Contoh</dt>
            <dd>${
              division.exampleNotes
                ? `<ul class="example-tags">${division.exampleNotes
                    .map(
                      (ex) =>
                        `<li><strong>${ex.name}</strong><span>${ex.note}</span></li>`,
                    )
                    .join("")}</ul>`
                : division.examples
            }</dd>
          </dl>
        </aside>

        <div class="prose">
          ${renderEditorialSections(division)}
        </div>
      </div>
    </section>

    <section class="challenge-wrap">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">${
              division.morphologyProfile && division.morphologyProfile.length
                ? "Seret · cocokkan · pahami"
                : "Satu kelompok · satu tantangan"
            }</span>
            <h2>${
              division.morphologyProfile && division.morphologyProfile.length
                ? "Bengkel Klasifikasi"
                : "Tantangan Klasifikasi"
            }</h2>
          </div>
          <span class="status status-open">${
            division.morphologyProfile && division.morphologyProfile.length
              ? `${division.morphologyProfile.length} ciri untuk dicocokkan`
              : "1 unit penilaian"
          }</span>
        </div>

        <div class="challenge-card" data-challenge="${divisionId}"></div>
      </div>
    </section>
  `;

  renderChallenge(divisionId);
}

// ---------- Breadcrumb ----------

// Breadcrumb generik: items = [{ label, href }], item terakhir tanpa href
// dianggap sebagai halaman aktif saat ini. Dipakai supaya breadcrumb tampil
// konsisten di semua halaman detail (kingdom overview, division, dst.),
// bukan cuma di halaman division seperti sebelumnya.
function renderBreadcrumbTrail(items) {
  return `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <div class="container">
        ${items
          .map((item, index) => {
            const sep =
              index > 0
                ? '<span class="breadcrumb-sep" aria-hidden="true">›</span>'
                : "";
            const isLast = index === items.length - 1;

            return isLast
              ? `${sep}<span class="breadcrumb-current" aria-current="page">${item.label}</span>`
              : `${sep}<a href="${item.href}">${item.label}</a>`;
          })
          .join("")}
      </div>
    </nav>
  `;
}

function renderBreadcrumb(kingdom, division) {
  return renderBreadcrumbTrail([
    { label: "Beranda", href: "../index.html" },
    { label: kingdom.name, href: `../${division.kingdom}.html` },
    { label: division.label },
  ]);
}

function renderKingdomBreadcrumb(kingdom) {
  return renderBreadcrumbTrail([
    { label: "Beranda", href: "index.html" },
    { label: kingdom.name },
  ]);
}

// ---------- Editorial sections (auto-hides sections with no data) ----------

function renderEditorialSections(division) {
  const sections = [
    {
      eyebrow: "Struktur tubuh",
      heading: "Struktur & morfologi",
      body: division.body
        ? `<p>${division.body}</p>${
            division.morphologyProfile
              ? renderInfoCards(division.morphologyProfile)
              : ""
          }`
        : "",
    },
    {
      eyebrow: "Habitat",
      heading: "Habitat & distribusi",
      body: division.habitat
        ? `<p>${division.habitat}</p>${
            division.habitatProfile
              ? renderInfoCards(division.habitatProfile)
              : ""
          }`
        : "",
    },
    {
      eyebrow: "Cara hidup",
      heading: "Nutrisi & cara hidup",
      body: division.nutrition ? `<p>${division.nutrition}</p>` : "",
    },
    {
      eyebrow: "Siklus hidup",
      heading: "Reproduksi",
      body: division.reproduction ? `<p>${division.reproduction}</p>` : "",
    },
    {
      eyebrow: "Ekologi",
      heading: "Peran ekologis",
      body: renderEcology(division),
    },
    {
      eyebrow: "Pengenalan",
      heading: "Bagaimana mengenalinya?",
      body: division.recognizeSteps
        ? `<ul>${division.recognizeSteps.map((step) => `<li>${step}</li>`).join("")}</ul>`
        : division.recognize
          ? `<p>${division.recognize}</p>`
          : "",
    },
  ].filter((section) => section.body);

  return sections
    .map(
      (section, index) => `
        <section class="editorial-section">
          <span class="eyebrow">${String(index + 1).padStart(2, "0")} · ${section.eyebrow}</span>
          <h2>${section.heading}</h2>
          ${section.body}
        </section>
      `,
    )
    .join("");
}

// Renders ecology as a plain paragraph, or — when a division supplies
// `ecologyRoles: { benefits: [...], harms: [...] }` — as a two-column
// menguntungkan/merugikan list for easier scanning.
function renderEcology(division) {
  if (division.ecologyRoles) {
    const { benefits = [], harms = [] } = division.ecologyRoles;

    return `
      <div class="ecology-grid">
        ${
          benefits.length
            ? `
              <div class="ecology-col ecology-col-benefit">
                <span class="ecology-col-label">Menguntungkan</span>
                <ul>${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            `
            : ""
        }
        ${
          harms.length
            ? `
              <div class="ecology-col ecology-col-harm">
                <span class="ecology-col-label">Merugikan</span>
                <ul>${harms.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            `
            : ""
        }
      </div>
    `;
  }

  return division.ecology ? `<p>${division.ecology}</p>` : "";
}

// Generic info-card row — used for morphology (01) and habitat (02) sections.
// Driven by division data (`morphologyProfile` / `habitatProfile`), so content
// is always specific to that division instead of one hardcoded set of cards
// being reused (and often wrong) across every kingdom/division.
// items: [{ label, value, desc }]
function renderInfoCards(items) {
  if (!items || !items.length) {
    return "";
  }

  return `
    <div class="info-card-grid">
      ${items
        .map(
          (item) => `
            <div class="info-card">
              <span class="info-card-label">${item.label}</span>
              <strong class="info-card-value">${item.value}</strong>
              <span class="info-card-desc">${item.desc}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderChallenge(divisionId) {
  const container = document.querySelector("[data-challenge]");

  if (!container) {
    return;
  }

  const division = BIOSCOPE_DATA.divisions[divisionId];

  // Semua kelompok (filum/divisio/domain) dapat "Bengkel Klasifikasi" versi
  // seret-dan-lepas, selama datanya punya morphologyProfile (pasangan
  // ciri↔nilai) — bukan cuma pilihan ganda statis. Fallback ke MCQ lama
  // kalau suatu saat ada kelompok baru yang belum diisi morphologyProfile-nya.
  if (division.morphologyProfile && division.morphologyProfile.length) {
    renderClassificationWorkbench(container, division, divisionId);
  } else {
    renderMcqChallenge(container, division, divisionId);
  }
}

// ---------- Tantangan klasifikasi klasik (pilihan ganda) ----------
// Fallback untuk kelompok yang belum punya morphologyProfile.

function renderMcqChallenge(container, division, divisionId) {
  const challenge = division.challenge;

  container.classList.remove("challenge-card--workbench");
  container.innerHTML = `
    <div class="challenge-visual" aria-hidden="true">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12"></circle>
        <path d="M29 29 40 40"></path>
        <path d="M20 14v12M14 20h12"></path>
      </svg>
      <span>Studi kasus</span>
    </div>

    <div class="challenge-question">
      <span class="eyebrow">${division.label}</span>
      <h3>Kelompok apa yang paling sesuai?</h3>
      <p>${challenge.question}</p>

      <form id="challenge-form">
        ${challenge.options
          .map(
            (option, index) => `
              <label class="option">
                <input type="radio" name="answer" value="${option}" />
                <span>${String.fromCharCode(65 + index)}</span>
                ${option}
              </label>
            `,
          )
          .join("")}

        <button class="btn btn-primary" type="submit">
          Periksa Jawaban
        </button>
      </form>

      <div id="challenge-feedback" class="feedback" aria-live="polite"></div>
    </div>
  `;

  document.querySelector("#challenge-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const selected = new FormData(event.target).get("answer");
    const correct = selected === challenge.answer;
    const feedback = document.querySelector("#challenge-feedback");

    feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
    feedback.innerHTML = `
      <strong>${correct ? "Benar." : "Belum tepat."}</strong>
      ${challenge.explanation}
    `;

    if (correct) {
      markChallenge(division.kingdom, divisionId);
    }
  });
}

// ---------- Efek suara & util kecil untuk Bengkel Klasifikasi ----------
// Nada disintesis lewat Web Audio API (tanpa berkas audio eksternal) supaya
// tetap ringan; bisa dimatikan lewat tombol toggle di toolbar (preferensi
// disimpan di localStorage jadi tidak perlu diatur ulang tiap kunjungan).

const MATCH_SOUND_KEY = "bioscope-match-sound-muted";
let matchAudioCtx = null;

function isMatchSoundMuted() {
  return localStorage.getItem(MATCH_SOUND_KEY) === "1";
}

function setMatchSoundMuted(muted) {
  localStorage.setItem(MATCH_SOUND_KEY, muted ? "1" : "0");
}

function getMatchAudioContext() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return null;
  }
  if (!matchAudioCtx) {
    matchAudioCtx = new Ctx();
  }
  if (matchAudioCtx.state === "suspended") {
    matchAudioCtx.resume();
  }
  return matchAudioCtx;
}

function playMatchTone(freq, { duration = 0.12, type = "sine", gain = 0.05, delay = 0 } = {}) {
  if (isMatchSoundMuted()) {
    return;
  }

  const ctx = getMatchAudioContext();
  if (!ctx) {
    return;
  }

  try {
    const startAt = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    gainNode.gain.setValueAtTime(gain, startAt);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(startAt);
    osc.stop(startAt + duration + 0.02);
  } catch (error) {
    // Web Audio bisa gagal di sejumlah browser lama/terbatas — abaikan diam-
    // diam, efek suara memang pemanis, bukan fitur inti permainan.
  }
}

function playMatchClickSound() {
  playMatchTone(520, { duration: 0.07, gain: 0.04 });
}

function playMatchCorrectSound() {
  playMatchTone(659, { duration: 0.1, gain: 0.05 });
  playMatchTone(880, { duration: 0.16, gain: 0.05, delay: 0.08 });
}

function playMatchIncorrectSound() {
  playMatchTone(190, { duration: 0.18, type: "sawtooth", gain: 0.045 });
}

function playMatchSuccessSound() {
  [523, 659, 784, 1046].forEach((freq, index) => {
    playMatchTone(freq, { duration: 0.18, gain: 0.05, delay: index * 0.11 });
  });
}

function formatMatchTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// Selebrasi confetti singkat (elemen <span> beranimasi jatuh, dibuang
// otomatis) — dilewati saat pengguna mengaktifkan prefers-reduced-motion.
function launchMatchConfetti(panelEl) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) {
    return;
  }

  const colors = ["#1f5a45", "#9bb69f", "#a66a3f", "#5cae85", "#e6ad82"];
  const burst = document.createElement("div");
  burst.className = "match-confetti";
  burst.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("span");
    piece.className = "match-confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${(Math.random() * 0.35).toFixed(2)}s`;
    piece.style.animationDuration = `${(1.1 + Math.random() * 0.6).toFixed(2)}s`;
    piece.style.setProperty(
      "--confetti-rotate",
      `${Math.floor(Math.random() * 360)}deg`,
    );
    burst.appendChild(piece);
  }

  panelEl.appendChild(burst);
  window.setTimeout(() => burst.remove(), 2200);
}

// ---------- Bengkel Klasifikasi (seret & lepas) ----------
// Interaksi drag-and-drop (mouse & sentuh, lewat Pointer Events, dengan
// fallback ketuk-lalu-ketuk untuk aksesibilitas) yang meminta pengguna
// mencocokkan tiap kartu "nilai ciri" ke kotak "label ciri" yang tepat,
// dengan progres dan feedback yang bergerak real-time — bukan cuma teks
// statis "Benar."/"Belum tepat." setelah submit. Dilengkapi timer, efek
// suara (bisa dimatikan), tombol ulangi yang selalu terlihat, dan
// selebrasi confetti singkat saat semua ciri tercocokkan.

function renderClassificationWorkbench(container, division, divisionId) {
  const pairs = division.morphologyProfile.map((item, index) => ({
    id: `pair-${index}`,
    label: item.label,
    value: item.value,
    desc: item.desc,
  }));

  const shuffledChips = shuffleArray(pairs);
  const challenge = division.challenge;
  let matchedCount = 0;
  let selectedChipId = null;
  let elapsedSeconds = 0;
  let timerInterval = null;
  let timerRunning = false;

  container.classList.add("challenge-card--workbench");
  container.innerHTML = `
    <div class="match-game" data-match-game>
      <div class="match-game-head">
        <span class="eyebrow">${division.label}</span>
        <h3>Cocokkan ciri dengan nilainya</h3>
        <p>Seret tiap kartu ciri di bawah ke kotak label yang sesuai. Di layar sentuh, ketuk kartunya lalu ketuk kotaknya.</p>

        <div class="match-toolbar">
          <div class="match-progress">
            <div class="match-progress-bar">
              <div class="match-progress-fill" data-progress-fill style="width: 0%"></div>
            </div>
            <span class="match-progress-label" data-progress-label>0 / ${pairs.length} tercocokkan</span>
          </div>

          <div class="match-toolbar-actions">
            <span
              class="match-timer"
              data-match-timer
              tabindex="0"
              title="Waktu pengerjaan &mdash; hanya pencatat waktu, tidak memengaruhi skor"
              aria-label="Waktu pengerjaan, tidak memengaruhi skor"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 7v5l3.2 2"></path>
              </svg>
              <span data-timer-value>0:00</span>
            </span>

            <button
              type="button"
              class="match-icon-btn"
              data-match-sound-toggle
              aria-pressed="${isMatchSoundMuted() ? "true" : "false"}"
              aria-label="${isMatchSoundMuted() ? "Nyalakan efek suara" : "Matikan efek suara"}"
              title="${isMatchSoundMuted() ? "Nyalakan efek suara" : "Matikan efek suara"}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-sound-icon-on ${isMatchSoundMuted() ? "hidden" : ""}>
                <path d="M4 9v6h4l5 4V5L8 9H4z"></path>
                <path d="M16.5 8.5a5 5 0 0 1 0 7"></path>
                <path d="M19 6a9 9 0 0 1 0 12"></path>
              </svg>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-sound-icon-off ${isMatchSoundMuted() ? "" : "hidden"}>
                <path d="M4 9v6h4l5 4V5L8 9H4z"></path>
                <path d="M16 9l5 6M21 9l-5 6"></path>
              </svg>
            </button>

            <button type="button" class="match-icon-btn match-icon-btn-reset" data-match-reset-early>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.5 12a8.5 8.5 0 1 1 2.8 6.3"></path>
                <path d="M3.5 16v-4.3h4.3"></path>
              </svg>
              Ulangi
            </button>
          </div>
        </div>
      </div>

      <div class="match-game-body">
        <div class="match-slots" data-slots>
          ${pairs
            .map(
              (pair) => `
                <div class="match-slot" data-slot="${pair.id}">
                  <span class="match-slot-label">${pair.label}</span>
                  <div class="match-slot-drop" data-drop="${pair.id}" tabindex="0" role="button" aria-label="Kotak jawaban untuk ${pair.label}">
                    <span class="match-slot-placeholder">Lepas di sini</span>
                  </div>
                  <p class="match-slot-desc" data-slot-desc hidden></p>
                </div>
              `,
            )
            .join("")}
        </div>

        <div class="match-chips" data-chip-pool>
          ${shuffledChips
            .map(
              (chip) => `
                <button type="button" class="match-chip" data-chip="${chip.id}">
                  ${chip.value}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>

      <div class="match-toast" data-match-toast aria-live="polite"></div>

      <div class="match-complete" data-match-complete hidden>
        <strong>Semua ciri tercocokkan.</strong>
        <p data-match-complete-time></p>
        <p>${challenge.explanation}</p>
        <button type="button" class="btn btn-secondary" data-match-reset>Ulangi Bengkel</button>
      </div>
    </div>
  `;

  const root = container.querySelector("[data-match-game]");
  const toast = root.querySelector("[data-match-toast]");
  const progressFill = root.querySelector("[data-progress-fill]");
  const progressLabel = root.querySelector("[data-progress-label]");
  const completePanel = root.querySelector("[data-match-complete]");
  const completeTime = root.querySelector("[data-match-complete-time]");
  const timerValueEl = root.querySelector("[data-timer-value]");
  const soundToggle = root.querySelector("[data-match-sound-toggle]");
  const soundIconOn = root.querySelector("[data-sound-icon-on]");
  const soundIconOff = root.querySelector("[data-sound-icon-off]");

  function startTimer() {
    if (timerRunning) {
      return;
    }
    timerRunning = true;
    timerInterval = window.setInterval(() => {
      elapsedSeconds += 1;
      timerValueEl.textContent = formatMatchTime(elapsedSeconds);
    }, 1000);
  }

  function stopTimer() {
    timerRunning = false;
    window.clearInterval(timerInterval);
  }

  soundToggle.addEventListener("click", () => {
    const nextMuted = !isMatchSoundMuted();
    setMatchSoundMuted(nextMuted);
    soundToggle.setAttribute("aria-pressed", nextMuted ? "true" : "false");
    soundToggle.setAttribute(
      "aria-label",
      nextMuted ? "Nyalakan efek suara" : "Matikan efek suara",
    );
    soundToggle.setAttribute(
      "title",
      nextMuted ? "Nyalakan efek suara" : "Matikan efek suara",
    );
    soundIconOn.hidden = nextMuted;
    soundIconOff.hidden = !nextMuted;
    if (!nextMuted) {
      playMatchClickSound();
    }
  });

  function showToast(message, tone) {
    toast.textContent = message;
    toast.className = `match-toast match-toast-${tone}`;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      toast.textContent = "";
      toast.className = "match-toast";
    }, 2200);
  }

  function clearSelection() {
    selectedChipId = null;
    root
      .querySelectorAll(".match-chip.is-selected")
      .forEach((chip) => chip.classList.remove("is-selected"));
    root
      .querySelectorAll(".match-slot-drop.is-droppable")
      .forEach((el) => el.classList.remove("is-droppable"));
  }

  function updateProgress() {
    const pct = Math.round((matchedCount / pairs.length) * 100);
    progressFill.style.width = `${pct}%`;
    progressLabel.textContent = `${matchedCount} / ${pairs.length} tercocokkan`;
  }

  function attemptMatch(chipEl, slotId) {
    const chipId = chipEl.dataset.chip;
    const slotEl = root.querySelector(`.match-slot[data-slot="${slotId}"]`);
    const dropEl = slotEl.querySelector(".match-slot-drop");

    if (chipId === slotId) {
      const pair = pairs.find((item) => item.id === chipId);

      dropEl.innerHTML = `<span class="match-slot-value">${pair.value}</span>`;
      dropEl.classList.add("is-filled");
      slotEl.classList.add("is-correct", "is-flash-correct");
      window.setTimeout(() => slotEl.classList.remove("is-flash-correct"), 550);
      chipEl.remove();

      const descEl = slotEl.querySelector("[data-slot-desc]");
      if (pair.desc) {
        descEl.textContent = pair.desc;
        descEl.hidden = false;
      }

      matchedCount += 1;
      updateProgress();
      showToast("Cocok! Ciri ini terpasang dengan benar.", "correct");
      playMatchCorrectSound();

      if (matchedCount === pairs.length) {
        stopTimer();
        markChallenge(division.kingdom, divisionId);
        completeTime.textContent = `Waktu kamu: ${formatMatchTime(elapsedSeconds)}.`;
        completePanel.hidden = false;
        completePanel.classList.add("is-visible");
        playMatchSuccessSound();
        launchMatchConfetti(completePanel);
      }
    } else {
      slotEl.classList.add("is-shake");
      chipEl.classList.add("is-shake");
      showToast("Belum pas, coba pasangan lain.", "incorrect");
      playMatchIncorrectSound();
      window.setTimeout(() => {
        slotEl.classList.remove("is-shake");
        chipEl.classList.remove("is-shake");
      }, 420);
    }

    clearSelection();
  }

  // ---- Ketuk-lalu-ketuk (selalu aktif, jadi fallback untuk sentuhan) ----

  root.querySelectorAll(".match-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.dataset.dragMoved === "1") {
        chip.dataset.dragMoved = "0";
        return;
      }

      startTimer();

      const alreadySelected = chip.classList.contains("is-selected");
      clearSelection();

      if (!alreadySelected) {
        chip.classList.add("is-selected");
        selectedChipId = chip.dataset.chip;
        playMatchClickSound();
        root
          .querySelectorAll(".match-slot-drop:not(.is-filled)")
          .forEach((el) => el.classList.add("is-droppable"));
      }
    });
  });

  function tryPlaceSelected(dropEl) {
    if (dropEl.classList.contains("is-filled") || !selectedChipId) {
      return;
    }

    const chipEl = root.querySelector(
      `.match-chip[data-chip="${selectedChipId}"]`,
    );
    if (chipEl) {
      attemptMatch(chipEl, dropEl.dataset.drop);
    }
  }

  root.querySelectorAll(".match-slot-drop").forEach((dropEl) => {
    dropEl.addEventListener("click", () => tryPlaceSelected(dropEl));
    dropEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        tryPlaceSelected(dropEl);
      }
    });
  });

  // ---- Seret & lepas via Pointer Events (mouse & sentuh sekaligus) ----

  let dragChip = null;
  let dragGhost = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let isDragging = false;

  function onPointerDown(event) {
    const chip = event.target.closest(".match-chip");
    if (!chip || chip.dataset.matched === "1") {
      return;
    }

    startTimer();
    dragChip = chip;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    isDragging = false;
  }

  function onPointerMove(event) {
    if (!dragChip) {
      return;
    }

    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;

    if (!isDragging && Math.hypot(dx, dy) > 8) {
      isDragging = true;
      dragChip.dataset.dragMoved = "1";
      dragChip.classList.add("is-dragging");

      const rect = dragChip.getBoundingClientRect();
      dragGhost = dragChip.cloneNode(true);
      dragGhost.classList.add("match-chip-ghost");
      dragGhost.style.width = `${rect.width}px`;
      document.body.appendChild(dragGhost);

      root.querySelectorAll(".match-slot-drop:not(.is-filled)").forEach((el) => {
        el.classList.add("is-droppable");
      });
    }

    if (isDragging && dragGhost) {
      dragGhost.style.left = `${event.clientX}px`;
      dragGhost.style.top = `${event.clientY}px`;

      root.querySelectorAll(".match-slot-drop").forEach((el) => {
        el.classList.remove("is-hover");
      });

      const under = document.elementFromPoint(event.clientX, event.clientY);
      const dropTarget = under && under.closest(".match-slot-drop:not(.is-filled)");
      if (dropTarget) {
        dropTarget.classList.add("is-hover");
      }
    }
  }

  function onPointerUp(event) {
    if (!dragChip) {
      return;
    }

    if (isDragging) {
      const under = document.elementFromPoint(event.clientX, event.clientY);
      const dropTarget = under && under.closest(".match-slot-drop:not(.is-filled)");

      if (dropTarget) {
        attemptMatch(dragChip, dropTarget.dataset.drop);
      }

      dragChip.classList.remove("is-dragging");
      if (dragGhost) {
        dragGhost.remove();
        dragGhost = null;
      }
      root.querySelectorAll(".match-slot-drop").forEach((el) => {
        el.classList.remove("is-droppable", "is-hover");
      });
    }

    dragChip = null;
    isDragging = false;
  }

  root.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);

  // ---- Reset (tombol di toolbar, aktif kapan saja, & di panel selesai) ----

  function teardownAndRestart() {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    stopTimer();
    matchedCount = 0;
    renderClassificationWorkbench(container, division, divisionId);
  }

  root
    .querySelector("[data-match-reset-early]")
    .addEventListener("click", teardownAndRestart);
  completePanel
    .querySelector("[data-match-reset]")
    .addEventListener("click", teardownAndRestart);
}

function shuffleArray(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---------- Dichotomous key ----------

function markDichotomous(kingdomId) {
  const progress = getProgress();
  const kingdom = progress.kingdoms[kingdomId];

  if (!kingdom) {
    return;
  }

  kingdom.dichotomousCompleted = true;
  saveProgress(progress);
}

function attachSwipe(cardEl, onLeft, onRight) {
  let startX = 0;
  let currentX = 0;

  function move(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    currentX = clientX - startX;
    const rotate = currentX / 14;
    cardEl.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
    cardEl.classList.toggle("swipe-left-active", currentX < -40);
    cardEl.classList.toggle("swipe-right-active", currentX > 40);
  }

  function up() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
    document.removeEventListener("touchmove", move);
    document.removeEventListener("touchend", up);

    const threshold = 110;
    cardEl.style.transition = "transform 0.35s ease, opacity 0.35s ease";

    if (currentX < -threshold) {
      cardEl.style.transform = "translateX(-700px) rotate(-24deg)";
      cardEl.style.opacity = "0";
      setTimeout(onLeft, 220);
    } else if (currentX > threshold) {
      cardEl.style.transform = "translateX(700px) rotate(24deg)";
      cardEl.style.opacity = "0";
      setTimeout(onRight, 220);
    } else {
      cardEl.style.transform = "translateX(0) rotate(0)";
      cardEl.classList.remove("swipe-left-active", "swipe-right-active");
    }

    currentX = 0;
  }

  function down(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    cardEl.style.transition = "none";
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move, { passive: true });
    document.addEventListener("touchend", up);
  }

  cardEl.addEventListener("mousedown", down);
  cardEl.addEventListener("touchstart", down, { passive: true });
}

function renderDichotomousKey() {
  const container = document.querySelector("[data-dichotomous-key]");

  if (!container) {
    return;
  }

  const params = new URLSearchParams(location.search);
  const kingdomId = params.get("kingdom") || "monera";
  const kingdom = BIOSCOPE_DATA.kingdoms[kingdomId];
  const key = kingdom && kingdom.dichotomousKey;

  if (!kingdom || !key) {
    container.innerHTML = `
      <section class="section">
        <div class="container narrow">
          <span class="eyebrow">Kunci dikotomi</span>
          <h1>Belum tersedia</h1>
          <p>Kunci dikotomi untuk kelompok ini belum disiapkan.</p>
          <a class="btn btn-primary" href="classification-challenge.html">Kembali ke Tantangan</a>
        </div>
      </section>
    `;
    return;
  }

  let currentStepId = key.start;
  const trail = [];

  function renderStep() {
    const step = key.steps[currentStepId];

    container.innerHTML = `
      <section class="section">
        <div class="container narrow">
          <span class="eyebrow">${kingdom.name} &middot; Kunci Dikotomi</span>
          <h1>${key.title}</h1>
          <p class="lede">${key.scenario}</p>

          ${
            trail.length
              ? `<p class="key-trail">${trail
                  .map((t) => `<span>${t}</span>`)
                  .join(" &rarr; ")}</p>`
              : ""
          }

          <div class="swipe-stage">
            <div class="swipe-label swipe-label-left">
              <span>${step.number}a</span>
              ${step.couplet[0].text}
            </div>

            <div class="swipe-card" id="swipe-card">
              <span class="key-step-number">Langkah ${step.number}</span>
              <p class="swipe-instruction">Geser kartu ke kiri jika ciri sebelah kiri sesuai, atau ke kanan jika ciri sebelah kanan sesuai.</p>
              <div class="swipe-stamp swipe-stamp-left">${step.number}a</div>
              <div class="swipe-stamp swipe-stamp-right">${step.number}b</div>
            </div>

            <div class="swipe-label swipe-label-right">
              <span>${step.number}b</span>
              ${step.couplet[1].text}
            </div>
          </div>

          <p class="swipe-fallback-hint">Kesulitan menggeser? Ketuk langsung salah satu kotak ciri di atas.</p>
        </div>
      </section>
    `;

    function choose(index) {
      const item = step.couplet[index];
      trail.push(item.text);

      if (key.steps[item.next]) {
        currentStepId = item.next;
        renderStep();
      } else {
        renderResult(item.next);
      }
    }

    const card = container.querySelector("#swipe-card");
    attachSwipe(
      card,
      () => choose(0),
      () => choose(1),
    );

    container
      .querySelector(".swipe-label-left")
      .addEventListener("click", () => choose(0));
    container
      .querySelector(".swipe-label-right")
      .addEventListener("click", () => choose(1));
  }

  function renderResult(resultId) {
    const result = key.results[resultId];

    markDichotomous(kingdomId);

    container.innerHTML = `
      <section class="section">
        <div class="container narrow">
          <span class="eyebrow">${kingdom.name} &middot; Kunci Dikotomi</span>
          <h1>${key.title}</h1>

          <p class="key-trail">${trail.map((t) => `<span>${t}</span>`).join(" &rarr; ")}</p>

          <div class="feedback correct key-result">
            <strong>Hasil identifikasi: ${result.label}</strong>
            <p>${result.description}</p>
          </div>

          <div class="key-actions">
            <a class="btn btn-primary" href="${result.link}">${result.linkLabel}</a>
            <button type="button" class="btn key-restart-btn" id="key-restart">Coba lagi</button>
          </div>
        </div>
      </section>
    `;

    document.querySelector("#key-restart").addEventListener("click", () => {
      currentStepId = key.start;
      trail.length = 0;
      renderStep();
    });
  }

  renderStep();
}

// ---------- Kingdom quiz ----------

function renderQuiz(kingdomId) {
  const container = document.querySelector("#kingdom-quiz");

  if (!container) {
    return;
  }

  const kingdom = BIOSCOPE_DATA.kingdoms[kingdomId];

  container.innerHTML = `
    <form id="quiz-form">
      ${kingdom.quiz
        .map(
          (question, index) => `
            <fieldset id="question-${index}">
              <legend>${index + 1}. ${question[0]}</legend>
              ${question[1]
                .map(
                  (option, optionIndex) => `
                    <label class="option" data-option="${option}">
                      <input
                        type="radio"
                        name="q${index}"
                        value="${option}"
                        required
                      />
                      <span>${String.fromCharCode(65 + optionIndex)}</span>
                      ${option}
                    </label>
                  `,
                )
                .join("")}
            </fieldset>
          `,
        )
        .join("")}

      <button class="btn btn-primary" type="submit">Hitung Skor</button>
    </form>

    <div id="quiz-result" aria-live="polite"></div>
  `;

  document.querySelector("#quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let correctAnswers = 0;

    kingdom.quiz.forEach((question, index) => {
      const [, , correctAnswer, explanation] = question;
      const selected = formData.get(`q${index}`);
      const isCorrect = selected === correctAnswer;

      if (isCorrect) {
        correctAnswers += 1;
      }

      const fieldset = document.querySelector(`#question-${index}`);

      // Highlight jawaban benar/salah pada tiap opsi
      fieldset.querySelectorAll(".option").forEach((label) => {
        const optionValue = label.dataset.option;
        label.classList.remove("option-correct", "option-incorrect");

        if (optionValue === correctAnswer) {
          label.classList.add("option-correct");
        } else if (optionValue === selected && !isCorrect) {
          label.classList.add("option-incorrect");
        }
      });

      // Buat elemen feedback baru hanya setelah submit — tidak pernah
      // ada di DOM sebelumnya, jadi jawaban tidak bisa dilihat sebelum dijawab.
      let questionFeedback = fieldset.querySelector(".question-feedback");
      if (!questionFeedback) {
        questionFeedback = document.createElement("div");
        questionFeedback.className = "feedback question-feedback";
        questionFeedback.setAttribute("aria-live", "polite");
        fieldset.appendChild(questionFeedback);
      }

      questionFeedback.className = `feedback question-feedback ${isCorrect ? "correct" : "incorrect"}`;
      questionFeedback.innerHTML = `
        <strong>${isCorrect ? "Benar." : "Belum tepat."}</strong>
        ${explanation ? explanation : ""}
      `;
    });

    const score = Math.round((correctAnswers / kingdom.quiz.length) * 100);
    const progress = getProgress();

    progress.kingdoms[kingdomId].score = score;
    saveProgress(progress);

    const unlockedNext = score >= 85;
    const result = document.querySelector("#quiz-result");

    result.className = `feedback ${unlockedNext ? "correct" : "incorrect"}`;
    result.innerHTML = `
      <strong>Skor ${score}%.</strong>
      ${
        unlockedNext
          ? "Kingdom berikutnya terbuka."
          : "Belum mencapai 85%. Review materi lalu ulangi quiz."
      }
    `;

    renderKingdomCards();
  });
}

// ---------- Progress page ----------

function renderProgress() {
  const container = document.querySelector("#progress-app");

  if (!container) {
    return;
  }

  const progress = getProgress();
  const kingdoms = Object.entries(BIOSCOPE_DATA.kingdoms);
  const progressValues = kingdoms.map(
    ([id]) => progress.kingdoms[id].progress,
  );
  const averageProgress = Math.round(
    progressValues.reduce((total, value) => total + value, 0) /
      progressValues.length,
  );
  const averageScore = Math.round(
    kingdoms.reduce(
      (total, [id]) => total + progress.kingdoms[id].score,
      0,
    ) / kingdoms.length,
  );
  const completedKingdoms = kingdoms.filter(
    ([id]) => progress.kingdoms[id].completed,
  ).length;

  container.innerHTML = `
    <section class="chapter-hero">
      <div class="container">
        <span class="eyebrow">Perjalanan belajarmu</span>
        <h1>Progres</h1>
        <p class="lede">
          Progress menunjukkan aktivitas belajar; score menunjukkan hasil evaluasi.
          Keduanya tidak sama.
        </p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container stats-grid">
        <div class="stat">
          <span>Progres keseluruhan</span>
          <strong>${averageProgress}%</strong>
        </div>
        <div class="stat">
          <span>Rata-rata skor</span>
          <strong>${averageScore}%</strong>
        </div>
        <div class="stat">
          <span>Kerajaan tuntas</span>
          <strong>${completedKingdoms}/${kingdoms.length}</strong>
        </div>
      </div>
    </section>

    <section class="section section-paper">
      <div class="container">
        <div class="progress-list">
          ${kingdoms
            .map(([id, kingdom]) => {
              const kingdomProgress = progress.kingdoms[id];
              const unlocked = adminAwareUnlock(id, progress);

              // Satu sumber data untuk status & persentase: keduanya sama-sama
              // berasal dari kingdomProgress.progress, supaya status text
              // tidak pernah berlawanan dengan progress bar (mis. progress
              // 100% tapi status masih "Belum dikerjakan").
              const scoreLabel =
                kingdomProgress.progress === 0
                  ? "Belum dikerjakan"
                  : kingdomProgress.progress < 100
                    ? "Sedang dikerjakan"
                    : kingdomProgress.score
                      ? `Skor ${kingdomProgress.score}%`
                      : "Materi tuntas · kuis belum dikerjakan";

              return `
                <article class="progress-row">
                  <div>
                    <span class="eyebrow">${kingdom.eyebrow}</span>
                    <h3>${kingdom.name}</h3>
                    <p>
                      ${
                        unlocked
                          ? "Terbuka"
                          : `Terkunci · ${kingdom.unlock_text}`
                      }
                    </p>
                  </div>

                  <div class="progress-meter">
                    <span style="width: ${kingdomProgress.progress}%"></span>
                  </div>

                  <strong>${kingdomProgress.progress}%</strong>
                  <span class="score-badge">
                    ${scoreLabel}
                  </span>
                </article>
              `;
            })
            .join("")}
        </div>

        <button id="reset-progress" class="btn btn-secondary danger">
          Reset Progres
        </button>
        <p class="meta" style="margin-top: 10px;">
          Menghapus semua progress dan score belajarmu. Tindakan ini tidak bisa dibatalkan.
        </p>
      </div>
    </section>
  `;

  document.querySelector("#reset-progress").addEventListener("click", () => {
    const confirmed = window.confirm("Reset semua progress dan score?");

    if (confirmed) {
      localStorage.removeItem(STORE_KEY);
      location.reload();
    }
  });
}

// ---------- Global challenge index ----------

function renderGlobalChallenges() {
  const container = document.querySelector("#global-challenges");

  if (!container) {
    return;
  }

  const progress = getProgress();

  container.innerHTML = Object.entries(BIOSCOPE_DATA.kingdoms)
    .map(([kingdomId, kingdom]) => {
      return `
        <section class="challenge-group">
          <div class="section-heading">
            <div>
              <span class="eyebrow">${kingdom.name}</span>
              <h2>Tantangan</h2>
            </div>
          </div>

          <div class="compact-list">
            ${kingdom.division_ids
              .map((divisionId) => {
                const division = BIOSCOPE_DATA.divisions[divisionId];
                const state = progress.kingdoms[kingdomId].divisions[divisionId];
                const unlocked = adminAwareUnlock(kingdomId, progress);

                const statusKey = state.challengeCompleted
                  ? "selesai"
                  : unlocked
                    ? "terbuka"
                    : "terkunci";
                const statusText =
                  statusKey === "selesai"
                    ? "Selesai"
                    : statusKey === "terbuka"
                      ? "Terbuka"
                      : "Terkunci";
                // Status dibedakan lewat ikon + warna, bukan warna saja,
                // supaya tetap jelas bagi pengguna buta warna.
                const statusIcon =
                  statusKey === "selesai" ? "✓" : statusKey === "terbuka" ? "🔓" : "🔒";

                return `
                  <a
                    class="compact-item ${unlocked ? "" : "disabled"}"
                    href="${unlocked ? `divisions/${divisionId}.html` : "#"}"
                  >
                    <span>${division.label}</span>
                    <strong>${division.title}</strong>
                    <em class="status-${statusKey}">
                      <span class="status-icon" aria-hidden="true">${statusIcon}</span>
                      ${statusText}
                    </em>
                  </a>
                `;
              })
              .join("")}
            ${
              kingdom.dichotomousKey
                ? (() => {
                    const unlocked = adminAwareUnlock(kingdomId, progress);
                    const kState = progress.kingdoms[kingdomId];
                    const statusKey = kState.dichotomousCompleted
                      ? "selesai"
                      : unlocked
                        ? "terbuka"
                        : "terkunci";
                    const statusText =
                      statusKey === "selesai"
                        ? "Selesai"
                        : statusKey === "terbuka"
                          ? "Terbuka"
                          : "Terkunci";
                    const statusIcon =
                      statusKey === "selesai" ? "✓" : statusKey === "terbuka" ? "🔓" : "🔒";

                    return `
                      <a
                        class="compact-item ${unlocked ? "" : "disabled"}"
                        href="${unlocked ? `dichotomous-key.html?kingdom=${kingdomId}` : "#"}"
                      >
                        <span>Kunci Dikotomi</span>
                        <strong>${kingdom.dichotomousKey.title}</strong>
                        <em class="status-${statusKey}">
                          <span class="status-icon" aria-hidden="true">${statusIcon}</span>
                          ${statusText}
                        </em>
                      </a>
                    `;
                  })()
                : ""
            }
          </div>
        </section>
      `;
    })
    .join("");
}

// ---------- Floating scroll-to-top button ----------

function setupScrollTopButton() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "scroll-top-btn";
  btn.setAttribute("aria-label", "Kembali ke navbar");
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
  document.body.appendChild(btn);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Initialization ----------

function init() {
  setupThemeToggle();
  setActiveNav();
  setupMenu();
  setupScrollTopButton();
  setupSpecimenLazyLoad();
  setupTermTooltips();
  renderKingdomCards();
  renderKingdomPage();
  initDivisionPage();
  renderProgress();
  renderGlobalChallenges();
  renderDichotomousKey();

  const whyPage = document.querySelector("[data-why]");

  if (whyPage) {
    const progress = getProgress();
    progress.whyClassify = true;
    saveProgress(progress);
  }
}

// Spotlight Cursor Effect
const spotlight = document.createElement('div');
spotlight.classList.add('cursor-spotlight');
document.body.appendChild(spotlight);

let mouseX = 0, mouseY = 0;
let spotX = 0, spotY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  spotlight.classList.add('active');
});

document.addEventListener('mouseleave', () => {
  spotlight.classList.remove('active');
});

// smooth follow pake lerp biar ga kaku
function animateSpotlight() {
  spotX += (mouseX - spotX) * 0.15;
  spotY += (mouseY - spotY) * 0.15;
  spotlight.style.left = `${spotX}px`;
  spotlight.style.top = `${spotY}px`;
  requestAnimationFrame(animateSpotlight);
}
animateSpotlight();

// opsional: efek beda pas hover di card/button
const interactiveElements = document.querySelectorAll('.kingdom-card, button, a, .organism-slide');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => spotlight.classList.add('hover-mode'));
  el.addEventListener('mouseleave', () => spotlight.classList.remove('hover-mode'));
});

document.addEventListener("DOMContentLoaded", init);