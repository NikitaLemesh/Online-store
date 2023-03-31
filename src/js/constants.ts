import { Game } from "./interfaces";

const GAMESINFO: Game[] = [
  {
    gameName: {
      visible: true,
      name: "Уно",
    },
    sort: {
      type: "Карточные",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 10,
      visible: true,
    },
    ageLimit: 7,
    price: 30,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 9,
    image: "../images/uno.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Шахматы",
    },
    sort: {
      type: "Классические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 2,
      visible: true,
    },
    ageLimit: 3,
    price: 50,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 10,
    image: "../images/chess.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "500 злобных карт",
    },
    sort: {
      type: "Карточные",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 3,
      maxPlayers: 36,
      visible: true,
    },
    ageLimit: 18,
    price: 60,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 7,
    image: "../images/500card.png",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Домино",
    },
    sort: {
      type: "Классические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 3,
    price: 25,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 2,
    image: "../images/domino.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Гравити фолз",
    },
    sort: {
      type: "Приключенческие",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 5,
      visible: true,
    },
    ageLimit: 6,
    price: 39,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 9,
    image: "../images/gravity falls.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Властелин колец",
    },
    sort: {
      type: "Приключенческие",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 1,
      maxPlayers: 5,
      visible: true,
    },
    ageLimit: 13,
    price: 80,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 10,
    image: "../images/LOTR.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Мафия",
    },
    sort: {
      type: "Для компании",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 6,
      maxPlayers: 17,
      visible: true,
    },
    ageLimit: 14,
    price: 20,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 6,
    image: "../images/mafia.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Манчкин",
    },
    sort: {
      type: "Карточные",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 3,
      maxPlayers: 6,
      visible: true,
    },
    ageLimit: 12,
    price: 40,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 9,
    image: "../images/manchkin.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Монополия",
    },
    sort: {
      type: "Экономические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 6,
      visible: true,
    },
    ageLimit: 8,
    price: 35,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 2,
    image: "../images/monopoly.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Ведьмак",
    },
    sort: {
      type: "Приключенческие",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 1,
      maxPlayers: 5,
      visible: true,
    },
    ageLimit: 14,
    price: 70,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 7,
    image: "../images/wither.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Бэнк",
    },
    sort: {
      type: "Карточные",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 4,
      maxPlayers: 7,
      visible: true,
    },
    ageLimit: 12,
    price: 41,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 5,
    image: "../images/bang.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Нарды",
    },
    sort: {
      type: "Классические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 2,
      visible: true,
    },
    ageLimit: 6,
    price: 64,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 1,
    image: "../images/nardy.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Фоллаут",
    },
    sort: {
      type: "Приключенческие",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 1,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 13,
    price: 95,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 3,
    image: "../images/fallout.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Нуар",
    },
    sort: {
      type: "Приключенческие",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 9,
      visible: true,
    },
    ageLimit: 13,
    price: 52,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 5,
    image: "../images/nyar.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Мачи Коро",
    },
    sort: {
      type: "Экономические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 5,
      visible: true,
    },
    ageLimit: 7,
    price: 32,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 8,
    image: "../images/machicoro.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Игра Престолов",
    },
    sort: {
      type: "Экономические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 3,
      maxPlayers: 6,
      visible: true,
    },
    ageLimit: 14,
    price: 87,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 7,
    image: "../images/GOTT.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Катан",
    },
    sort: {
      type: "Экономические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 8,
    price: 25,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 9,
    image: "../images/catan.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Башня",
    },
    sort: {
      type: "Для компании",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 6,
      visible: true,
    },
    ageLimit: 6,
    price: 17,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 7,
    image: "../images/tower.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Форт",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 10,
    price: 23,
    present: {
      availability: "В наличии",
      visiblePresent: true,
    },
    rating: 1,
    image: "../images/fort.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Гарри Поттер",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 11,
    price: 93,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 4,
    image: "../images/HarryPother.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Дюна",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 1,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 13,
    price: 73,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 4,
    image: "../images/duna.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "АНХ Боги Египта",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 5,
      visible: true,
    },
    ageLimit: 14,
    price: 81,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 2,
    image: "../images/anh.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Иниш",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 2,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 14,
    price: 68,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 7,
    image: "../images/enish.jpg",
    visible: true,
  },
  {
    gameName: {
      visible: true,
      name: "Прага",
    },
    sort: {
      type: "Стратегические",
      visibleType: true,
    },
    amountPlayers: {
      minPlayers: 1,
      maxPlayers: 4,
      visible: true,
    },
    ageLimit: 13,
    price: 72,
    present: {
      availability: "Под заказ",
      visiblePresent: true,
    },
    rating: 2,
    image: "../images/praha.jpg",
    visible: true,
  },
];

export default GAMESINFO;
