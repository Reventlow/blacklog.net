import './style.css'

document.getElementById('year').textContent = new Date().getFullYear()

const navbar = document.querySelector('nav')
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add('bg-white/90', 'backdrop-blur-lg', 'shadow-sm')
  } else {
    navbar.classList.remove('bg-white/90', 'backdrop-blur-lg', 'shadow-sm')
  }

  lastScroll = currentScroll
})

const cards = document.querySelectorAll('.download-card')
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`
})
