function swap(array, idx1, idx2) {
  let tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;

  return array;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minNumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minNumIndex]) {
        minNumIndex = j;
      }
    }

    swap(arr, i, minNumIndex);
  }
  return arr;
}

module.exports = {
  selectionSort,
  swap,
};
