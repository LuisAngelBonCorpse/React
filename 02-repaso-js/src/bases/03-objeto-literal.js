const persona = {
    nombre: 'Zoro',
    apellido: 'Roronoa',
    edad: 21,
    direccion:{
        ciudad: 'Egg Head',
        zip: 10450,
        lat: 14.2552,
        log: 15.2525,
    }
};

console.log(persona.nombre, persona.apellido, persona.edad);

console.table(persona);

console.table(persona.direccion);


const persona2 = persona; //Esto no se debe de realizar ya que se esta copiando la referencia y ocaciona errores
persona2.nombre = 'Sanji';

console.log(persona2);
console.log(persona);

const persona3 = {...persona}; // asi se debe de clonar
persona3.nombre = 'Jimbe';

console.log(persona3);
console.log(persona);



