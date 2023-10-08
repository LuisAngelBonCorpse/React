const personajes = ['Lufy', 'Oden', 'Gold'];

//const [Nakama1] = personajes; es la posicion 1
const [, Nakama1] = personajes; //posicion 2
//const [,,Nakama1] = personajes; //posicion 3 y asi sucesivamente, no es muy comodo para arreglos muy largos


console.log(Nakama1);


const retornaArreglo = () => {
    return ['ABC', 125];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


/*const usarEstado = (valor) => {
    return [valor, () => { console.log('llamado de funcion') }];
}

const arreglo = usarEstado('Luffy');

console.log(arreglo);

console.log(arreglo[1]);
console.log(arreglo[0]); 

Este tipo de llamado no es tan legible
*/

const usarEstado = (valor) => {
    return [valor, () => { console.log('llamado de funcion') }];
}

const [nombre, setNombre] = usarEstado('Luffy');

console.log(nombre);
setNombre();