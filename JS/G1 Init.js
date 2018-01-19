var pokemons = [
    'https://cdn.bulbagarden.net/upload/6/60/Spr_b_4d_003_m.png', //Venu
    'https://cdn.bulbagarden.net/upload/f/f7/Spr_b_4d_006.png',   //Chari
    'https://cdn.bulbagarden.net/upload/8/89/Spr_b_4d_009.png',   //Blas
    'https://cdn.bulbagarden.net/upload/3/31/Spr_b_4d_025_m.png', //Pika
    'https://cdn.bulbagarden.net/upload/archive/9/94/20091107190858%21Spr_4h_144.png', //Arti
    'https://cdn.bulbagarden.net/upload/archive/5/5b/20091107201149%21Spr_4h_145.png', //Zapdo
    'https://cdn.bulbagarden.net/upload/archive/3/3c/20100501181515%21Spr_4d_146.png', //Molt
    'https://cdn.bulbagarden.net/upload/archive/5/53/20100501173542%21Spr_4d_150.png'  //Mew
];

var backgrounds = [
    'http://www.pokemontopaz.net/uploads/misc/battlecave.png',       //Cave
    'http://www.pokemontopaz.net/uploads/misc/battlegrass.png',      //Grass
    'http://www.pokemontopaz.net/uploads/misc/battlegrassnight.png', //Night
    'http://www.pokemontopaz.net/uploads/misc/battlewater.png'       //Water
];

var myTurn = true;
var getPP = document.getElementById('PP');
var getPPnumber = document.getElementById('ppAmount');
var getType = document.getElementById('Type');
var getTypeText = document.getElementById('typeText');
var backgrnd = document.getElementById('backgrnd');
var tPokemon = document.getElementById('tPokemon');
var tName = document.getElementById('pName');
var wPokemon = document.getElementById('wPokemon');
var wName = document.getElementById('pwName');
var getAttacks = document.getElementById('textDisplay');
var getStats = document.getElementById('stats');
var getPokemon = document.getElementById('pokemonMenu');
var enemyPokemonHPBar = document.getElementById('pwBar').offsetWidth;


var Venusaur = new Pokemon('Venusaur', 'Grass', 'Poison', 270, 152, 153, 148, 0, 'Hyper Beam', 'Petal Dance', 'Solarbeam', 'Double-Edge', 'Normal', 'Grass', 'Grass', 'Normal', 5, 10, 10, 15, 90, 100, 100, 100, 150, 120, 120, 120);
var Charizard = new Pokemon('Charizard', 'Fire', 'Flying', 266, 155, 144, 184, 1, 'Flamethrower', 'Fire Blast', 'Fly', 'Dragon Claw', 'Fire', 'Fire', 'Flying', 'Dragon', 15, 5, 15, 15, 100, 85, 95, 100, 90, 110, 90, 80);
var Blastoise = new Pokemon('Blastoise', 'Water', 'Null', 268, 153, 184, 144, 2, 'Hydro Pump', 'Aqua Tail', 'Ice Beam', 'Surf', 'Water', 'Water', 'Ice', 'Water', 5, 10, 10, 15, 80, 90, 100, 100, 110, 90, 90, 90);
var Pikachu = new Pokemon('Pikachu', 'Electric', 'Null', 260, 150, 140, 190, 3, 'Thunderbolt', 'Thunder', 'Wild Charge', 'Discharge', 'Electric', 'Electric', 'Electric', 'Electric', 15, 10, 15, 15, 100, 70, 100, 100, 90, 110, 90, 80);

var Articuno = new Pokemon('Articuno', 'Ice', 'Flying', 290, 157, 184, 157, 4, 'Ice Beam', 'Blizzard', 'Hurricane', 'Ice Shard', 'Ice', 'Ice', 'Normal', 'Ice', 10, 5, 10, 30, 100, 70, 70, 100, 90, 110, 110, 40);
var Zapdos = new Pokemon('Zapdos', 'Electric', 'Flying', 290, 166, 157, 185, 5, 'Zap Cannon', 'Thunder', 'Drill Peck', 'Discharge', 'Electric', 'Electric', 'Flying', 'Electric', 5, 10, 20, 15, 50, 70, 100, 100, 120, 110, 80, 80);
var Moltres = new Pokemon('Moltres', 'Fire', 'Flying', 290, 164, 166, 166, 6, 'Burn Up', 'Heat Wave', 'Flamethrower', 'Fire Spin', 'Fire', 'Fire', 'Fire', 'Fire', 5, 10, 15, 15, 50, 90, 100, 100, 130, 95, 90, 85);
var Mewtwo = new Pokemon('Mewtwo', 'Psychic', 'Null', 322, 202, 166, 238, 7, 'Psystrike', 'Future Sight', 'Psychic', 'Psyshock', 'Psychic', 'Psychic', 'Psychic', 'Psychic', 10, 10, 10, 10, 100, 100, 100, 100, 100, 120, 90, 80);

var currentPokemon = Pikachu;
var currentWild = Articuno;

backgrnd.src = backgrounds[3];
tPokemon.src = pokemons[3];
tName.innerHTML = "Pikachu";
wPokemon.src = pokemons[4];
wName.innerHTML = "Articuno";

tPokemon.src = pokemons[currentPokemon.imgNumber];
tName.innerHTML = currentPokemon.name;

wPokemon.src = pokemons[currentWild.imgNumber];
wName.innerHTML = currentWild.name;

document.getElementById('dispText').innerHTML = "What will you do?"; 