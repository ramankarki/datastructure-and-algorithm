// Bit manipulation question
function singleNumber(nums) {
  let result = 0;
  for (let n of nums) {
    result ^= n;
  }
  return result;
}

console.log(singleNumber([9, 4, 1, 4, 2, 2, 1]));
