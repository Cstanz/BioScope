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
        "INTERACTIVE BIOLOGY LEARNING", 
        "EXPLORE THE FIVE KINGDOMS", 
        "DISCOVER CLASSIFICATION SECRETS"
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
        : "previous";

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
              ${isAdminMode() ? "Admin · Full access" : unlocked ? "Available" : `Locked · ${kingdom.unlock_text}`}
            </span>

            ${
              unlocked
                ? `<a class="text-link" href="${id}.html">Explore →</a>`
                : `<span class="lock-note">Score ${previousKingdom} ≥ 85%</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

// ---------- Kingdom pages ----------

// ---------- Specimen 3D embed: lazy-load on tap (biar nggak berat di HP) ----------

function buildSpecimenMarkup(embedUrl, title, fallbackLabel, fallbackSmall) {
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
      <section class="locked-page">
        <div class="container narrow">
          <span class="eyebrow">Kingdom locked</span>
          <h1>${kingdom.name} belum terbuka.</h1>
          <p>${kingdom.unlock_text}</p>
          <a class="btn btn-primary" href="progress.html">Lihat Progress</a>
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="chapter-hero kingdom-hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">${kingdom.eyebrow}</span>
          <h1>Kingdom ${kingdom.name}</h1>
          <p class="lede">${kingdom.summary}</p>
          ${isAdminMode() ? '<span class="admin-preview-badge">ADMIN PREVIEW · FULL ACCESS</span>' : ""}
        </div>

        <div class="specimen specimen-${kingdomId}">
          ${buildSpecimenMarkup(kingdom.embedUrl, `3D Model ${kingdom.name}`, "KINGDOM", kingdom.name.toUpperCase())}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container two-col">
        <div>
          <span class="eyebrow">Overview</span>
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
            <span class="eyebrow">Division / Phylum index</span>
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
            <span class="eyebrow">Kingdom quiz</span>
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
          <span class="eyebrow">Access restricted</span>
          <h1>Materi masih terkunci.</h1>
          <p>
            Selesaikan ${
              kingdom.name === "Monera" ? "tahap sebelumnya" : kingdom.unlock_text
            }.
          </p>
          <a class="btn btn-primary" href="../${division.kingdom}.html">
            Kembali ke Kingdom
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
          ${buildSpecimenMarkup(division.embedUrl, `3D Model ${division.title}`, "SPECIMEN", division.label.toUpperCase())}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container editorial-grid">
        <aside class="aside-meta">
          <span class="eyebrow">Taxonomy</span>
          <dl>
            <dt>Kingdom</dt>
            <dd>${kingdom.name}</dd>

            <dt>Group</dt>
            <dd>${division.label}</dd>

            <dt>Examples</dt>
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
            <span class="eyebrow">One division · One challenge</span>
            <h2>Classification Challenge</h2>
          </div>
          <span class="status status-open">1 completion unit</span>
        </div>

        <div class="challenge-card" data-challenge="${divisionId}"></div>
      </div>
    </section>
  `;

  renderChallenge(divisionId);
}

// ---------- Breadcrumb ----------

function renderBreadcrumb(kingdom, division) {
  return `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <div class="container">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep" aria-hidden="true">›</span>
        <a href="../${division.kingdom}.html">${kingdom.name}</a>
        <span class="breadcrumb-sep" aria-hidden="true">›</span>
        <span class="breadcrumb-current" aria-current="page">${division.label}</span>
      </div>
    </nav>
  `;
}

// ---------- Editorial sections (auto-hides sections with no data) ----------

function renderEditorialSections(division) {
  const sections = [
    {
      eyebrow: "Body organization",
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
      eyebrow: "Mode of life",
      heading: "Nutrisi & cara hidup",
      body: division.nutrition ? `<p>${division.nutrition}</p>` : "",
    },
    {
      eyebrow: "Life cycle",
      heading: "Reproduksi",
      body: division.reproduction ? `<p>${division.reproduction}</p>` : "",
    },
    {
      eyebrow: "Ecology",
      heading: "Peran ekologis",
      body: renderEcology(division),
    },
    {
      eyebrow: "Recognition",
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
  const challenge = division.challenge;

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
          <a class="btn btn-primary" href="classification-challenge.html">Kembali ke Challenge</a>
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
        <span class="eyebrow">Learning state</span>
        <h1>Progress</h1>
        <p class="lede">
          Progress menunjukkan aktivitas belajar; score menunjukkan hasil evaluasi.
          Keduanya tidak sama.
        </p>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container stats-grid">
        <div class="stat">
          <span>Overall progress</span>
          <strong>${averageProgress}%</strong>
        </div>
        <div class="stat">
          <span>Average score</span>
          <strong>${averageScore}%</strong>
        </div>
        <div class="stat">
          <span>Kingdom completed</span>
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
                    Score ${kingdomProgress.score}%
                  </span>
                </article>
              `;
            })
            .join("")}
        </div>

        <button id="reset-progress" class="btn btn-secondary danger">
          Reset Progress
        </button>
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
              <h2>Challenges</h2>
            </div>
          </div>

          <div class="compact-list">
            ${kingdom.division_ids
              .map((divisionId) => {
                const division = BIOSCOPE_DATA.divisions[divisionId];
                const state = progress.kingdoms[kingdomId].divisions[divisionId];
                const unlocked = adminAwareUnlock(kingdomId, progress);

                return `
                  <a
                    class="compact-item ${unlocked ? "" : "disabled"}"
                    href="${unlocked ? `divisions/${divisionId}.html` : "#"}"
                  >
                    <span>${division.label}</span>
                    <strong>${division.title}</strong>
                    <em>
                      ${state.challengeCompleted ? "Completed" : unlocked ? "Open" : "Locked"}
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
                    return `
                      <a
                        class="compact-item ${unlocked ? "" : "disabled"}"
                        href="${unlocked ? `dichotomous-key.html?kingdom=${kingdomId}` : "#"}"
                      >
                        <span>Kunci Dikotomi</span>
                        <strong>${kingdom.dichotomousKey.title}</strong>
                        <em>
                          ${kState.dichotomousCompleted ? "Completed" : unlocked ? "Open" : "Locked"}
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

document.addEventListener("DOMContentLoaded", init);