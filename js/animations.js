/* Scroll reveal, animated counters, navbar state and active-section tracking. */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = Number(el.dataset.counter);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}

function initNavbarScrollState() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const toggle = () => navbar.classList.toggle("scrolled", window.scrollY > 24);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

function initActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link[data-nav]");
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* render.js's DOMContentLoaded listener runs first (loaded earlier in index.html),
   so dynamic sections already exist in the DOM by the time these observers attach. */
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initCounters();
  initNavbarScrollState();
  initActiveSection();
});
