const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas a la ventana
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Carga de imagen del puerro
const puerroImg = new Image();
puerroImg.src = 'assets/puerro.png';

// Clase para los puerros que caen
class Particle {
  constructor(image) {
    this.image = image;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = 1 + Math.random() * 3;
    this.size = 20 + Math.random() * 30;
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }
}

const particles = [];

puerroImg.onload = () => {
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(puerroImg));
  }
  animate();
}

// Animación del canvas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
