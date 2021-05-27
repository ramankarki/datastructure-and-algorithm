function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

let fibo = fib(process.argv[2]);
console.log(`Factorial of ${process.argv[2]} is ${fibo}`);
