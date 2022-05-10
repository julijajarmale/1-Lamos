//MASYVAI
'use strict';

const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];

console.table(n);

console.log(n[1]);

n[1] = 'Kazys'; //ikelti nauja nari PAKEICIANT kita;
//n[8] = 'Suo Sarikas'

//n.pop(); // ismeta paskutini elementa;

//n.shift(); // ismeta pirma elementa;


n.push('Suo Sarikas') //Naudoti sita visada, kai reikia priskirti nauja nari i masyva;

n.unshift('Pele')  // ikelti i pirma nari, paliekant kitus, kiti juda auksciau;

n.splice(2, 1);


console.table(n);
console.log(n.length);

//Masyvas yra objektas, sukonktretintas objektas yra Array;

for (let i = 0; i < n.length; i++){

    console.log(n[i]); // i -indexas 0, 1, 2...

}

const nPlus = [
    [4, 7, 12],
    [85, 17, 12],
    [10, 33, 74],
    [26, 41, 99],
]

console.table(nPlus);
console.log(nPlus[3][0]);

for (let i = 0; i < nPlus.length; i++){
    
    for (let k = 0; k < nPlus[i].length; k++){
        console.log(nPlus[i][k]);
    }

    
}

/*nPlus.forEach (m => {
    m.forEach(k => console.log(k))
}); */

// nPlus.forEach(m => m.forEach(k => console.log(k)));

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}



const naujasNamas = [];

for (let i = 0; i < 100; i++){
    const aukstas = [];
    for (let k = 0; k < 100; k++){
    aukstas.push(rand(10, 99));
}
    naujasNamas.push(aukstas);
}

console.table(naujasNamas);