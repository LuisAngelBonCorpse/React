//export default [ //esta manera no es comveniente xq no sabemos de q es el arreglo al no tener nombre

const heroes = [
{
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//export const owners = ['DC', 'Marvel']; es una forma de exportar individualmente

const owners = ['DC', 'Marvel'];


export{
    heroes as default,
    owners
} 