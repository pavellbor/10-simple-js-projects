const msg = "My name is Pavel. I'm a frontend developer!";

function writeText(text, speed) {
  let i = 0;

  setInterval(() => {
    document.body.textContent = text.slice(0, i);
    i++;

    if (i > text.length) {
      setTimeout(() => (i = 0), 1000);
    }
  }, speed);
}

writeText(msg, 150)
