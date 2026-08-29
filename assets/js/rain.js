const canvas = document.querySelector("#rain");
const context = canvas.getContext("2d");
const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-=<>";
const fontSize = 18;
let columns = [];
let lastFrame = 0;

function resize() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * scale);
  canvas.height = Math.floor(window.innerHeight * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
  columns = Array.from({ length: Math.ceil(window.innerWidth / fontSize) }, () => Math.random() * -50);
}

function draw(timestamp) {
  if (timestamp - lastFrame >= 33) {
    lastFrame = timestamp;
    context.fillStyle = "rgba(0, 0, 0, 0.06)";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.font = `${fontSize}px monospace`;

    columns.forEach((row, column) => {
      const x = column * fontSize;
      const y = row * fontSize;
      context.fillStyle = "hsl(108 90% 70%)";
      context.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y);
      columns[column] = y > window.innerHeight && Math.random() > 0.975 ? 0 : row + 1;
    });
  }

  requestAnimationFrame(draw);
}

addEventListener("resize", resize);
addEventListener("bootcomplete", () => {
  resize();
  requestAnimationFrame(draw);
}, { once: true });
