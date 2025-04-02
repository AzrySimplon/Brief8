function showArray(array) {
    console.log(array);
    array.forEach(element => {
        console.log(element.name)
    });
}

const heroes = [
    { name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false },
    { name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true },
    { name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true },
    { name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false },
    { name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true },
    { name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true },
    { name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false },
    { name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true }
];

//Challenge 1
const activeHeroes = heroes.filter((hero) => hero.isActive === true);
showArray(activeHeroes);

//Challenge 2
const marvelHeroes = heroes.filter((hero) => hero.universe == "Marvel");
showArray(marvelHeroes);

//Challenge 3
const alienHeroes = heroes.filter((hero) => hero.isAlien === true);
showArray(alienHeroes);

//Challenge 4
const powerHeroes = heroes.filter((hero) => hero.power >= 90);
showArray(powerHeroes);

//Challenge 5
const humanAndActiveHeroes = heroes.filter((hero) => !hero.isAlien && hero.isActive);
showArray(humanAndActiveHeroes);

//Challenge 6
const activeAndDcAndPowerHeroes = heroes.filter((hero) => hero.universe === "DC" && hero.isActive && hero.power >= 85);
showArray(activeAndDcAndPowerHeroes);

//Challenge 7
const inactiveAndHumanHeroes = heroes.filter((hero) => !hero.isAlien && !hero.isActive);
showArray(inactiveAndHumanHeroes);

//Challenge 8
const manHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes("man"));
showArray(manHeroes);

//Challenge 9
const oddHeroes = heroes.filter((hero) => hero.power % 2 !== 0);
showArray(oddHeroes);

//Challenge 10
// 👉 Récupère les **héros dont le nom fait plus de 10 caractères**.
const longNameHeroes = heroes.filter((hero) => hero.name.length > 10);
showArray(longNameHeroes);