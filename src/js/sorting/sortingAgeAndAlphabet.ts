import GAMESINFO from "../constants";
import { Game } from "../interfaces";
import quicksortIncrease from "./quicksortIncrease";
import quicksortDecrease from "./quicksortDecrease";
import {
  addSortingInStorage,
  getSortingFromStorage,
} from "../localStorage/localStorageSorting";

function chooseValue(): string {
  const select = document.getElementById("sorting-game") as HTMLDataElement;
  const option: string = select.value;
  addSortingInStorage(option);
  return option;
}

export function sortAgeDecrease(): void {
  GAMESINFO.sort((a: Game, b: Game) => {
    return b.ageLimit - a.ageLimit;
  });
}

export function sortAgeIncrease(): void {
  GAMESINFO.sort((a: Game, b: Game) => {
    return a.ageLimit - b.ageLimit;
  });
}

export function sortAlphabetIncrease(): void {
  quicksortIncrease(GAMESINFO);
}

export function sortAlphabetDecrease(): void {
  quicksortDecrease(GAMESINFO);
}

export default function sortingGames(): void {
  chooseValue();
  const optionValue = getSortingFromStorage()
    ? getSortingFromStorage()
    : chooseValue();
  switch (optionValue) {
    case "AlphabetIncrease":
      sortAlphabetIncrease();
      break;
    case "AlphabetDecrease":
      sortAlphabetDecrease();
      break;
    case "AgeDecrease":
      sortAgeDecrease();
      break;
    case "AgeIncrease":
      sortAgeIncrease();
      break;
  }
}
