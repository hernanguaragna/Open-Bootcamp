//Labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El nùmero actual es ${decenas}${unidades}`);
    unidades++;

    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }

    if (decenas == 2) {
      console.log(`El nùmero actual es ${decenas}${unidades}`);
      break bucleDecenas;
    }
  }
  decenas++;
}
