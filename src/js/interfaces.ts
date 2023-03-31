export interface Game {
  gameName: GameName;
  sort: Sort;
  amountPlayers: Amount;
  ageLimit: number;
  price: number;
  present: Present;
  rating: number;
  image: string;
  visible: boolean;
}

export interface Sort {
  type: string;
  visibleType: boolean;
}

export interface Present {
  availability: string;
  visiblePresent: boolean;
}

export enum TypeGames {
  All = "Все",
  Strategic = "Стратегические",
  Economic = "Экономические",
  ForParty = "Для компании",
  Adventure = "Приключенческие",
  Classical = "Классические",
  Card = "Карточные",
}

export enum PresentGame {
  onStorage = "В наличии",
  notOnStorage = "Под заказ",
}

export interface Amount {
  minPlayers: number;
  maxPlayers: number;
  visible: boolean;
}

export interface GameName {
  visible: boolean;
  name: string;
}
