import { Game } from "./interfaces";
import { getCardLocalStorage } from "./localStorage/localStorageCards";
import searchCardsVisible from "./search/searchCardVisible";

export default function createCard(arrayOfGames: Game[]): void {
  const arrayLocalStorage = getCardLocalStorage();
  const sectionCards = document.querySelector(".section__cards") as HTMLElement;
  const divCards = document.createElement("div") as HTMLElement;
  divCards.classList.add("cards");
  sectionCards.append(divCards);
  for (let i = 0; i < arrayOfGames.length; i += 1) {
    const item = arrayOfGames[i];
    const card = document.createElement("div") as HTMLElement;
    card.classList.add("card");
    card.classList.add(`card__${i}`);
    if (
      !item.visible ||
      !item.sort.visibleType ||
      !item.present.visiblePresent ||
      !item.amountPlayers.visible ||
      !item.gameName.visible
    ) {
      card.classList.add("card__none");
    }
    divCards?.append(card);
    const gameName = document.createElement("h3") as HTMLElement;
    gameName.classList.add("game__name");
    gameName.textContent = item.gameName.name;
    card.append(gameName);
    const gameImage = document.createElement("img") as HTMLElement;
    gameImage.classList.add("game__image");
    gameImage.setAttribute("src", item.image);
    gameName.after(gameImage);
    const gameSort = document.createElement("p") as HTMLElement;
    gameSort.classList.add("game__sort");
    gameSort.textContent = `Вид: ${item.sort.type}`;
    gameImage.after(gameSort);
    const gameMinimumPlayers = document.createElement("p") as HTMLElement;
    gameMinimumPlayers.classList.add("game__minimum__players");
    gameMinimumPlayers.textContent = `Мин. кол-во игроков: ${item.amountPlayers.minPlayers}`;
    gameSort.after(gameMinimumPlayers);
    const gameMaximumPlayers = document.createElement("p") as HTMLElement;
    gameMaximumPlayers.classList.add("game__maximum__players");
    gameMaximumPlayers.textContent = `Макс. кол-во игроков: ${item.amountPlayers.maxPlayers}`;
    gameMinimumPlayers.after(gameMaximumPlayers);
    const gameAgeLimit = document.createElement("p") as HTMLElement;
    gameAgeLimit.classList.add("game__age__limit");
    gameAgeLimit.textContent = `Возраст: ${item.ageLimit}+`;
    gameMaximumPlayers.after(gameAgeLimit);
    const gamePresent = document.createElement("p") as HTMLElement;
    gamePresent.classList.add("game__present");
    gamePresent.textContent = `Наличие: ${item.present.availability}`;
    gameAgeLimit.after(gamePresent);
    const gamePrice = document.createElement("p") as HTMLElement;
    gamePrice.classList.add("game__price");
    gamePrice.textContent = `Цена: ${item.price}`;
    gamePresent.after(gamePrice);
    const gameRating = document.createElement("p") as HTMLElement;
    gameRating.classList.add("game__rating");
    gameRating.textContent = `Рейтинг: ${item.rating}`;
    gamePrice.after(gameRating);
    const cardName: string = gameName.textContent;
    if (arrayLocalStorage.includes(cardName)) {
      const checkedCard = document.createElement("div") as HTMLElement;
      checkedCard.classList.add("checked__card");
      gameRating.after(checkedCard);
    }
  }
  searchCardsVisible();
}
