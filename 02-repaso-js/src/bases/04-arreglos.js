//Arreglos en JS

const arregloDeCien = new Array(100); //los arreglos de esta manera tienen espacios predeterminados, pero no son fijos, se puede aumentar o disminuir
//no se recomienda usar push, porque se modifica el objeto arreglo de JS

console.log(arregloDeCien);

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5]; //Se adiciona el operador ... para clonar los datos del primer arreglo


console.log(arreglo, arreglo2);

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log(arreglo3);