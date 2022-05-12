const n1 = ["Petras", "Asilas", "Barsukas", "Kate"];
const n2 = ["Antanas", "Asilas", "Barsukas", "Simona"];



const copy = n1.map(v => v + ' Valio');        //v--> value, galima rasyt bet ka; sukurti salyga, kad jeigu true deda i masyva jie false ne
const copy1 = n1.filter(v => true);
const index = n1.indexOf('Asilas')


const copy2 = n1.filter(v => -1 != n2.indexOf(v));
const copy3 =[];

for (let i = 0; i < n1.length; i++){

const what = n1[i];

    for (let k= 0; k < n2.length; k++){
        if (n2[k] == what){
            copy3.push(what)
            break
        }

    }
}


for (const ja of n1){
    console.log(ja);
} // for in paima indexus masyvo, o for each reiksme


console.table(copy1)
console.log(index)  //kai indekso nesuranda tai console -1;
console.table(copy2)
console.table(copy3)

const kazkas = 'kjkjkjk';
const namasSuKaminu = {   //objektas negarantuoja vietos kur bus kaminas kur gyventojai ir t.t. console atvaizduoja abeceles tvarka;
    kaminas: 'yra 3 metrai',
    gyventojai: ["Petras", "Asilas", "Barsukas", "Kate"],
    tas: kazkas 

};
namasSuKaminu.tas = 888;

console.log(namasSuKaminu.gyventojai, namasSuKaminu.tas)

//https://docs.google.com/document/d/18fn5fVSlDmZGYl6UiANbpeMzg-UYAn5PWm0KZf05dlQ/edit NAMU DARBAI

const masyvas = [];
masyvas.length = 100;
const saskaita = {

};
//masyvo randomai - randomas nuo nulio iki masyvo ilgio-1


namasSuKaminu.animals = {cat:'Murka', dog:'Brisius'}

namasSuKaminu.tas = 888;

//const namasSuKaminu2 = namasSuKaminu; // ne naujas namas, o nukreipia i ta pati.
//namasSuKaminu2.animals.cat = 'Kitas katinas';


console.log(namasSuKaminu.animals.cat)


const n4 = n1.slice(); //slice padaro kopija - kita objekta (ne linkas). slice naudojamas tik masyvo kopijavimui;

n4.shift()

console.log(n1)
console.log(n4)
//splice isima masyvo dali, o slice iskopijuoja kitur bet palieka

const a1 = {cat:'Murka', dog:'Brisius'};

const a2 = {...a1}; // destruktorius, nukopijuoja kita objekta.pagrindinio objetko kopija;

console.log(a2)


const namasSuKaminu2 = JSON.parse(JSON.stringify(namasSuKaminu));

console.log(namasSuKaminu2)
console.log(namasSuKaminu)

//MAP'as

const map = new Map();

map.set('Murka', 5);
map.set('Pilkis', 8);
map.set('Pukis', 3);

console.log(map.get('Pilkis'));
console.log(map.has('Pilkis'));
console.log(map.has('Pilkis1'));
console.log(map.delete('Pilkis'));
console.log(map)
console.log(map.size)

const masmap = [...map];
console.log(masmap)

//SET'as 

const se = new Set();

const va =[4,8,2,7,7,4];

console.log(new Set(va)) // ismeta pasikartojancias reiksmes

se.add('cat');
se.add('dog');
se.add('cat'); // i SET galima deti tik unikalias reiksmes, todel su SET galima rasti unikalias savybes, bet ne objekte;
se.delete('dog');
se.add({t:'cat'})

console.log(se.has({t:'cat'}))

console.log(se)

