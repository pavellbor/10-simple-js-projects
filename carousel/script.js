const ul = document.querySelector("ul");

let i = 0;

fetch("https://picsum.photos/v2/list?page=2&limit=5")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((i) => {
      const li = document.createElement('li');
      li.innerHTML = `<img src="${i.download_url}">`
      ul.appendChild(li);
    })
  })
  .then(() => {
    setInterval(() => {
      if (i === ul.childElementCount) {
        i = 0;
      }
      ul.style.left = -i * 600 + "px";
      i++;
    }, 1000);
  })
