const activo = true;

/*
let mensaje = '';
if (activo) {
    mensaje = 'Activo';
} else{
    mensaje = 'Inactivo';
}*/ //metodo tradicional

const mensaje = activo ? 'Activo' : 'Inactivo'; //siempre espera las dos opciones, la segunda puede ser null o la alternativa es...

const mensajeIf = activo && 'Activo como if'; //sin el operador terneario

console.log(mensaje, mensajeIf);
