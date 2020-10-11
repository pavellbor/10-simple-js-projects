function createHeart() {
  const heart = document.createElement('div');
  const position = (Math.random() * 100)
  heart.classList.add('heart');
  heart.style.left = position + 'vw';
  document.body.insertAdjacentElement('afterbegin', heart);

  setTimeout(() => heart.remove(), 5000);
}

function startRain() {
  setInterval(createHeart, 500)
}

startRain()