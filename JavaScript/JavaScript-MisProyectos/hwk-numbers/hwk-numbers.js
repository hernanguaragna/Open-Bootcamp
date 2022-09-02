// - Una variable que contenga tu altura en centímetros (entero)

let alturaCm = 182;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaMetros = 1.82;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesoKg = 78.200;

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaRedondeada = Math.ceil(alturaMetros);
console.log(alturaRedondeada);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoRedondeado = Math.floor(pesoKg);
console.log(pesoRedondeado);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let maximoValorJs1 = Number.MAX_VALUE + 1;
console.log( maximoValorJs1 );
let minimoValorJs = (Number.MAX_VALUE)
console.log(minimoValorJs === maximoValorJs1);