// Linear - O(n)

function linear_1(n) {
  for (let i = 1; i <= n; i++) {}
}

function linear_2(n) {
  if (n === 1) return;
  linear_2(n - 1);
}

// linear_2(10) => linear_2(9) ... linear_2(1);
