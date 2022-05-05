/*1.Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines
 reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()*/
console.log('----------1 UZDAVINYS-----------')
let a = Math.floor(Math.random() * 5)
let b = Math.floor(Math.random() * 5)
console.log(a)
console.log(b)

 const dalmuo = (a,b)
 
  if (a > b) {
      console.log(a / b);
  }

  if (b > a) {
      console.log(b / a);
  }

  if (a===b) {
    console.log('skaiciai yra lygus');
  }

/*2.Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines 
reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.*/
console.log('---------2 UZDAVINYS-----------')
    let c = Math.floor(Math.random() * 26)
    let d = Math.floor(Math.random() * 26)
    let e = Math.floor(Math.random() * 26)
    
    const cde = [c, d, e]
    console.log(cde)
  
  if ((c < d) && (c > e) || (c < e) && (c > d) ){
    console.log(`${c} yra vidurines reiksmes skaicius`)
  } 
  if ((d < c) && (d > e) || (d < e) && (d > c) ){
    console.log(`${d} yra vidurines reiksmes skaicius`)
  } 
  if ((e < c) && (e > d) || (e < d) && (e > c) ){
    console.log(`${e} yra vidurines reiksmes skaicius`)
  } 

  if(c === d || c === e || d === e  ){
    console.log('Nera vidurines reiksmes skaiciaus')
  }
 

/*3.Įvedami skaičiai -f, g, h –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). 
 Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). */
 console.log('----------3 UZDAVINYS-----------')
 let f = Math.floor(Math.random() * 10) + 1;
 let g = Math.floor(Math.random() * 10) + 1;
 let h = Math.floor(Math.random() * 10) + 1;
 console.log(f)
 console.log(g)
 console.log(h)

 if (f + g >= h || f + h >= g || g + h >= f){
   console.log(`trikampi sudaryti galima`)
 }
   else {
     console.log(`trikampio sudaryti negalima`)

   }


/*4.Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()*/
console.log('----------4 UZDAVINYS-----------')
let j = Math.floor(Math.random() *  3)
let k = Math.floor(Math.random() *  3)
let l = Math.floor(Math.random() *  3)
let m = Math.floor(Math.random() *  3)

const jklm = [j,k,l,m]
console.log(jklm)
const map = jklm.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(map);

/* 5.Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10.
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite
 “-” simbolius, o prie 0 “*” simbolius*/
 console.log('----------5 UZDAVINYS-----------')
 
  function random(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
 }
 
 for (let i = 0; i < 3; i++) {
  let value = random(-10,10)

    if (value<0){
      console.log(`+${value}+`)
    }
    if (value>0){
      console.log(`"${value}"`)
    }
    if (value===0){
      console.log(`*${value}*`)
    }
  }
  console.log('---------------------')
 

/* 6.Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000   - 4 %
 nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia 
 kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.*/
 console.log('----------6 UZDAVINYS-----------')

 let zvakiuKiekis = random(5,3000)
    console.log (zvakiuKiekis)
    
 let zvakesKaina = 1

 if (zvakiuKiekis >= 1000 && zvakiuKiekis < 2000) {
   zvakesKaina = zvakiuKiekis - (zvakiuKiekis * 0.03)
   console.log(`Perkama ${zvakiuKiekis} zvakiu. Zvakiu kaina su nuolaida 3%: ${zvakesKaina}EUR`)
 }
 if (zvakiuKiekis >= 2000) {
  zvakesKaina = zvakiuKiekis - (zvakiuKiekis * 0.04)
  console.log(`Perkama ${zvakiuKiekis} zvakiu. Zvakiu kaina su nuolaida 4%: ${zvakesKaina}EUR`)
} else{ console.log(`Perkama ${zvakiuKiekis} zvakiu. Zvakiu kaina: ${zvakiuKiekis} EUR`)

}

  
  
/* 7.Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, 
kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()*/
console.log('----------7 UZDAVINYS-----------')

let o = Math.floor(Math.random() *  100)
let p = Math.floor(Math.random() *  100)
let r = Math.floor(Math.random() *  100)

const opr = [o, p, r]
console.log(opr)
const average = opr.reduce((a, b) => a + b, 0) / opr.length;
console.log(`Pirmas vidurkis: ${average}`)

positive = opr.filter(function (a) { return a >= 10 && a <=90; }),
sum = positive.reduce(function (a, b) { return a + b; });

const average2 = sum / positive.length
console.log(`Antras vidurkis: ${average2}`)


