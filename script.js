// Fade-in on scroll
const faders = document.querySelectorAll('.fade');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
faders.forEach(f => observer.observe(f));

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 120}px)`;
}
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 3000);