document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('bouncing-bubble');
  const numBubbles = 30;
  const bubbles = [];

  // Crear 5 burbujas con diferentes tamaños
  for (let i = 0; i < numBubbles; i++) {
    const size = Math.floor(Math.random() * 175) + 50; // Tamaño entre 60 y 100 px
    const el = document.createElement('div');
    el.classList.add('circle');
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;

    container.appendChild(el);

    bubbles.push({
      el,
      x: Math.random() * (window.innerWidth - size),
      y: Math.random() * (window.innerHeight - size),
      vx: (Math.random() * 2 + 1.5) * (Math.random() < 0.5 ? 1 : -1),
      vy: (Math.random() * 2 + 1.5) * (Math.random() < 0.5 ? 1 : -1),
      size,
      rotation: Math.random() * 360
    });
  }

  function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    bubbles.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;

      // Rebote en X
      if (b.x <= 0 || b.x + b.size >= width) {
        b.vx *= -1;
      }

      // Rebote en Y
      if (b.y <= 0 || b.y + b.size >= height) {
        b.vy *= -1;
      }

      // Rotar
      b.rotation += 5;

      // Aplicar posición y rotación
      b.el.style.transform = `translate(${b.x}px, ${b.y}px) rotate(${b.rotation}deg)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
