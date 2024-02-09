const heroes = [
    {
        id:1,
        name:'Iron Man',
        owner:'Marvel'
    },
    {
        id:2,
        name:'Spiderman',
        owner: 'Marvel'
    },
    {
        id:3,
        name:'Batman',
        owner:'DC Comics'
    }
];

const findHeroById = (id:number) =>{
    return heroes.find(hero => hero.id === id);
}

const hero = findHeroById(1);

console.log(hero?.name ?? 'hero not found');