// Loglinear - O(n * log(n))

function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {}
  loglinear(n / 2);
  loglinear(n / 2);
}
