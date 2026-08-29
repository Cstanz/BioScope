document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.querySelector("#enter-admin");
  const exitButton = document.querySelector("#exit-admin");
  const status = document.querySelector("#admin-status");
  const container = document.querySelector("#admin-kingdoms");

  function refreshStatus() {
    const active = localStorage.getItem("bioscopeRole") === "admin";
    if (status) {
      status.textContent = active
        ? "Admin Mode aktif. Buka Fungi, Plantae, atau Animalia langsung dari sini."
        : "Student Mode aktif. Sistem unlock 85% berlaku.";
      status.classList.toggle("is-active", active);
    }
  }

  enterButton?.addEventListener("click", () => {
    localStorage.setItem("bioscopeRole", "admin");
    refreshStatus();
    renderKingdoms();
  });

  exitButton?.addEventListener("click", () => {
    localStorage.removeItem("bioscopeRole");
    refreshStatus();
    renderKingdoms();
  });

  function renderKingdoms() {
    if (!container || typeof BIOSCOPE_DATA === "undefined") return;

    container.innerHTML = Object.entries(BIOSCOPE_DATA.kingdoms).map(([id, kingdom], index) => {
      const divisions = kingdom.division_ids || [];

      return `
        <article class="admin-card">
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <span class="eyebrow">${kingdom.eyebrow}</span>
            <h3>${kingdom.name}</h3>
            <p>${kingdom.summary}</p>
            <div class="admin-meta">${divisions.length} Division / Phylum</div>
            <div class="admin-division-list">
              ${divisions.map((divisionId) => {
                const division = BIOSCOPE_DATA.divisions[divisionId];
                return division
                  ? `<a href="divisions/${divisionId}.html">${division.title} <span>→</span></a>`
                  : "";
              }).join("")}
            </div>
            <a class="btn btn-primary" href="${id}.html">Buka ${kingdom.name}</a>
          </div>
        </article>
      `;
    }).join("");
  }

  refreshStatus();
  renderKingdoms();
});
