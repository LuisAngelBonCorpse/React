const nombre = 'Luis';
const apellido = 'Durán';


const nombreCompleto = nombre + ' ' + apellido;

const nombreCompletoOtraOpcion = `
${nombre} ${apellido} ${1+1}
`;

console.log(nombreCompleto, nombreCompletoOtraOpcion);

function getSaludo(nombre) {
    return 'Que onda ' + nombre
}

console.log(`Texto random: ${getSaludo(nombre)}`);