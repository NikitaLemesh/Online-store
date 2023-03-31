import * as noUiSlider from "nouislider";
import GAMESINFO from "../constants";
import createCard from "../createCard";

const sliderRating: noUiSlider.target = document.getElementById(
  "slider-rating"
) as noUiSlider.target;

noUiSlider.create(sliderRating, {
  start: [0, 10],
  tooltips: true,
  connect: true,
  range: {
    min: 0,
    max: 10,
  },
});

export default function changeSliderRating() {
  sliderRating.noUiSlider?.on("change", (value) => {
    const [minRating, maxRating] = value;
    const collectionGames = document.querySelectorAll(".game__rating");
    const arrayFromCollectionGames: Element[] = Array.from(collectionGames);
    for (let i = 0; i < arrayFromCollectionGames.length; i++) {
      const item = arrayFromCollectionGames[i];
      const priceGame = Number(item.innerHTML.split(":")[1]);
      if (priceGame < minRating || priceGame > maxRating) {
        const gameContainer = item.parentElement as HTMLDivElement;
        gameContainer?.classList.add("card__none");
        GAMESINFO[i].visible = false;
        document.querySelector(".cards")?.remove();
        createCard(GAMESINFO);
      } else {
        const gameContainer = item.parentElement as HTMLDivElement;
        gameContainer?.classList.remove("card__none");
        GAMESINFO[i].visible = true;
        document.querySelector(".cards")?.remove();
        createCard(GAMESINFO);
      }
    }
  });
}
