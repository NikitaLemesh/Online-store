import GAMESINFO from "../constants";
import createCard from "../createCard";

function chooseValueAmount(): number[] {
  const amountPlayersArray: number[] = [];
  const collectionAmountPlayers = document.querySelectorAll(
    ".input-amount"
  ) as NodeListOf<Element>;
  const arrayFromColleection: Element[] = Array.from(collectionAmountPlayers);
  for (let i = 0; i < arrayFromColleection.length; i++) {
    const item = arrayFromColleection[i] as HTMLInputElement;
    const itemId: string | null = item.getAttribute("id");
    if (itemId) {
      const countId = Number(itemId[itemId.length - 1]);
      const present: boolean = item.checked;
      if (present) {
        amountPlayersArray.push(countId);
      }
    }
  }
  return amountPlayersArray;
}

function changeVisibleAmountPlayersKey(): void {
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item = GAMESINFO[i].amountPlayers;
    item.visible = true;
  }
}

export default function sortingAmountPlayers() {
  const amountPlayersArray = chooseValueAmount();
  if (amountPlayersArray.length === 0 || amountPlayersArray.length === 6) {
    changeVisibleAmountPlayersKey();
  }
  for (let i = 0; i < amountPlayersArray.length; i++) {
    for (let j = 0; j < GAMESINFO.length; j++) {
      const count = amountPlayersArray[i];
      const item = GAMESINFO[j].amountPlayers;
      if (item.minPlayers > count || item.maxPlayers < count) {
        item.visible = false;
      }
    }
  }
  document.querySelector(".cards")?.remove();
  createCard(GAMESINFO);
}
