import createMessage from "../createSections/createMessage";

export default function searchCardsVisible() {
  const messageClassName = document.querySelector(".message") as HTMLElement;
  const arrayLengthClassList: number[] = [];
  const collectionCards = document.querySelectorAll(
    ".card"
  ) as NodeListOf<Element>;
  const arrayFromColleection: Element[] = Array.from(collectionCards);
  for (let i = 0; i < arrayFromColleection.length; i++) {
    const item = arrayFromColleection[i] as HTMLDivElement;
    const itemLength: number = item.className.length;
    if (itemLength > 20) {
      arrayLengthClassList.push(itemLength);
    }
  }
  if (arrayLengthClassList.length !== 24) {
    messageClassName?.remove();
    return;
  }
  if (arrayLengthClassList.length === 24) {
    if (messageClassName) {
      return;
    }
    createMessage();
  }
}
