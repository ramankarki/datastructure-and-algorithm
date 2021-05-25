// Constant complexity - O(1)

function constant_1(n) {
  return n * 2 + 1; // T(2) -> O(1)
}

function constant_2(n) {
  for (let i = 1; i <= 100; i++) {} // T(1) -> 0(1)
}
