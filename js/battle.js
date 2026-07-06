// ======================================
// Battle Data Template
// ======================================

function createBattleData(){

    return{

        id:Utils.createId(),

        date:"",

        time:"",

        season:"",

        mode:"",

        rule:"",

        stage:"",

        weapon:"",

        weaponImage:"",

        sub:"",

        subImage:"",

        special:"",

        specialImage:"",

        result:"",

        knockout:false,

        rank:"",

        xp:0,

        kill:0,

        assist:0,

        death:0,

        specialCount:0,

        paint:0,

        medal1:"",

        medal2:"",

        medal3:"",

        gearHead:"",

        gearClothes:"",

        gearShoes:"",

        ticket:"",

        food:"",

        drink:"",

        image:"",

        favorite:false,

        note:"",

        createdAt:new Date().toISOString()

    };

}
