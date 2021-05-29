function quickSort(array) {
  if (array.length <= 1) return array;

  let midValue = array[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (midValue < array[i]) leftArr.push(array[i]);
    else rightArr.push(array[i]);
  }

  return [...quickSort(leftArr), midValue, ...quickSort(rightArr)];
}

module.exports = {
  quickSort,
};
