export default function createSectionPresent() {
  const formPresentGame = document.querySelector(
    ".form__present__game"
  ) as HTMLFormElement;
  const titleFormPresent = document.createElement("h2") as HTMLElement;
  titleFormPresent.classList.add("title-form-present");
  titleFormPresent.classList.add("label");
  titleFormPresent.textContent = "Наличие на складе";
  formPresentGame.append(titleFormPresent);
  const divFormPresent = document.createElement("div") as HTMLDivElement;
  divFormPresent.classList.add("div__form__present");
  titleFormPresent.after(divFormPresent);
  const inputFormPresent = document.createElement("input") as HTMLInputElement;
  inputFormPresent.classList.add("input-form-present");
  inputFormPresent.setAttribute("type", "checkbox");
  inputFormPresent.setAttribute("id", "presentGame");
  inputFormPresent.setAttribute("name", "present");
  divFormPresent.append(inputFormPresent);
  const labelFormPresent = document.createElement("label") as HTMLLabelElement;
  labelFormPresent.classList.add("label-form-present");
  labelFormPresent.setAttribute("for", "presentGame");
  labelFormPresent.textContent = "В наличии";
  inputFormPresent.after(labelFormPresent);
  const inputFormNotPresent = document.createElement(
    "input"
  ) as HTMLInputElement;
  inputFormNotPresent.classList.add("input-form-not-present");
  inputFormNotPresent.setAttribute("type", "checkbox");
  inputFormNotPresent.setAttribute("id", "notPresentGame");
  inputFormNotPresent.setAttribute("name", "notPresent");
  labelFormPresent.after(inputFormNotPresent);
  const labelFormNotPresent = document.createElement(
    "label"
  ) as HTMLLabelElement;
  labelFormNotPresent.classList.add("label-form-not-present");
  labelFormNotPresent.setAttribute("for", "notPresentGame");
  labelFormNotPresent.textContent = "Под заказ";
  inputFormNotPresent.after(labelFormNotPresent);
}
