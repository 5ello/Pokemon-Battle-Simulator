function Fight(){
    getTextBox.style.zIndex = 1;
    getStats.style.zIndex = 10;
    getPokemonMenu.style.zIndex = 1;

    var aOne = document.getElementById('aOne');
    var aTwo = document.getElementById('aTwo');
    var aThree = document.getElementById('aThree');
    var aFour = document.getElementById('aFour');

    aOne.innerHTML = currentPokemon.m1;
    aTwo.innerHTML = currentPokemon.m2;
    aThree.innerHTML = currentPokemon.m3;
    aFour.innerHTML = currentPokemon.m4;
}

// function displayStats(xxx, yyy, zzz){
//     console.log(currentPokemon.xxx +", "+yyy +", "+ zzz);
//     getPP.innerHTML = 'PP:';
//     getPPnumber.innerHTML = currentPokemon.xxx + "/" + currentPokemon.yyy;
//     getType.innerHTML = 'Type:';
//     getTypeText.innerHTML = currentPokemon.zzz;
// }

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
    message.innerHTML = "There are no items currently, might develop that in the future!";
}

function Run(){  
    message.innerHTML = "You can not run from this Fight!!!";    
}

function Pokemon(){
    clear();
    message.innerHTML = "Chose a pokemon...";
    getStats.style.zIndex = 10;
    getPokemonMenu.style.zIndex = 10;
}

function chosePokemon(Choice){
    
    message.innerHTML = "What will you do?";    
    currentPokemon = Choice;
    tPokemon.src = pokemons[currentPokemon.imgNumber];
    tName.innerHTML = currentPokemon.name;
    getPokemonMenu.style.zIndex = 1;
    getStats.style.zIndex = 1;
    myTurn = false;
}

function attackOne(){

    getTextBox.style.zIndex = 10;
    getStats.style.zIndex = 1;
    clear();

    if(currentPokemon.ppc1 != 0){
        currentPokemon.ppc1--;

        var totalDmg;
        var totalHP = currentWild.HP;
        var percentage;
        var decrease;
        var crit = Math.floor((Math.random() * 10) + 1);
        var dmg = 0;

        if(crit == 1 || crit == 2 || crit == 3)
            dmg = currentPokemon.attack * 2;
        else
            dmg = currentPokemon.attack;

        totalDmg = (dmg + currentPokemon.pwr1) - currentWild.defense;
        currentWild.cHP = currentWild.cHP - totalDmg;
        percentage = (currentWild.cHP/totalHP) * 100;
        decrease = 100 - percentage;

        attackRNG(currentPokemon.acc1, decrease, crit);
    }
    else
        message.innerHTML = "No more PP";//console.log("No more PP");
}

function attackRNG(RNG, decrease, crit){

    var accuracy = Math.floor((Math.random() * 10) + 1);
    var attk = false;
    console.log("RNG%: " + accuracy);
    for(var i = 1; i <= (RNG/10); i++){
        if(i == accuracy)
            attk = true;
    }

    if(attk == true){
        messageQueue.push("Attack hit!!!");

        if(crit == 1 || crit == 2 || crit == 3)
            messageQueue.push("Critical Attack!!!");
        //message.innerHTML = "Attack hit!!!";//console.log("Attack hit!!!");
        document.getElementById('pwBar').style.width = (enemyPokemonHPBar - decrease) + "px";
        if(currentWild.cHP <= 0){
            document.getElementById('pwBar').style.width = "0px";
            messageQueue.push("Enemy " + currentWild.name + " fainted!")
            //message.innerHTML = "Enemy " + currentWild.name + " fainted!";//console.log("Enemy " + currentWild.name + " fainted!");
        }
        dispNew();
    }
    else
        message.innerHTML = "Attack missed!!!";//console.log("Attack missed!!!");
}

function attackTwo(){
    currentPokemon.ppc2--;
}

function attackThree(){
    currentPokemon.ppc3--;
}

function attackFour(){
    currentPokemon.ppc4--;
}

function dispNew(){
    console.log("Clicked!!");
    console.log(messageQueue.length);

    if(messageQueue.length == 0){
        // console.log("Before: " + getStats.style.zIndex);
        // console.log("Before: " + getTextBox.style.zIndex);
        // console.log("Before: " + getPokemonMenu.style.zIndex);
        // getStats.style.zIndex == 10;
        // getTextBox.style.zIndex == 10;
        // getPokemonMenu.style.zIndex == 10;
        // console.log("After: " + getStats.style.zIndex);
        // console.log("After: " + getTextBox.style.zIndex);
        // console.log("After: " + getPokemonMenu.style.zIndex);
        message.innerHTML = "What will you do?";
    }
    else
        message.innerHTML = messageQueue.shift() + "";
        
}