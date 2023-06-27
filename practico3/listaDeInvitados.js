let listaDePersonas = ["Jose", "Maria", "Juan", "Andres", "Lionel","Sofia", "Leandro","Emilia"];
let listaDeAdmitidos=[];
let listaDeRechazados=[];
for (let i=0;i<listaDePersonas.length;i++){
    if (listaDePersonas[i] === "Sofia" || listaDePersonas[i]=== "Jose"){
        listaDeRechazados.push(listaDePersonas[i]);
    }
    else{
        listaDeAdmitidos.push(listaDePersonas[i]);
    }
}
console.log ("La lista de invitados admitidos es: ");
for (i=0;i<listaDeAdmitidos.length;i++){
    console.log(listaDeAdmitidos[i]);
}
console.log ("La lista de invitados rechazados es: ");
for (i=0;i<listaDeRechazados.length;i++){
    console.log(listaDeRechazados[i]);
}
listaDeAdmitidos.sort ();
console.log ("La lista ordenada de invitados admitidos es:");
for (i=0;i<listaDeAdmitidos.length;i++){
    console.log(listaDeAdmitidos[i]);
}

listaDeRechazados.sort ();
console.log ("La lista ordenada de invitados rechazados es:");
for (i=0;i<listaDeRechazados.length;i++){
    console.log(listaDeRechazados[i]);
}