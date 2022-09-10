const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ],
});



const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble = miFuncion("a1a")
const numero = "2";

try {
    // Código que puede fallar
    logger.log("Pasò el TRY")
    const doble = miFuncion(numero)
    logger.log(doble)
} catch (e) {
   
    logger.error("ERROR lo atrapó el catch!!")
} 