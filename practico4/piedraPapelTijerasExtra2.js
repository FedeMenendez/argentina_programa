const readlineSync = require('readline-sync');
const ganaCompu = "Gana la computadora";
const ganaUsuario = "Gana el usuario";
const empate = "Empate";
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";
const opcion = [piedra , papel , tijeras];
const ganaPartidaComputadora = "El ganador de la partida es la computadora";
const ganaPartidaUsuario = "El ganador de la partida es el usuario";
const empatePartida = "La partida ha resultado empatada";
let puntosComputadora=0;
let puntosUsuario=0;

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
        puntosComputadora ++;
        return ganaCompu;
    }
    
    else if ( (jugadaCompu === "tijeras" && jugadaJugador === "piedra")||
    (jugadaCompu === "piedra" && jugadaJugador==="papel")||
    (jugadaCompu === "papel" && jugadaJugador === "tijeras")){
        puntosUsuario++
        return ganaUsuario;
    }
}

function determinarGanadorPartida (){
    if (puntosComputadora>puntosUsuario){
        return ganaPartidaComputadora;
    }
    else if (puntosComputadora==puntosUsuario){
        return empatePartida;
    }
    else{
        return ganaPartidaUsuario;
    }
}

let cantidadJugadas = readlineSync.question ("Ingrese la cantidad de veces que desea jugar: ")
while (!parseInt (cantidadJugadas)){
    cantidadJugadas = readlineSync.question ("El valor ingresado no es valido, ingrese un numero: ")
}

let jugadaComputadora;
let jugadaUsuario;
let resultado;

for (let i=0;i<cantidadJugadas;i++){
    jugadaComputadora = obtenerJugadaComputadora ();
    jugadaUsuario = obtenerJugadaUsuario(); 
    resultado = determinarGanador (jugadaComputadora,jugadaUsuario);
    console.log ("La computadora elgio: %s. El usuario eligio: %s.",jugadaComputadora,jugadaUsuario)
    console.log ("El resultado fue: %s.",resultado)
}
console.log (determinarGanadorPartida ());