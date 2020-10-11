const button = document.querySelector('button');
const nav = document.querySelector('nav');

button.addEventListener('click', function(e) {
  button.classList.toggle('active');
  nav.classList.toggle('active');
})