//MASYVAI

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