const unreadQnty = document.querySelector(".quantity");
const markRead = document.querySelector(".mark-read");
const notifications = document.querySelectorAll(".notification");

markRead.addEventListener("click", () => {
  unreadQnty.innerText = 0;
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
});

notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    if (!notification.classList.contains("unread")) return;
    notification.classList.remove("unread");
    unreadQnty.innerText = unreadQnty.innerText - 1;
  });
});
