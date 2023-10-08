import getHeroeById from './bases/08-importaciones-exportaciones'

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('dos segundos despues')

        const heroe = getHeroeById(2);
        //console.log(heroe);

        resolve(heroe);
        reject('Ningun heroe atendio a tu llamado... GAME OVER');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('despues de la promesa', heroe)
})
.catch(err => console.log(err));*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('dos segundos despues')
    
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if (heroe) {
                resolve(heroe);    
            } else {
                reject('Ningun heroe atendio a tu llamado... GAME OVER');    
            }            
        }, 2000);
    });
}

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);