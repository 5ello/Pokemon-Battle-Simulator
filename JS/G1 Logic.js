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

function displayStats(Move){
    clear();
    var PPC, PP, T;
    switch(Move){
        case 1: PPC = currentPokemon.ppc1; PP = currentPokemon.pp1; T = currentPokemon.t1; break;
        case 2: PPC = currentPokemon.ppc2; PP = currentPokemon.pp2; T = currentPokemon.t2; break;
        case 3: PPC = currentPokemon.ppc3; PP = currentPokemon.pp3; T = currentPokemon.t3; break;
        case 4: PPC = currentPokemon.ppc4; PP = currentPokemon.pp4; T = currentPokemon.t4; break;
    }
    getPP.innerHTML = 'PP:';
    getPPnumber.innerHTML = PPC + "/" + PP;
    getType.innerHTML = 'Type:';
    getTypeText.innerHTML = T;
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
    currentPokemon = Choice;
    if(currentPokemon.cHP > 0){
        fainted = false;
        wMessageQueue.push("GO " + currentPokemon.name + "!");
        tPokemon.src = pokemons[currentPokemon.imgNumber];
        tName.innerHTML = currentPokemon.name;
        getPokemonMenu.style.zIndex = 1;
        getStats.style.zIndex = 1;
        enemyAttack();
    }
}

function attack(Attack){
    getTextBox.style.zIndex = 10;
    getStats.style.zIndex = 1;
    clear();

    var PPC, PWR, Move, ACC;
    switch(Attack){
        case 1: Move = currentPokemon.m1; ACC = currentPokemon.acc1; PPC = currentPokemon.ppc1; PWR = currentPokemon.pwr1; break;
        case 2: Move = currentPokemon.m2; ACC = currentPokemon.acc2; PPC = currentPokemon.ppc2; PWR = currentPokemon.pwr2; break;
        case 3: Move = currentPokemon.m3; ACC = currentPokemon.acc3; PPC = currentPokemon.ppc3; PWR = currentPokemon.pwr3; break;
        case 4: Move = currentPokemon.m4; ACC = currentPokemon.acc4; PPC = currentPokemon.ppc4; PWR = currentPokemon.pwr4; break;
    }

    if(PPC != 0){
        switch(Attack){ case 1: PPC = currentPokemon.ppc1--; break; case 2: PPC = currentPokemon.ppc2--; break; case 3: PPC = currentPokemon.ppc3--; break; case 4: PPC = currentPokemon.ppc4--; break;}

        var totalDmg, percentage, decrease, dmg;
        var totalHP = currentWild.HP;
        var crit = Math.floor((Math.random() * 10) + 1);

        if(crit == 1 || crit == 2 || crit == 3)
            dmg = currentPokemon.attack * 2;
        else
            dmg = currentPokemon.attack;

        totalDmg = (dmg + PWR) - currentWild.defense;
        currentWild.cHP = currentWild.cHP - totalDmg;
        percentage = (currentWild.cHP/totalHP) * 100;
        decrease = 100 - percentage;

        messageQueue.push(currentPokemon.name + " used " + Move + "!");

        var accuracy = Math.floor((Math.random() * 10) + 1);
        var attk = false;
        
        for(var i = 1; i <= (ACC/10); i++){
            if(i == accuracy)
                attk = true;
        }

        if(attk == true){
            messageQueue.push("Attack hit!!!");

            if(crit == 1 || crit == 2 || crit == 3)
                messageQueue.push("Critical Attack!!!");
            document.getElementById('pwBar').style.width = (enemyPokemonHPBar - decrease) + "px";
            if(currentWild.cHP <= 0){
                document.getElementById('pwBar').style.width = "0px";
                messageQueue.push("Enemy " + currentWild.name + " fainted!")
            }
            dispNew();
        }
        else
            message.innerHTML = "Attack missed!!!";

        enemyAttacked = false;
    }
    else
        message.innerHTML = "No more PP";

}

function enemyAttack(){
    
    myTurn = false;

    if(currentWild.cHP <= 0){
        Stages++;
        nextStage();
        myTurn = true;
        enemyAttacked = true;
    }
    else{

        var wAttack = Math.floor((Math.random() * 4) + 1);
        var move, ACC, PWR;

        switch(wAttack){
            case 1: move = currentWild.m1; ACC = currentWild.acc1; PWR = currentWild.pwr1; break;
            case 2: move = currentWild.m2; ACC = currentWild.acc2; PWR = currentWild.pwr2; break;
            case 3: move = currentWild.m3; ACC = currentWild.acc3; PWR = currentWild.pwr3; break;
            case 4: move = currentWild.m4; ACC = currentWild.acc4; PWR = currentWild.pwr4; break;
        }

        var totalDmg, percentage, decrease, dmg, attk = false;
        var totalHP = currentWild.HP;
        var accuracy = Math.floor((Math.random() * 10) + 1);
        var crit = Math.floor((Math.random() * 10) + 1);

        for(var i = 1; i <= (ACC/10); i++){
            if(i == accuracy)
                attk = true;
        }

        if(crit == 1 || crit == 2 || crit == 3)
            dmg = currentWild.attack * 2;
        else
            dmg = currentWild.attack;

        totalDmg = (dmg + PWR) - currentPokemon.defense;
        currentPokemon.cHP = currentPokemon.cHP - totalDmg;
        percentage = (currentPokemon.cHP/totalHP) * 100;
        decrease = 100 - percentage;

        if(attk == true){
            wMessageQueue.push("Enemy " + currentWild.name + " used " + move + "!");
            wMessageQueue.push("Enemy " + currentWild.name + "'s attack hit!!!");

            if(crit == 1 || crit == 2 || crit == 3)
                wMessageQueue.push("Critical Attack!!!");
            document.getElementById('pBar').style.width = (myPokemonHPBar - decrease) + "px";
            
            if(currentPokemon.cHP <= 0){
                document.getElementById('pBar').style.width = "0px";
                wMessageQueue.push("Oh no, " + currentPokemon.name + " fainted!")
                fainted = true;
            }
        }
        else
            message.innerHTML = "Enemy " + currentWild.name + " attack missed!!!";

        enemyAttacked = true;
        dispNew();

    }
}

function dispNew(){
    if(myTurn == true){
        if(messageQueue.length == 0){
            if(enemyAttacked == true)
                message.innerHTML = "What will " + currentPokemon.name + " do?";
            else
                enemyAttack();
        }   
        else
            message.innerHTML = messageQueue.shift() + "";   
    } 
    else{
        if(wMessageQueue.length == 0){
            if(fainted == true)
                Pokemon();

            myTurn = true;
        }
        else
            message.innerHTML = wMessageQueue.shift() + "";  
    }

    console.log("Turn: " + myTurn);
    console.log("Enemy Attack: " + enemyAttacked);
    console.log("My Queue: " + messageQueue.length);
    console.log("Enemy Queue: " + wMessageQueue.length);
}