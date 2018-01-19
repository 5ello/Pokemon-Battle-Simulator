function Fight(){

    getAttacks.style.zIndex = 1;
    getStats.style.zIndex = 10;
    getPokemon.style.zIndex = 1;

    var aOne = document.getElementById('aOne');
    var aTwo = document.getElementById('aTwo');
    var aThree = document.getElementById('aThree');
    var aFour = document.getElementById('aFour');

    aOne.innerHTML = currentPokemon.m1;
    aTwo.innerHTML = currentPokemon.m2;
    aThree.innerHTML = currentPokemon.m3;
    aFour.innerHTML = currentPokemon.m4;
}

function dispOne(){

    getPP.innerHTML = 'PP:';
    getPPnumber.innerHTML = currentPokemon.ppc1 + "/" + currentPokemon.pp1;
    getType.innerHTML = 'Type:';
    getTypeText.innerHTML = currentPokemon.t1;
}

function dispTwo(){

    getPP.innerHTML = 'PP:';
    getPPnumber.innerHTML = currentPokemon.ppc2 + "/" + currentPokemon.pp2;
    getType.innerHTML = 'Type:';
    getTypeText.innerHTML = currentPokemon.t2;
}

function dispThree(){
    
    getPP.innerHTML = 'PP:';
    getPPnumber.innerHTML = currentPokemon.ppc3 + "/" + currentPokemon.pp3;
    getType.innerHTML = 'Type:';
    getTypeText.innerHTML = currentPokemon.t3;
}
    
function dispFour(){

    getPP.innerHTML = 'PP:';
    getPPnumber.innerHTML = currentPokemon.ppc4 + "/" + currentPokemon.pp4;
    getType.innerHTML = 'Type:';
    getTypeText.innerHTML = currentPokemon.t4;
}

function clear(){
    
    getPP.innerHTML = '';
    getPPnumber.innerHTML = '';
    getType.innerHTML = '';
    getTypeText.innerHTML = '';
}

function Item(){

    document.getElementById('dispText').innerHTML = "There are no items currently, might develop that in the future!";
}

function Pokemon(){
    clear();
    document.getElementById('dispText').innerHTML = "Chose a pokemon...";
    getStats.style.zIndex = 10;
    getPokemon.style.zIndex = 10;
}

function Run(){
    
    document.getElementById('dispText').innerHTML = "You can not run from this Fight!!!";    
}

function chosePokemon(Choice){
    
    document.getElementById('dispText').innerHTML = "What will you do?";    
    currentPokemon = Choice;
    tPokemon.src = pokemons[currentPokemon.imgNumber];
    tName.innerHTML = currentPokemon.name;
    getPokemon.style.zIndex = 1;
    getStats.style.zIndex = 1;
    myTurn = false;
}
