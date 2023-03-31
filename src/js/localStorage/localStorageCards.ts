import { plusOneBasketCount, minesOneBasketCount } from "../header/header";

export function getCardLocalStorage(): string[] {
  const gameLocalStorage: string | null = localStorage.getItem("cardsList");
  if (gameLocalStorage) {
    const arrayLocalStorage: string[] = JSON.parse(gameLocalStorage);
    return arrayLocalStorage;
  } else {
    const arrayLocalStorage: string[] = [];
    return arrayLocalStorage;
  }
}

function addGardToLocalStorage(item: string) {
  const cardsList: string[] = getCardLocalStorage();
  cardsList.push(item);
  localStorage.setItem("cardsList", JSON.stringify(cardsList));
}

function removeGardFromLocalStorage(item: string) {
  const cardsList: string[] = getCardLocalStorage();
  for (let i = 0; i < cardsList.length; i++) {
    if (cardsList[i] === item) {
      cardsList.splice(i, 1);
    }
  }
  localStorage.setItem("cardsList", JSON.stringify(cardsList));
}

export function checkCardInLocalStorage(item: string) {
  const cardsList: string[] = getCardLocalStorage();
  if (cardsList.length === 0) {
    addGardToLocalStorage(item);
    plusOneBasketCount();
  }
  for (let i = 0; i < cardsList.length; i++) {
    if (cardsList.includes(item)) {
      removeGardFromLocalStorage(item);
      minesOneBasketCount();
      break;
    } else {
      if (cardsList.length >= 20) {
        alert("Извините, все слоты заполненыf");
        break;
      }
      addGardToLocalStorage(item);
      plusOneBasketCount();
      break;
    }
  }
}
