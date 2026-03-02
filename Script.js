document.getElementById("year").textContent = new Date().getFullYear();

// v1 booking uses mailto (no backend)
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
