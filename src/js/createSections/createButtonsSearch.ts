export default function createSearchButtonIcon(
  getinputValue: () => string,
  str?: string
) {
  const search = document.querySelector(".search") as HTMLInputElement;
  if (str) {
    search.value = "";
  }
  if (getinputValue().length !== 0) {
    const button = document.createElement("button") as HTMLButtonElement;
    document.querySelector(".search__loupe")?.remove();
    button.classList.add("search__btn");
    button.textContent = "╳";
    const item = document.querySelector(".search__btn");
    if (item) {
      return;
    }
    search.after(button);
  } else {
    const span = document.createElement("span") as HTMLElement;
    document.querySelector(".search__btn")?.remove();
    span.classList.add("search__loupe");
    span.textContent = "🔎";
    search.after(span);
  }
}
