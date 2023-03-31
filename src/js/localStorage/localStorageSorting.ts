export function addSortingInStorage(item: string) {
  localStorage.setItem("age and alphabet", item);
}

export function getSortingFromStorage(): string | null {
  const key: string | null = localStorage.getItem("age and alphabet");
  return key;
}
