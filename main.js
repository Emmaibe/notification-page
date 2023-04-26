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
    notification.classList.remove("unread");
    const newQnty = document.querySelectorAll(".unread");
    unreadQnty.innerText = newQnty.length;
  });
});
