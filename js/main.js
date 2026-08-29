/*
  BioScope — application logic
  All learning state is stored locally in the browser.
*/

const STORE_KEY = "bioscopeProgress";
const ROLE_KEY = "bioscopeRole";
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
          ${
            kingdom.embedUrl 
            ? `<iframe 
                 style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; border: none; background: transparent;"
                 title="3D Model ${kingdom.name}" 
                 frameborder="0" 
                 allowfullscreen 
                 mozallowfullscreen="true" 
                 webkitallowfullscreen="true" 
                 allow="autoplay; fullscreen; xr-spatial-tracking" 
                 xr-spatial-tracking 
                 execution-while-out-of-viewport 
                 execution-while-not-rendered 
                 web-share 
                 src="${kingdom.embedUrl}">
               </iframe>`
            : `<span>
                 KINGDOM<br />
                 <small>${kingdom.name.toUpperCase()}</small>
               </span>`
          }
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
    <section class="ency-hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">${division.label} · ${kingdom.name}</span>
          <h1>${division.title}</h1>
          <p class="scientific">${division.scientific}</p>
          <p class="lede">${division.definition}</p>
        </div>

        <div
          class="specimen specimen-${division.kingdom}"
          role="img"
          aria-label="Placeholder spesimen ${division.title}"
        >
          <span>
            SPECIMEN<br />
            <small>${division.label.toUpperCase()}</small>
          </span>
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
            <dd>${division.examples}</dd>
          </dl>
        </aside>

        <div class="prose">
          <section class="editorial-section">
            <span class="eyebrow">01 · Body organization</span>
            <h2>Struktur & morfologi</h2>
            <p>${division.body}</p>
          </section>

          <section class="editorial-section">
            <span class="eyebrow">02 · Habitat</span>
            <h2>Habitat & distribusi</h2>
            <p>${division.habitat}</p>
            <div
              class="map-placeholder"
              role="img"
              aria-label="Placeholder peta distribusi"
            >
              DISTRIBUTION FIELD<br />
              <small>MAP PLACEHOLDER</small>
            </div>
          </section>

          <section class="editorial-section">
            <span class="eyebrow">03 · Mode of life</span>
            <h2>Nutrisi & cara hidup</h2>
            <p>${division.nutrition}</p>
          </section>

          <section class="editorial-section">
            <span class="eyebrow">04 · Life cycle</span>
            <h2>Reproduksi</h2>
            <p>${division.reproduction}</p>
          </section>

          <section class="editorial-section">
            <span class="eyebrow">05 · Ecology</span>
            <h2>Peran ekologis</h2>
            <p>${division.ecology}</p>
          </section>

          <section class="editorial-section">
            <span class="eyebrow">06 · Recognition</span>
            <h2>Bagaimana mengenalinya?</h2>
            <p>${division.recognize}</p>
          </section>
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

function renderChallenge(divisionId) {
  const container = document.querySelector("[data-challenge]");

  if (!container) {
    return;
  }

  const division = BIOSCOPE_DATA.divisions[divisionId];
  const challenge = division.challenge;

  container.innerHTML = `
    <div class="challenge-visual">
      <span>
        FIELD<br />
        OBSERVATION
      </span>
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
            <fieldset>
              <legend>${index + 1}. ${question[0]}</legend>
              ${question[1]
                .map(
                  (option, optionIndex) => `
                    <label class="option">
                      <input
                        type="radio"
                        name="q${index}"
                        value="${option}"
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

    <div id="quiz-result" class="feedback" aria-live="polite"></div>
  `;

  document.querySelector("#quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let correctAnswers = 0;

    kingdom.quiz.forEach((question, index) => {
      if (formData.get(`q${index}`) === question[2]) {
        correctAnswers += 1;
      }
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
          </div>
        </section>
      `;
    })
    .join("");
}

// ---------- Initialization ----------

function init() {
  setActiveNav();
  setupMenu();
  renderKingdomCards();
  renderKingdomPage();
  initDivisionPage();
  renderProgress();
  renderGlobalChallenges();

  const whyPage = document.querySelector("[data-why]");

  if (whyPage) {
    const progress = getProgress();
    progress.whyClassify = true;
    saveProgress(progress);
  }
}

document.addEventListener("DOMContentLoaded", init);

// ---------- Embed ----------
