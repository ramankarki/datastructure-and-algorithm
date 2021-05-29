function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      let tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;

      if (j > 1) j--;
    }
  }

  return arr;
}

console.log(insertionSort([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

module.exports = {
  insertionSort,
};
