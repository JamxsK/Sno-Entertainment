document.getElementById("year").textContent = new Date().getFullYear();

/* -------- Mobile menu -------- */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.hidden = false;
  menuBtn.setAttribute("aria-expanded", "true");
  document.addEventListener("keydown", onEsc);
  document.addEventListener("click", onOutsideClick);
}

function closeMenu() {
  mobileMenu.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
  document.removeEventListener("keydown", onEsc);
  document.removeEventListener("click", onOutsideClick);
}

function onEsc(e) {
  if (e.key === "Escape") closeMenu();
}

function onOutsideClick(e) {
  const header = document.querySelector(".topbar");
  if (header && !header.contains(e.target)) closeMenu();
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  if (expanded) closeMenu();
  else openMenu();
});

// Close menu when a link is clicked
mobileMenu.addEventListener("click", (e) => {
  const target = e.target;
  if (target && (target.classList.contains("mobile-link") || target.classList.contains("btn"))) {
    closeMenu();
  }
});

/* -------- Booking form (mailto v1) -------- */
const form = document.getElementById("bookingForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value.trim();
  const details = document.getElementById("details").value.trim();

  const to = "youremail@example.com"; // <-- change later
  const subject = encodeURIComponent(`Sno Ent Booking: ${service}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nDetails:\n${details}\n`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
