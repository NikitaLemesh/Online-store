import * as noUiSlider from "nouislider";
import GAMESINFO from "../constants";
import createCard from "../createCard";

const sliderPrice: noUiSlider.target = document.getElementById(
  "slider-price"
) as noUiSlider.target;
noUiSlider.create(sliderPrice, {
  start: [0, 100],
  tooltips: true,
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});

export default function changeSliderPrice() {
  sliderPrice.noUiSlider?.on("change", (value) => {
    const [minPrice, maxPrice] = value;
    const collectionGames = document.querySelectorAll(".game__price");
    const arrayFromCollectionGames: Element[] = Array.from(collectionGames);
    for (let i = 0; i < arrayFromCollectionGames.length; i++) {
      const item = arrayFromCollectionGames[i];
      const priceGame = Number(item.innerHTML.split(":")[1]);
      if (priceGame < minPrice || priceGame > maxPrice) {
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
