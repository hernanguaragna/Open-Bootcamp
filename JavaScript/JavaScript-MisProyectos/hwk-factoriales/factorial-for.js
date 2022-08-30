//factorial con bucle for
function factorialize(num) {
  if (num === 0 || num === 1)
  return 1;

  for (var i = num - 1; i >= 1; i--) {
    num = num * i; // o num *= i;
  }
  return num;
}

//console.log(factorialize(10));
factorialize(10);
