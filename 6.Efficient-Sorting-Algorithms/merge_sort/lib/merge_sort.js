function merge(array1, array2) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (true) {
    if (leftIndex > array1.length - 1) {
      sortedArray.push(...array2.slice(rightIndex));
      return sortedArray;
    }
    if (rightIndex > array2.length - 1) {
      sortedArray.push(...array1.slice(leftIndex));
      return sortedArray;
    }

    if (array1[leftIndex] < array2[rightIndex]) {
      sortedArray.push(array1[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(array2[rightIndex]);
      rightIndex++;
    }
  }
}

function mergeSort(array) {
  let mid = Math.trunc(array.length / 2);
  if (mid === 0) return [...array];

  let leftArr = mergeSort(array.slice(0, mid));
  let rightArr = mergeSort(array.slice(mid));

  return merge(leftArr, rightArr);
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// let randomNums = [];

// for (let i = 0; i < 1000000; i++) {
//   randomNums.push(getRandomInt(0, 100000));
// }

// console.log("starting sorting...");
// let t0 = Date.now();
// mergeSort(randomNums);
// let t1 = Date.now();

// console.log(t1 - t0);

module.exports = {
  merge,
  mergeSort,
};
