const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const container = document.querySelector(".popup-container");

btn.addEventListener("click", popupShow);

function popupShow() {
  popup.classList.add("active");
  container.classList.add("active");

  document.body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("container") ||
      e.target.classList.contains("close")
    ) {
      popup.classList.remove("active");
      container.classList.remove("active");
    }
  });
}
