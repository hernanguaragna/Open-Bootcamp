// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function generarFibonacci(num) {
    let Fibonacci = []
    Fibonacci[0]= 0;
    Fibonacci[1]= 1;
    for (let i = 2; i < num; i++) {
        Fibonacci[i]= Fibonacci [i-2]+ Fibonacci[i-1];
}
return Fibonacci;
}
let fibo = generarFibonacci(10)
console.log(fibo)