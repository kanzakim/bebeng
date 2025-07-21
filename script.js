function showMessage() {
  document.getElementById('message').classList.remove('hidden');
}

// Partikel hati 🌸
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = Array(50).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 8 + 4,
  speed: Math.random() * 1 + 0.5
}));

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,105,180,0.8)";
    ctx.moveTo(heart.x, heart.y);
    ctx.arc(heart.x - heart.size / 2, heart.y, heart.size / 2, 0, Math.PI * 2);
    ctx.arc(heart.x + heart.size / 2, heart.y, heart.size / 2, 0, Math.PI * 2);
    ctx.lineTo(heart.x, heart.y + heart.size);
    ctx.fill();
    heart.y += heart.speed;
    if (heart.y > canvas.height) heart.y = 0;
  });
  requestAnimationFrame(drawHearts);
}

drawHearts();
