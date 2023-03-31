import GAMESINFO from "../constants";
import { Sort, TypeGames } from "../interfaces";
import {
  addTypeInStorage,
  getTypeFromStorage,
} from "../localStorage/localStorageType";

function chooseValue(): string {
  const select = document.getElementById("type-game") as HTMLDataElement;
  const option: string = select.value;
  addTypeInStorage(option);
  return option;
}

export default function sortingGamesType(): void {
  chooseValue();
  const optionValue = getTypeFromStorage()
    ? getTypeFromStorage()
    : chooseValue();
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item: Sort = GAMESINFO[i].sort;
    if (optionValue === TypeGames.All) {
      item.visibleType = true;
    } else if (optionValue === TypeGames.Strategic) {
      item.visibleType = item.type === TypeGames.Strategic ? true : false;
    } else if (optionValue === TypeGames.Economic) {
      item.visibleType = item.type === TypeGames.Economic ? true : false;
    } else if (optionValue === TypeGames.ForParty) {
      item.visibleType = item.type === TypeGames.ForParty ? true : false;
    } else if (optionValue === TypeGames.Adventure) {
      item.visibleType = item.type === TypeGames.Adventure ? true : false;
    } else if (optionValue === TypeGames.Classical) {
      item.visibleType = item.type === TypeGames.Classical ? true : false;
    } else if (optionValue === TypeGames.Card) {
      item.visibleType = item.type === TypeGames.Card ? true : false;
    }
  }
}
