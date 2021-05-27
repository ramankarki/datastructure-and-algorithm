function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

let fac = factorial(process.argv[2]);
console.log(`Factorial of ${process.argv[2]} is ${fac}`);
