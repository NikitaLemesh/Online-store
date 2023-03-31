import sortingGames from "./sorting/sortingAgeAndAlphabet";
import sortingGamesType from "./sorting/sortingType";
import checkPresentGame from "./sorting/sortingPresent";
import sortingAmountPlayers from "./sorting/sortingAmountPlayers";
import { searchGame, getinputValue } from "./search/search";
import createSearchButtonIcon from "../js/createSections/createButtonsSearch";
import { checkCardInLocalStorage } from "./localStorage/localStorageCards";
import createCard from "./createCard";
import GAMESINFO from "./constants";

export function clickCard(event: MouseEvent) {
  event.preventDefault();
  const target = event?.target as HTMLElement;
  const targetCard = target.closest(".card") as HTMLElement;
  const inputButton = document.querySelector(".search__btn");
  if (targetCard) {
    const nameOfGame: string | null | undefined =
      targetCard.firstChild?.textContent;
    if (nameOfGame) {
      checkCardInLocalStorage(nameOfGame);
      document.querySelector(".cards")?.remove();
      createCard(GAMESINFO);
    }
  }
  if (target === inputButton) {
    getinputValue("remove");
  }
}

export function sortingCards(event: Event) {
  event.preventDefault();
  const target = event?.target as HTMLElement;
  const targetSelectType = target.closest(".select__type__game") as HTMLElement;
  const targetSelectSorting = target.closest(
    ".select__sorting__game"
  ) as HTMLElement;
  const targetPresentGame = target.closest(
    ".div__form__present"
  ) as HTMLElement;
  const targetAmountPlayers = target.closest(
    ".div__form__amount"
  ) as HTMLDivElement;
  if (targetSelectSorting) {
    sortingGames();
    document.querySelector(".cards")?.remove();
    createCard(GAMESINFO);
  }
  if (targetSelectType) {
    sortingGamesType();
    document.querySelector(".cards")?.remove();
    createCard(GAMESINFO);
  }
  if (targetPresentGame) {
    checkPresentGame();
    document.querySelector(".cards")?.remove();
    createCard(GAMESINFO);
  }
  if (targetAmountPlayers) {
    sortingAmountPlayers();
  }
}

export function searchGameInStorage() {
  searchGame(getinputValue);
  createSearchButtonIcon(getinputValue);
}
