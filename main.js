const unreadQnty = document.querySelector(".quantity");
const markRead = document.querySelector(".mark-read");
const notification = document.querySelector(".notification");

markRead.addEventListener("click", () => {
  unreadQnty.innerHTML = 0;
  notification.hasAttribute("data-type")
    ? notification.toggleAttribute("data-type")
    : console.log("all messages are read");
});

notification.addEventListener("click", () => {
  notification.toggleAttribute("data-type");
  // ? notification.toggleAttribute("data-type")
  // : console.log("all messages are read");
});
