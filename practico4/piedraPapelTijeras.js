function obtenerJugadaComputadora (){
    let numero = Math.floor(Math.random () * 3)
    let opcion = ["piedra" , "papel" , "tijeras"];
    return opcion[numero];
}
function obtenerJugadaUsuario (){
    const readlineSync = require('readline-sync');
    let jugada = readlineSync.question("ingrese su jugada, las jugadas posibles son piedra, papel y tijeras: ");
    while (jugada !== "papel" && jugada !== "piedra" && jugada!=="tijeras"){
        jugada = readlineSync.question("Su jugada es incorrecta, las jugadas posibles son piedra, papel y tijeras: ");
    }
    
    return jugada;
}
function determinarGanador (jugadaCompu,jugadaJugador){
    let ganador
    if (jugadaJugador == jugadaCompu){
        ganador = "empate";
        return ganador;
    }
    else if ( (jugadaCompu === "piedra" && jugadaJugador === "tijeras")||
    (jugadaCompu === "papel" && jugadaJugador==="piedra")||
    (jugadaCompu === "tijeras" && jugadaJugador === "papel")){
        ganador = "Gana la computadora";
        return ganador;
    }

    else if ( (jugadaCompu === "tijeras" && jugadaJugador === "piedra")||
    (jugadaCompu === "piedra" && jugadaJugador==="papel")||
    (jugadaCompu === "papel" && jugadaJugador === "tijeras")){
        ganador = "Gana el usuario";
        return ganador;
    }
}

let jugadaComputadora = obtenerJugadaComputadora ();
let jugadaUsuario = obtenerJugadaUsuario(); 
let resultado = determinarGanador (jugadaComputadora,jugadaUsuario);
console.log ("La computadora elgio: %s. El usuario eligio: %s.",jugadaComputadora,jugadaUsuario)
console.log ("El resultado fue: %s",resultado)