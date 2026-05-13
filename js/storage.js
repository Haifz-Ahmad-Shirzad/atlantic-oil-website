export function saveMessage(msg) {
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(msg);
  localStorage.setItem("messages", JSON.stringify(messages));
}
