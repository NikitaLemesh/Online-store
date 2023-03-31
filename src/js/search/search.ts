import GAMESINFO from "../constants";
import createCard from "../createCard";
import { GameName } from "../interfaces";
import createSearchButtonIcon from "../createSections/createButtonsSearch";

function changeVisibleGameNameKey() {
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item: GameName = GAMESINFO[i].gameName;
    item.visible = true;
  }
}

export function getinputValue(str?: string): string {
  const input = document.querySelector(".search") as HTMLInputElement;
  const inputValue: string = input.value.toLowerCase();
  localStorage.setItem("search", inputValue);
  if (str) {
    changeVisibleGameNameKey();
    createCard(GAMESINFO);
    createSearchButtonIcon(getinputValue, "remove");
  }
  return inputValue;
}

export function searchGame(value: () => string) {
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item: GameName = GAMESINFO[i].gameName;
    const itemName: string = item.name.toLowerCase();
    const found = itemName.indexOf(value(), 0);
    if (!value()) {
      changeVisibleGameNameKey();
    }
    if (found === -1) {
      item.visible = false;
    } else {
      item.visible = true;
    }
    document.querySelector(".cards")?.remove();
    createCard(GAMESINFO);
  }
}
