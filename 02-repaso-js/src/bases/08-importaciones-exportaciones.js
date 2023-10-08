//import {heroes} from './data/heroes'; //imp 
import heroes, {owners} from '../data/heroes'


const getHeroeById = (id) =>{
    return heroes.find((heroe) => heroe.id === id);
}

//console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>  heroes.filter(heroe => heroe.owner === owner);

//console.log(owners);

//console.log(getHeroeByOwner('DC'));

//console.log(getHeroeByOwner('Marvel'));

const heroesDC = getHeroeByOwner(owners[0]);
const heroesMarvel = getHeroeByOwner(owners[1]);

export {
    getHeroeById as default,
    getHeroeByOwner,
    heroesDC,
    heroesMarvel
}