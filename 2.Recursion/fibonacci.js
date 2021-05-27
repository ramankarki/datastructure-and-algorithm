function fib(n) {
  if (n <= 1 || n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

let fibo = fib(process.argv[2]);
console.log(`Factorial of ${process.argv[2]} is ${fibo}`);
