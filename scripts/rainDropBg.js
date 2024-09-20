const rainContainer = document.querySelector('.rain-background');

export const rainDropBg = () => {
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    rainContainer.appendChild(drop); // Добавляем каплю в контейнер
  }
};

export const clearRainDrops = () => {
  const drops = rainContainer.querySelectorAll('.drop');
  drops.forEach((drop) => drop.remove()); // Удаляем все капли
};
