function swap(array, idx1, idx2) {
  let tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;

  return array;
}

function bubbleSort(array) {
  let copyArray = [...array];
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 1; i < copyArray.length; i++) {
      if (copyArray[i - 1] > copyArray[i]) {
        swap(copyArray, i - 1, i);
        swapped = true;
      }
    }
  }

  return copyArray;
}

console.log(bubbleSort([2, -1, 4, 3, 7, 3]));

module.exports = {
  bubbleSort,
  swap,
};
