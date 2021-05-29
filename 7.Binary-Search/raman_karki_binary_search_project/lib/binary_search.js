// with recursion

function binarySearch(array, target) {
  if (array.length < 1) return false;

  let midIndex = Math.trunc(array.length / 2);

  if (array[midIndex] === target) {
    return true;
  } else if (target < array[midIndex]) {
    return binarySearch(array.slice(0, midIndex), target);
  } else {
    return binarySearch(array.slice(midIndex + 1), target);
  }
}

// without recursion

function binarySearchIndex(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.trunc((leftIndex + rightIndex) / 2);

    if (array[midIndex] === target) {
      return midIndex;
    } else if (target < array[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}

module.exports = {
  binarySearch,
  binarySearchIndex,
};
