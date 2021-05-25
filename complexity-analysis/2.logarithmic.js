// Logarithmic - O(log(n))

function logarithmic(n) {
  if (n <= 1) return;
  logarithmic(n / 2);
}

// logarithmic(8)
//     ||
// logarithmic(4)
//     ||
// logarithmic(2)
//     ||
// logarithmic(1)

// log (2) 8 = 4
