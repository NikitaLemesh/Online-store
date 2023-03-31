export default function createSectionAmountPlayers() {
  const formAmountPlayers = document.querySelector(
    ".form__amount__players"
  ) as HTMLFormElement;
  const divFormAmount = document.createElement("div") as HTMLDivElement;
  divFormAmount.classList.add("div__form__amount");
  formAmountPlayers.append(divFormAmount);
  const titleFormAmount = document.createElement("h2") as HTMLElement;
  titleFormAmount.classList.add("title-form-amount");
  titleFormAmount.classList.add("label");
  titleFormAmount.textContent = "Количество игроков";
  divFormAmount.append(titleFormAmount);

  for (let i = 6; i >= 1; i--) {
    const inputFormAmount = document.createElement("input") as HTMLInputElement;
    inputFormAmount.classList.add(`input-form-amount-${i}`);
    inputFormAmount.classList.add("input-amount");
    inputFormAmount.setAttribute("type", "checkbox");
    inputFormAmount.setAttribute("id", `amount${i}`);
    inputFormAmount.setAttribute("name", `amount${i}`);
    titleFormAmount.after(inputFormAmount);
    const labelFormAmount = document.createElement("label") as HTMLLabelElement;
    labelFormAmount.classList.add(`label-form-amount-${i}`);
    labelFormAmount.setAttribute("for", `amount${i}`);
    labelFormAmount.textContent = `${i}`;
    inputFormAmount.after(labelFormAmount);
  }
}
