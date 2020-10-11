const button = document.getElementById("button");
const notificationContainer = document.getElementById("notification-container");
let id = 0;

button.addEventListener("click", (e) => {
  (notificationContainer.childElementCount === 0) ? id = 0 : id++;
  createNotification(id);
});

function createNotification(id) {
  const notification = document.createElement("p");
  notification.classList.add("notification");
  notification.dataset.id = id;
  notification.innerText = `This challenge is crazy ${id}`;

  notificationContainer.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}
