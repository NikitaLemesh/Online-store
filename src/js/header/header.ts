import { getCardLocalStorage } from "../localStorage/localStorageCards";

export function createBasketLength(): void {
  const imgBasket = document.querySelector(".img__basket") as HTMLElement;
  const span = document.createElement("span");
  const cardLocalStorageLength: number = getCardLocalStorage().length;
  span.classList.add("span__basket");
  span.textContent = String(cardLocalStorageLength);
  imgBasket.after(span);
}

export function plusOneBasketCount(): void {
  const spanBasket = document.querySelector(".span__basket") as HTMLElement;
  const spanBasketCount = Number(spanBasket.textContent) + 1;
  spanBasket.textContent = spanBasketCount.toString();
}

export function minesOneBasketCount(): void {
  const spanBasket = document.querySelector(".span__basket") as HTMLElement;
  const spanBasketCount = Number(spanBasket.textContent) - 1;
  spanBasket.textContent = spanBasketCount.toString();
}
