btns = document.querySelectorAll("button");
audios = document.querySelectorAll("audio");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    e.target.nextElementSibling.play();
  });
});
