import GAMESINFO from "../constants";
import { Game } from "../interfaces";
import { getTypeFromStorage } from "../localStorage/localStorageType";
import sortingGamesType from "../sorting/sortingType";

export default function createTypeGameOption(): void {
  const localStorageValue = getTypeFromStorage();
  const sortGame: string[] = [];
  const divSortGame = document.querySelector(".div__type__game") as HTMLElement;
  const label = document.createElement("label") as HTMLElement;
  label.setAttribute("for", "type-game");
  label.textContent = "Выберите вид";
  label.classList.add("label");
  divSortGame.append(label);
  const select = document.createElement("select") as HTMLElement;
  select.classList.add("select__type__game");
  select.setAttribute("id", "type-game");
  label.after(select);
  const optionAll = document.createElement("option");
  optionAll.setAttribute("value", "Все");
  optionAll.textContent = "Все";
  const optionAllAttr: string | null = optionAll.getAttribute("value");
  if (optionAllAttr === localStorageValue) {
    optionAll.setAttribute("selected", "selected");
  }
  select.append(optionAll);
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item: Game = GAMESINFO[i];
    if (!sortGame.includes(item.sort.type)) {
      sortGame.push(item.sort.type);
      const option = document.createElement("option") as HTMLElement;
      option.setAttribute("value", item.sort.type);
      const optionAttr: string | null = option.getAttribute("value");
      if (optionAttr === localStorageValue) {
        option.setAttribute("selected", "selected");
      }
      option.textContent = item.sort.type;
      optionAll.after(option);
    }
  }
  sortingGamesType();
}
