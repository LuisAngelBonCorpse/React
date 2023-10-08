//Funciones en JS
function saludarMal(nombre) {
    return `Hola ${nombre}`
}

//saludarMal = 30;

console.log(saludarMal);

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('carnal'));
console.log(saludar);

const saludarFlecha = (nombre) => {
    return `Hola ${nombre}`;
}

const saludarFlechaCorta = (nombre) => `Hola ${nombre}`;

console.log(saludarFlecha('amigo'), saludarFlechaCorta('tu'));

const getUser = () => ({
    usd: 'BDC',
    username: 'BondableCorpse'
}); //va con parentesis si el return es objeto y no explicito

const user = getUser();
console.log(user);


//Actividad

function getUsuarioActivo(nombre) {
    return {
        uid: 'ACT',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Carlo');
console.log(usuarioActivo);

/*
1. Hacer la funcion en una funcion flecha 
2. Retornar objeto implicito (sin tener que colocar el return)
3. Probar
*/

const getUsuarioInactivo = (nombre) => ({
    uid: 'IACT',
    username: nombre
});

const usuarioInactivo = getUsuarioInactivo('Kevin');
console.log(usuarioInactivo);