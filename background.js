const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const puerroImg = new Image();
puerroImg.src = 'assets/puerro.png';

class Puerro {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -50;
    this.size = 30 + Math.random() * 30;
    this.speed = 1 + Math.random() * 2;
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.drawImage(puerroImg, this.x, this.y, this.size, this.size);
  }
}

const puerros = [];
for (let i = 0; i < 20; i++) {
  puerros.push(new Puerro());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  puerros.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

puerroImg.onload = () => {
  animate();
};
