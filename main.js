const unreadQnty = document.querySelector(".quantity");
const markRead = document.querySelector(".mark-read");
const notifications = document.querySelectorAll(".notification");

markRead.addEventListener("click", () => {
  unreadQnty.innerHTML = 0;
  notifications.forEach((notification) => {
    notification.hasAttribute("aria-live", true)
      ? notification.setAttribute("aria-live", false)
      : console.log("all messages are read");
  });
});

notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    notification.setAttribute("aria-live", false);
    unreadQnty.innerHTML = unreadQnty.innerHTML - 1;
  });
});
