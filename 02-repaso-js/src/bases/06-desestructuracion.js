// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Sanji',
    edad: 21,
    clave: 'Pierna negra'
};

console.log(persona.nombre, persona.edad, persona.clave);

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);

const retornaPersona = ({ nombre, edad, puesto = 'cocinero' }) => { //si tiene valor, lo mantiene y si no toma el valor por defecto
    console.log(nombre, edad, puesto);
};

retornaPersona(persona);

const usarContexto = ({ nombre, clave, edad }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 120202,
            lng: -524112
        }
    }
};

//const nakama = usarContexto (persona);
const {nombreClave, anios, latlng:{lat, lng}} = usarContexto (persona);
console.log(nombreClave, anios);
console.log(lat, lng);


