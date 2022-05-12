console.log(`FUNKCIJOS`)

//parametras = tuscias kintamasis, neturi reiksmes;
//argumentas =  reiksme neturinti kintamojo;
//deklaracija = function fun();<------parametrai rasomi kai funkcija deklaruojame;
//kvietimas = fun();<---- argumentai rasomi, kai funkcija kvieciame;

const b = 'babaJaga';

function fun(ki, li){
    console.log(ki)
    console.log(li)
    const rez1 = ki + li;
    const rez2 = ki * li;
    return [rez1, rez2] // gali buti tik vienas return funkcijoje
}

const [gavau1, gavau2] = fun(5, 7);
console.log(gavau1, gavau2);


/*fun(b); // funkcijos kvietimas, kol neiskvieciama, nieks nevyksta. b atejo is const pavirto i stringa ir buvo pirsikirta ki;
fun(b); //iskvieciame const b reiksme ir yra perrasoma parametrui KI be reiksmes
fun('geras', 'zuikis'); //geras yra = ki ir ji spausdinam; zuikis eina pas li.
fun('blogas');*/

// ANONIMINE funkcij - neturi vardo, arba yra inlne ir mes is karto ja kvieciame arba yra priskiriama kintamajam---->

function suVardu(){
    console.log('as turiu varda')
}

suVardu();

function suVardu(){ //<--- antra tokia pat overwritina pirmaja
    console.log('blablabla')
}

suVardu();

const beVardo = function(){   //<----cia yra anonimine funkcija priskirta kintamajam // cia overwritinti niekas negali nieko;
    console.log('as esu anonimine funkcija') // kad butu tvarka ir nesikeistu.
}

beVardo();

//ARROW FUNKCIJA 

const strele = () => {
    console.log('As streline funkcija')
}
//STERLINIU FUNKCIJU PAPRASTINIMAI

const vienas = y =>{ // jeig turime viena parametra lygiai viena galima nerasyti skliaustu visai
    ('As streline funkcija VIENAS')
}

const du = y => console.log('As streline funckija DU') // jeigu viskas telpa i viena eilute nebutina rasyti ir riestiniu skliaustu;
//i streline funkcija is karto eina returnas
strele();
vienas();
du();


/* const fancy = () => {

    return kita = () =>{
        console.log('labas')
    }
}*/

const fancy = () => () => console.log('labas')

//fancy() <== uztenka taip nebutinai kintamajo reikia;
const ja = fancy();
ja();
console.log(fancy()) // grazina funkcija, bet jos nepaleidzia
fancy()(); // grazina ir paleidzia funkcija;

//CALLBACK - funkcija kuri parametrui paduodama vietoj argumento

function Alio(element){
    console.log(element)
}
const array1 = ['a', 'b', 'c'];

//array1.forEach(Alio); //<----------- argumentas yra funkcija
array1.forEach((element, i) => console.log(element, i));

const dvimatis =  [
    [2, 3, 8, 8, 0],
    [7, 3, 8, 1, 0],
    [2, 3, 6, 2, 5],
    [2, 4, 8, 3, 0],
]

dvimatis.forEach(r => r.forEach(n => console.log(n))); //r = eilute, n = skaivus

const cat ={
name:'pilkis',
voice: function() {console.log('Miaaaaaaau')}
}
cat.voice();

//METODAI = Savybes kurios yra funkcijoss . savybe katinas funkcija miaukia viduje.


//THIS

const cat1 ={
    name:'pilkis',
    voice: function() {console.log('Miaaau says ' + this.name)}
    }

    cat1.voice();


//SORT

const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];

//n.sort() //abeceles tvarka ir zodziu ir skaicius (1 11 2 3)
//lygina pagal ASCII table indeksus;

n.sort((a, b) => {
    if (a > b){
        return -1;
    }
    if (a < b){
        return 1;
    }
    return 0;
})

console.table(n);
