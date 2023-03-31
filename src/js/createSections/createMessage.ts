export default function createMessage() {
  const cards = document.querySelector(".section__cards") as HTMLDivElement;
  const message = document.createElement("h2") as HTMLElement;
  message.classList.add("message");
  message.textContent = "Извините, подходящих вариантов нет";
  cards.after(message);
}
