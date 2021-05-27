// It uses loops not recursion
// It uses array to store data in table like structure

function fib(n) {
  let table = new Array(n);

  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(fib(6));
