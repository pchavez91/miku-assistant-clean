const miku = document.getElementById('miku');
const bubble = document.getElementById('bubble');

const phrases = [
  "¡Escuchando algo bueno por ahí? 🎵",
  "No olvides tomar agua 💧",
  "¿Vamos a programar algo genial? 💻",
  "¡Hoy es un gran día para ser productivo! ☀️"
];

miku.addEventListener('click', () => {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  bubble.innerText = random;
});

setTimeout(() => {
  const staticMiku = document.getElementById('miku-static');
  const danceMiku = document.getElementById('miku-dance');

  staticMiku.style.display = 'none';
  danceMiku.style.display = 'block';
}, 3000);
