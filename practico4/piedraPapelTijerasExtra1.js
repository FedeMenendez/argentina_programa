const readlineSync = require('readline-sync');
const ganaCompu = "Gana la computadora";
const ganaUsuario = "Gana el usuario";
const empate = "Empate";
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";
const opcion = [piedra , papel , tijeras];

function obtenerJugadaComputadora (){
   let numero = Math.floor(Math.random () * 3)
   return opcion[numero];
}
function obtenerJugadaUsuario (){
    let jugada = readlineSync.question("ingrese su jugada, las jugadas posibles son piedra, papel y tijeras: ");
    while (jugada !== "papel" && jugada !== "piedra" && jugada!=="tijeras"){
        jugada = readlineSync.question("Su jugada es incorrecta, las jugadas posibles son piedra, papel y tijeras: ");
    }
    
    return jugada;
}
function determinarGanador (jugadaCompu,jugadaJugador){
    if (jugadaJugador == jugadaCompu){
        return empate;
    }
    else if ( (jugadaCompu === "piedra" && jugadaJugador === "tijeras")||
    (jugadaCompu === "papel" && jugadaJugador==="piedra")||
    (jugadaCompu === "tijeras" && jugadaJugador === "papel")){
        return ganaCompu;
    }
    
    else if ( (jugadaCompu === "tijeras" && jugadaJugador === "piedra")||
    (jugadaCompu === "piedra" && jugadaJugador==="papel")||
    (jugadaCompu === "papel" && jugadaJugador === "tijeras")){
        return ganaUsuario;
    }
}

let jugadaComputadora = obtenerJugadaComputadora ();
let jugadaUsuario = obtenerJugadaUsuario(); 
let resultado = determinarGanador (jugadaComputadora,jugadaUsuario);
console.log ("La computadora elgio: %s. El usuario eligio: %s.",jugadaComputadora,jugadaUsuario)
console.log ("El resultado fue: %s",resultado)

