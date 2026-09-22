/* Mobile navigation, smooth scroll cleanup, and contact form validation. */

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const iconHolder = document.getElementById("nav-toggle-icon");
  const links = document.getElementById("nav-links");
  if (!toggle || !links || !iconHolder) return;

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    iconHolder.innerHTML = icon(open ? "close" : "menu");
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

const FORM_VALIDATORS = {
  name: (value) => (value.trim().length >= 2 ? "" : "Please enter your name."),
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address."),
  subject: (value) => (value.trim().length >= 3 ? "" : "Please enter a subject."),
  message: (value) => (value.trim().length >= 10 ? "" : "Please enter a message (at least 10 characters)."),
};

function validateField(field) {
  const validator = FORM_VALIDATORS[field.name];
  if (!validator) return true;

  const message = validator(field.value);
  const errorEl = document.querySelector(`[data-error-for="${field.name}"]`);
  if (errorEl) errorEl.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const fields = Array.from(form.querySelectorAll("input[name], textarea[name]"));

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = fields.map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields before sending.";
      status.classList.remove("form-status-success");
      status.classList.add("form-status-error");
      return;
    }

    // No backend is wired up yet — this is where an API/email service call would go.
    status.textContent = "Thanks for reaching out! This form isn't connected to a backend yet, so please use the email link above for now.";
    status.classList.remove("form-status-error");
    status.classList.add("form-status-success");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initContactForm();
});
