// ======================================
// InkLog Utils
// ======================================

// ランダムID
function createId(){

    return crypto.randomUUID();

}

// ======================================

// 今日の日付

function today(){

    return new Date().toISOString().split("T")[0];

}

// ======================================

// 現在日時

function now(){

    return new Date().toLocaleString("ja-JP");

}

// ======================================

// 数字を3桁区切り

function comma(number){

    return Number(number).toLocaleString("ja-JP");

}

// ======================================

// パーセント

function percent(value,total){

    if(total===0){

        return 0;

    }

    return ((value/total)*100).toFixed(1);

}

// ======================================

// 平均

function average(array){

    if(array.length===0){

        return 0;

    }

    return array.reduce(

        (a,b)=>a+b,

        0

    )/array.length;

}

// ======================================

// K/D

function calcKD(k,d){

    if(d===0){

        return k.toFixed(2);

    }

    return (k/d).toFixed(2);

}

// ======================================

// K+A/D

function calcKAD(k,a,d){

    if(d===0){

        return (k+a).toFixed(2);

    }

    return ((k+a)/d).toFixed(2);

}

// ======================================

// 日付フォーマット

function formatDate(date){

    return new Date(date).toLocaleDateString(

        "ja-JP",

        {

            year:"numeric",

            month:"2-digit",

            day:"2-digit"

        }

    );

}

// ======================================

// 時刻フォーマット

function formatTime(date){

    return new Date(date).toLocaleTimeString(

        "ja-JP",

        {

            hour:"2-digit",

            minute:"2-digit"

        }

    );

}

// ======================================

// 画像読み込み

function readImage(file){

    return new Promise(resolve=>{

        const reader=new FileReader();

        reader.onload=e=>{

            resolve(e.target.result);

        };

        reader.readAsDataURL(file);

    });

}

// ======================================

// ダウンロード

function download(filename,text){

    const a=document.createElement("a");

    a.href=URL.createObjectURL(

        new Blob(

            [text],

            {

                type:"application/json"

            }

        )

    );

    a.download=filename;

    a.click();

}

// ======================================

// JSON保存

function saveJson(name,data){

    download(

        name,

        JSON.stringify(

            data,

            null,

            2

        )

    );

}

// ======================================

// 深いコピー

function deepCopy(obj){

    return structuredClone(obj);

}

// ======================================

// スリープ

function sleep(ms){

    return new Promise(resolve=>{

        setTimeout(

            resolve,

            ms

        );

    });

}

// ======================================

// DOM取得

const $=(selector)=>{

    return document.querySelector(selector);

};

const $$=(selector)=>{

    return document.querySelectorAll(selector);

};

// ======================================

window.Utils={

    createId,

    today,

    now,

    comma,

    percent,

    average,

    calcKD,

    calcKAD,

    formatDate,

    formatTime,

    readImage,

    download,

    saveJson,

    deepCopy,

    sleep

};
