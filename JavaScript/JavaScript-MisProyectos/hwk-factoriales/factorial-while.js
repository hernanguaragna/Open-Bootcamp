// factorial de 10 con bucle while.
function factor(num) {
  let result = num;

  if (num === 0 || num === 1) return 1;

  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}

//console.log(factor(10));
factor(10);
