export function addTypeInStorage(item: string) {
  localStorage.setItem("type", item);
}

export function getTypeFromStorage(): string | null {
  const key: string | null = localStorage.getItem("type");
  return key;
}
