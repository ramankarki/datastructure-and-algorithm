function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function shiftDown(array, idx, endOfHeap) {
  let leftIdx = 2 * idx + 1;
  let rightIdx = 2 * idx + 2;
  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= endOfHeap) leftVal = -Infinity;
  if (rightIdx >= endOfHeap) rightVal = -Infinity;

  if (array[idx] > leftVal && array[idx] > rightVal) return;

  let swapIdx = leftVal > rightVal ? leftIdx : rightIdx;
  swap(array, idx, swapIdx);
  shiftDown(array, swapIdx, endOfHeap);
}

function heapSort(array) {
  // heapify
  for (let i = array.length - 1; i >= 0; i--) {
    shiftDown(array, i, array.length);
  }

  // mutate original heap array and sort
  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, 0, endOfHeap);
    shiftDown(array, 0, endOfHeap);
  }
}

let array = [7, 9, 6, 10, 20, 4, 8, 21, 0];
heapSort(array);
console.log(array);
