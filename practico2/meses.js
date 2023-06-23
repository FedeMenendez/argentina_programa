const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero del 1 al 12: ");
let meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];
console.log ("La cantidad de dias de "+ meses [numero-1]+" es "+ diasMeses [numero-1]);
