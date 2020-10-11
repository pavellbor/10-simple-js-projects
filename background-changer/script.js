const btn = document.getElementById('btn');
btn.addEventListener('click', changeColor)


function changeColor() {
  const color1 = Math.floor(Math.random() * 255 + 1)
  const color2 = Math.floor(Math.random() * 255 + 1)
  const color3 = Math.floor(Math.random() * 255 + 1)
  document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}
