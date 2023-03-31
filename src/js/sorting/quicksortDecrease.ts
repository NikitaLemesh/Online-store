import { Game } from "../interfaces";

function swap(arr: Game[], firstItem: number, secondItem: number) {
  const temp = arr[firstItem];
  arr[firstItem] = arr[secondItem];
  arr[secondItem] = temp;
}

function partition(arr: Game[], low: number, hi: number) {
  const pivot = arr[Math.floor((hi + low) / 2)];
  const pivotName: string = pivot.gameName.name;
  while (low <= hi) {
    while (arr[low].gameName.name > pivotName) {
      low++;
    }

    while (arr[hi].gameName.name < pivotName) {
      hi--;
    }

    if (low <= hi) {
      swap(arr, low, hi);
      low++;
      hi--;
    }
  }
  return low;
}

export default function quicksortDecrease(
  arr: Game[],
  low = 0,
  hi = arr.length - 1
) {
  if (low < hi) {
    const index = partition(arr, low, hi);
    quicksortDecrease(arr, low, index - 1);
    quicksortDecrease(arr, index, hi);
  }
  return arr;
}
