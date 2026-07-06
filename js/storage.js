// =====================================
// InkLog Storage
// IndexedDB
// =====================================

const DB_NAME = "InkLogDB";

const DB_VERSION = 1;

const STORE_BATTLES = "battles";

const STORE_SETTINGS = "settings";

const STORE_IMAGES = "images";

let db = null;

// =====================================

function openDatabase(){

    return new Promise((resolve,reject)=>{

        const request = indexedDB.open(

            DB_NAME,

            DB_VERSION

        );

        request.onupgradeneeded = e=>{

            db = e.target.result;

            if(!db.objectStoreNames.contains(STORE_BATTLES)){

                db.createObjectStore(

                    STORE_BATTLES,

                    {

                        keyPath:"id",

                        autoIncrement:true

                    }

                );

            }

            if(!db.objectStoreNames.contains(STORE_SETTINGS)){

                db.createObjectStore(

                    STORE_SETTINGS,

                    {

                        keyPath:"key"

                    }

                );

            }

            if(!db.objectStoreNames.contains(STORE_IMAGES)){

                db.createObjectStore(

                    STORE_IMAGES,

                    {

                        keyPath:"id",

                        autoIncrement:true

                    }

                );

            }

        };

        request.onsuccess = e=>{

            db = e.target.result;

            console.log("IndexedDB Connected");

            resolve(db);

        };

        request.onerror = ()=>{

            reject(request.error);

        };

    });

}

// =====================================

function getStore(name,mode="readonly"){

    const tx = db.transaction(

        name,

        mode

    );

    return tx.objectStore(name);

}

// =====================================

async function saveBattle(data){

    return new Promise(resolve=>{

        getStore(

            STORE_BATTLES,

            "readwrite"

        ).add(data).onsuccess=()=>{

            resolve(true);

        };

    });

}

// =====================================

async function getBattles(){

    return new Promise(resolve=>{

        getStore(

            STORE_BATTLES

        ).getAll().onsuccess=e=>{

            resolve(e.target.result);

        };

    });

}

// =====================================

async function deleteBattle(id){

    return new Promise(resolve=>{

        getStore(

            STORE_BATTLES,

            "readwrite"

        ).delete(id).onsuccess=()=>{

            resolve(true);

        };

    });

}

// =====================================

async function updateBattle(data){

    return new Promise(resolve=>{

        getStore(

            STORE_BATTLES,

            "readwrite"

        ).put(data).onsuccess=()=>{

            resolve(true);

        };

    });

}

// =====================================

window.Storage={

    openDatabase,

    saveBattle,

    getBattles,

    deleteBattle,

    updateBattle

};
