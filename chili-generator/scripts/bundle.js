let places = ['Detroit', 'Kabul', 'Kingston', 'S:t Louis', 'Lagos', 'New Orleans', 'Baghdad', 'Guatemala City', 'Baltimore',
    'Tijuana', 'Acapulco', 'Johannesburg', 'Caracas', 'Chicago', 'Oakland', 'Cape Town', 'Karachi', 'Kiev', 'Nairobi',
    'Luanda', 'Benghazi', 'Damascus', 'Chernobyl', 'Port-au-Prince', 'Manila', 'Fukushima', 'Compton', 'Bronx', 'Nagoya',
    'Jakarta', 'Tokyo', 'Aleppo', 'Tripoli'];

let animals = ['scorpion', 'tiger', 'viper', 'anaconda', 'constrictor', 'black widow', 'hippo', 'great white', 'mamba', 'grizzly',
    'lion', 'box jellyfish', 'taranchula', 'funnel web spider', 'Komodo dragon', 'mosquito', 'tick', 'elephant', 'crocodile',
    'alligator', 'gorilla', 'wolf', 'moose', 'tiger shark', 'rattle snake', 'chupacabra', 'werewolf', 'rabid dog', 'dart frog',
    'dragon', 'fire ant', 'cobra', 'puma'];
function createChiliName() {
    let city = places[getRandomInt()];
    let animal = animals[getRandomInt()];
    let chili = `${city} ${animal}`;
    document.getElementById("name").innerHTML = chili;
    console.log(chili);
}

function getRandomInt() {
    return Math.floor(Math.random() * 33);
}