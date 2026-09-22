/* Builds all repeated/dynamic sections from SITE_DATA so markup lives in one place. */

function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (!el.querySelector("svg")) {
      el.insertAdjacentHTML("afterbegin", icon(name));
    }
  });
}

function renderTimeline() {
  const list = document.getElementById("timeline");
  if (!list) return;

  list.innerHTML = SITE_DATA.experience
    .map(
      (item, i) => `
      <li class="timeline-item ${item.current ? "is-current" : ""}" data-reveal style="--i:${i}">
        <div class="timeline-marker">${item.current ? '<span class="marker-pulse"></span>' : ""}</div>
        <div class="timeline-card glass">
          ${item.current ? '<span class="badge-current">Present</span>' : ""}
          <p class="timeline-period">${item.period}</p>
          <h3 class="timeline-role">${item.role}</h3>
          <p class="timeline-company">${item.company}</p>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </li>`
    )
    .join("");
}

function renderStats() {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.stats
    .map(
      (s, i) => `
      <div class="stat-card glass" data-reveal style="--i:${i}">
        <p class="stat-value" ${s.value !== null ? `data-counter="${s.value}" data-suffix="${s.suffix}"` : ""}>
          ${s.value !== null ? "0" + s.suffix : s.display}
        </p>
        <p class="stat-label">${s.label}</p>
      </div>`
    )
    .join("");
}

function renderWhatIDo() {
  const grid = document.getElementById("whatido-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.whatIDo
    .map(
      (item, i) => `
      <div class="feature-card glass" data-reveal style="--i:${i}">
        <span class="feature-icon">${icon(item.icon)}</span>
        <h3 class="feature-title">${item.title}</h3>
        <p class="feature-desc">${item.description}</p>
      </div>`
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.skillGroups
    .map(
      (group, i) => `
      <div class="skill-card glass" data-reveal style="--i:${i}">
        <div class="skill-card-head">
          <span class="skill-icon">${icon(group.icon)}</span>
          <h3 class="skill-title">${group.title}</h3>
        </div>
        <ul class="skill-tags">
          ${group.skills.map((s) => `<li>${s}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.projects
    .map(
      (p, i) => `
      <article class="project-card glass" data-reveal style="--i:${i}">
        <div class="project-thumb" aria-hidden="true">
          <span class="project-thumb-tag">${p.tag}</span>
          ${icon("package", "project-thumb-icon")}
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <ul class="project-tech">
            ${p.tech.map((t) => `<li>${t}</li>`).join("")}
          </ul>
          <div class="project-actions">
            <a href="${p.github}" class="btn btn-small btn-ghost" target="_blank" rel="noopener noreferrer">
              ${icon("github")}<span>GitHub</span>
            </a>
            <a href="${p.demo}" class="btn btn-small btn-primary" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>${icon("external-link")}
            </a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function renderHobbies() {
  const grid = document.getElementById("hobby-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.hobbies
    .map(
      (h, i) => `
      <div class="hobby-card glass" data-reveal style="--i:${i}">
        <span class="hobby-icon" aria-hidden="true">${h.icon}</span>
        <h3 class="hobby-title">${h.title}</h3>
        <p class="hobby-desc">${h.description}</p>
      </div>`
    )
    .join("");
}

function renderExploring() {
  const grid = document.getElementById("exploring-grid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.exploring
    .map((topic, i) => `<span class="tag-chip" data-reveal style="--i:${i}">${topic}</span>`)
    .join("");
}

function renderAll() {
  renderTimeline();
  renderStats();
  renderWhatIDo();
  renderSkills();
  renderProjects();
  renderHobbies();
  renderExploring();
  renderIcons();
}

document.addEventListener("DOMContentLoaded", renderAll);
