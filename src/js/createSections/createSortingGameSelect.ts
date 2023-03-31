import { getSortingFromStorage } from "../localStorage/localStorageSorting";
import {
  sortAlphabetIncrease,
  sortAlphabetDecrease,
  sortAgeIncrease,
  sortAgeDecrease,
} from "../sorting/sortingAgeAndAlphabet";

export default function createSortingGameOption(): void {
  const localStorageValue = getSortingFromStorage();
  const divSortGame = document.querySelector(
    ".div__sorting__game"
  ) as HTMLElement;
  const label = document.createElement("label") as HTMLElement;
  label.setAttribute("for", "sorting-game");
  label.classList.add("label");
  label.textContent = "Сортировка";
  divSortGame.append(label);
  const select = document.createElement("select") as HTMLElement;
  select.setAttribute("id", "sorting-game");
  select.classList.add("select__sorting__game");
  select.setAttribute("name", "games");
  label.after(select);
  const optionAlphabetToEnd = document.createElement("option") as HTMLElement;
  optionAlphabetToEnd.setAttribute("value", "AlphabetIncrease");
  optionAlphabetToEnd.textContent = "Название от А до Я";
  const alpToEnd: string | null = optionAlphabetToEnd.getAttribute("value");
  if (alpToEnd === localStorageValue) {
    sortAlphabetIncrease();
    optionAlphabetToEnd.setAttribute("selected", "selected");
  }
  select.append(optionAlphabetToEnd);
  const optionAlphabetFromEnd = document.createElement("option") as HTMLElement;
  optionAlphabetFromEnd.setAttribute("value", "AlphabetDecrease");
  optionAlphabetFromEnd.textContent = "Название от Я до А";
  const alpFromEnd: string | null = optionAlphabetFromEnd.getAttribute("value");
  if (alpFromEnd === localStorageValue) {
    sortAlphabetDecrease();
    optionAlphabetFromEnd.setAttribute("selected", "selected");
  }
  optionAlphabetToEnd.after(optionAlphabetFromEnd);
  const optionAgeYounger = document.createElement("option") as HTMLElement;
  optionAgeYounger.setAttribute("value", "AgeIncrease");
  optionAgeYounger.textContent = "Возраст: по возрастанию";
  const ageIncrease: string | null = optionAgeYounger.getAttribute("value");
  if (ageIncrease === localStorageValue) {
    sortAgeIncrease();
    optionAgeYounger.setAttribute("selected", "selected");
  }
  optionAlphabetFromEnd.after(optionAgeYounger);
  const optionAgeOlder = document.createElement("option") as HTMLElement;
  optionAgeOlder.setAttribute("value", "AgeDecrease");
  optionAgeOlder.textContent = "Возраст: по убыванию";
  const ageDecrease: string | null = optionAgeOlder.getAttribute("value");
  if (ageDecrease === localStorageValue) {
    sortAgeDecrease();
    optionAgeOlder.setAttribute("selected", "selected");
  }
  optionAgeYounger.after(optionAgeOlder);
}
