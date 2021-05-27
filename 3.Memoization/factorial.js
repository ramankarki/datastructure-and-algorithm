let memo = {};

function factorial(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return 1;
  let ans = n * factorial(n - 1);
  memo[n] = ans;
  return ans;
}

let fac = factorial(process.argv[2]);
console.log(`Factorial of ${process.argv[2]} is ${fac}`);

console.log(memo);
