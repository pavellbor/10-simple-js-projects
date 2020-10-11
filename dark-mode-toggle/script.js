const btn = document.getElementById('btn');
const body = document.body;

btn.addEventListener('click', (e) => {
  btn.classList.toggle('active');
  body.classList.toggle('dark');
})