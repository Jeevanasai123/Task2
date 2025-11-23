// ====== BACKGROUND SLIDESHOW ======
const hero = document.querySelector(".hero-section");
const slides = [
  "/assets/images/placeholder.jpg",
  "/assets/images/placeholder.jpg",
  "/assets/images/placeholder.jpg"
];
let currentSlide = 0;

function changeSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  hero.style.backgroundImage = `url('${slides[currentSlide]}')`;
}
setInterval(changeSlide, 5000); // change every 5 seconds

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ====== RESERVATION FORM HANDLING ======
const form = document.getElementById("reservationForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  alert(`Thank you, ${name}! Your table for ${guests} on ${date} at ${time} is booked.`);
  form.reset();
});
