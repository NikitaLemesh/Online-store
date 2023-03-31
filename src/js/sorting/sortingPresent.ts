import GAMESINFO from "../constants";
import { Present, PresentGame } from "../interfaces";

function chooseValuePresent(): boolean {
  const input = document.getElementById("presentGame") as HTMLInputElement;
  const present: boolean = input.checked;
  return present;
}

function chooseValueNotPresent(): boolean {
  const input = document.getElementById("notPresentGame") as HTMLInputElement;
  const notPresent: boolean = input.checked;
  return notPresent;
}

export default function checkPresentGame(): void {
  const presentGame = chooseValuePresent();
  const notPresentGame = chooseValueNotPresent();
  for (let i = 0; i < GAMESINFO.length; i++) {
    const item: Present = GAMESINFO[i].present;
    if (presentGame && notPresentGame) {
      item.visiblePresent = true;
    }
    if (!presentGame && !notPresentGame) {
      item.visiblePresent = true;
    }
    if (presentGame && !notPresentGame) {
      item.visiblePresent =
        item.availability === PresentGame.notOnStorage ? false : true;
    }
    if (notPresentGame && !presentGame) {
      item.visiblePresent =
        item.availability === PresentGame.onStorage ? false : true;
    }
  }
}
