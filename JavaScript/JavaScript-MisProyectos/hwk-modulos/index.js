import { suma, multiplicar } from "./controller.js";
import chalk from "chalk";

const mult = multiplicar(1, 2);
console.log(chalk.green(mult));

const sum = suma(4, 5);
console.log(chalk.green(sum));
