// ===== CARROSSEL AUTOMÁTICO E MANUAL =====
const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let index = 0;

// Atualiza a posição do carrossel
function showSlide(n) {
  index = (n + images.length) % images.length; // looping infinito
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

// Avançar e voltar
nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

// Auto play (troca a cada 4s)
setInterval(() => showSlide(index + 1), 4000);

// ==== Indicadores (bolinhas) ====
const dotsContainer = document.createElement('div');
dotsContainer.classList.add('carousel-indicators');
carouselInner.parentElement.appendChild(dotsContainer);

images.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

updateDots();
