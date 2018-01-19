function Pokemon(name, type1, type2, HP, attack, defense, speed, imgNumber, m1, m2, m3, m4, t1, t2, t3, t4, pp1, pp2, pp3, pp4, acc1, acc2, acc3, acc4, pwr1, pwr2, pwr3, pwr4){
    this.name = name;
    this.type1 = type1;
    this.type2 = type2;
    this.HP = HP;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.imgNumber = imgNumber;

    //moves
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
    this.m4 = m4;

    //move types
    this.t1 = t1;
    this.t2 = t2;
    this.t3 = t3;
    this.t4 = t4;

    //pp cap
    this.pp1 = pp1;
    this.pp2 = pp2;
    this.pp3 = pp3;
    this.pp4 = pp4;

    //accuricy
    this.acc1 = acc1;
    this.acc2 = acc2;
    this.acc3 = acc3;
    this.acc4 = acc4;

    //power
    this.pwr1 = pwr1;
    this.pwr2 = pwr2;
    this.pwr3 = pwr3;
    this.pwr4 = pwr4;

    //pp counter
    this.ppc1 = pp1;
    this.ppc2 = pp2;
    this.ppc3 = pp3;
    this.ppc4 = pp4;

    //Current HP
    this.cHP = HP;
};
