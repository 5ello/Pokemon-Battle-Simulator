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
    'http://www.pokemontopaz.net/uploads/misc/battlewater.png',       //Water
    'http://www.pokemontopaz.net/uploads/misc/battlecave.png',        //Cave
    'http://www.pokemontopaz.net/uploads/misc/battlegrass.png',       //Grass
    'http://www.pokemontopaz.net/uploads/misc/battlegrassnight.png'   //Night
];

var myTurn = true; //Variable to manipulate turns.
var getPP = document.getElementById('PP'); //Fetches the text area to display the amount of total PP of a pokemon.
var getPPnumber = document.getElementById('ppAmount');  //Fetches the text area to display the amount of PP left.
var getType = document.getElementById('Type');  //Fetches the text area to display the Type.
var getTypeText = document.getElementById('typeText'); //Fetches the text area to display the type of the move hovered over.
var backgrnd = document.getElementById('backgrnd'); //Fetches the img that displays the battle background.
var tPokemon = document.getElementById('tPokemon'); //Fetches the div that holds the immage of the Trainer pokemon.
var wPokemon = document.getElementById('wPokemon'); //Fetches the div that holds the immage of the Wild pokemon.
var tName = document.getElementById('pName'); //Fetches the text that holds the name of the Trainer pokemon.
var wName = document.getElementById('pwName'); //Fetches the text that holds the name of the Wild pokemon.
var getTextBox = document.getElementById('textDisplay'); //Div that displays Messages.
var getStats = document.getElementById('stats'); //Div that displays the stats of pokemon moves.
var getPokemonMenu = document.getElementById('pokemonMenu'); //Fetches the img that displays the pokemon Menu.
var enemyPokemonHPBar = document.getElementById('pwBar').offsetWidth; //HP bar of the wild pokemon.
var myPokemonHPBar = document.getElementById('pBar').offsetWidth; //HP bar of my pokemon.
var message = document.getElementById('dispText'); //This is the text that is displayed after every move.
var messageQueue = []; //A queue to manage message order to be displayed on the screen.
var wMessageQueue = []; //Message queue for enemy pokemon.
var enemyAttacked = false; //Boolean variable to check if the enemy attacked or not.
var enemyNotAttacked = true;
var Stages = 1; //Keeps track of current stages.
var fainted = false;

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

function turnDet(){
    if(currentPokemon.speed > currentWild.speed)
        myTurn = true;
    else
        myTurn = false;
}

function nextStage(){

    switch(Stages){
        case 1: currentWild = Articuno; break;
        case 2: currentWild = Zapdos; break;
        case 3: currentWild = Moltres; break;
        case 4: currentWild = Mewtwo; break;
    }
    backgrnd.src = backgrounds[Stages - 1];

    wPokemon.src = pokemons[currentWild.imgNumber];
    wName.innerHTML = currentWild.name;

    Venusaur.cHP = Venusaur.HP;
    Charizard.cHP = Charizard.HP;
    Blastoise.cHP = Blastoise.HP;
    Pikachu.cHP = Pikachu.HP;
    currentWild.cHP = currentWild.HP;

    document.getElementById('pwBar').style.width = 120 + "px";
    document.getElementById('pBar').style.width = 120 + "px";
}

tPokemon.src = pokemons[currentPokemon.imgNumber];
tName.innerHTML = currentPokemon.name;

nextStage();
turnDet();

console.log("My Pokemon speed: " + currentPokemon.speed);
console.log("Wild Pokemon speed: " + currentWild.speed);

message.innerHTML = "What will " + currentPokemon.name + " do?";