function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);*/
console.log(`-------------1.UZDAVINYS-----------`)

 const pinigine = [];
 
 for (let i = 0; i < rand(10, 30); i++){
    const pinigai = (rand(0, 10))
    for(let k = 0; k < pinigine.length; k++){
        }
    pinigine.push(pinigai);
       
}

console.table(pinigine);


/* 2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;*/
console.log(`-------------2.UZDAVINYS-----------`)

let piniguSuma = 0;
for (let i = 0; i < pinigine.length; i++){
     piniguSuma = piniguSuma + pinigine[i];
 }
console.log(piniguSuma);


/* 3.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;*/
console.log(`-------------3.UZDAVINYS-----------`)

let popieriniuPiniguSuma = 0;
for (let i = 0; i < pinigine.length; i++){
    if (pinigine[i] > 2){
        popieriniuPiniguSuma = popieriniuPiniguSuma + pinigine[i];
    }
}
console.log(popieriniuPiniguSuma);

/* 4.Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;*/
console.log(`-------------4.UZDAVINYS-----------`)

for (let i = 0; i < pinigine.length; i++){
    if (pinigine[i] <= 2){
        pinigine[i] = 0;
    }
}
console.log(pinigine);



/* 5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;*/
console.log(`-------------5.UZDAVINYS-----------`) 

let largest;
let countLargest = 0;

for (let i = 0; i < pinigine.length; i++) {
    largest = Math.max(...pinigine)
    if(largest === pinigine[i]){
        countLargest++
    }

    }
   
console.log(largest);
console.log(`${largest} yra ${countLargest} kiekio`)


/* 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;*/
console.log(`-------------6.UZDAVINYS-----------`)

for (let i = 0; i < pinigine.length; i++){
    if (pinigine[i] === 0){
        pinigine[i] = i;
    }
}
console.log(pinigine);

/* 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo
 ilgis būtų lygiai 30;*/
 console.log(`-------------7.UZDAVINYS-----------`)

 


/* 8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio 
masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);*/
console.log(`-------------8.UZDAVINYS-----------`)



/* 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio 
su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;*/

console.log(`-------------9.UZDAVINYS-----------`)




/*10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: 
['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];*/
console.log(`-------------10.UZDAVINYS-----------`)



/*11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;*/
console.log(`-------------11.UZDAVINYS-----------`)



/* 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes
'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;*/
console.log(`-------------12.UZDAVINYS-----------`)



/* 13.Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;*/
console.log(`-------------13.UZDAVINYS-----------`)
/* 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius
 sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;*/
 console.log(`-------------14.UZDAVINYS-----------`)
/*15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;*/
console.log(`-------------15.UZDAVINYS-----------`)
/*16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius 
    nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);*/
    console.log(`-------------16.UZDAVINYS-----------`)
/* 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos -
 jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.*/
 console.log(`-------------17.UZDAVINYS-----------`)
 /*18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir 
 jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai; */
 console.log(`-------------18.UZDAVINYS-----------`)




 console.log(`-------------ANTRAS LAPAS-----------`)

/* 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.*/
console.log(`-------------2.1.UZDAVINYS-----------`)

const masyvas= [];
 
 for (let i = 0; i < 30; i++){
    for(let k = 0; k < masyvas.length; k++){
        }
   masyvas.push((rand(5, 25)));
       
}

console.table(masyvas);


/* 2.Naudodamiesi 1 uždavinio masyvu:
A.Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
B.Raskite didžiausią masyvo reikšmę ir jos indeksą;
C.Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
D.Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
E.Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
F.Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių 
(pagal neporinį-porinį indeksą, ne reikšmę);
G.Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
H.Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;*/
console.log(`-------------2.2.UZDAVINYS-----------`)

let count1 = 0;
let maks;
let kitiMaks;
let countMax = 0;
let sumEven = 0;
let masyvas2 = [];
let masyvas2a = [];
let masyvas2b = [];

 for (let i = 0; i < masyvas.length; i++){
     if(masyvas[i] > 10) {
         count1++
     }

      maks = Math.max(...masyvas)
      
    if (masyvas[i] % 2 === 0) {
        sumEven = sumEven + masyvas[i]
    } 
} 
  for (let i = 0; i < masyvas.length; i++){
   masyvas2.push(masyvas[i] - i)
  }


 console.log(`a)daugiau uz 10 reiksmiu yra ${count1}`)
 console.log(`b) ${maks} indekse ${masyvas.indexOf(maks)}`);
 console.log(`c) poriniu suma ${sumEven}`)
 console.table(`d) ${masyvas2}`);

  for (let i = 0; i < 10; i++){
    masyvas.push(rand(5,25))
   }

   console.table(`e) ${masyvas}`);

   //f)
   for (let i = 0; i < masyvas.length; i++){
    if(i % 2 === 0){
        masyvas2a.push(masyvas[i]);
    }
    if(i % 2 != 0){
        masyvas2b.push(masyvas[i]);
    }
    
   }
console.log(masyvas2a);
console.log(masyvas2b);

    //g  
    for (let i = 0; i < masyvas.length; i++){
        if(masyvas[i] > 15 && i % 2 ===0){
            masyvas[i] = 0;
        }
    }
   console.log(masyvas);

   //h
   for (let i = 0; i < masyvas.length; i++){
       if(masyvas[i] > 10){
           console.log(i)              
           break       
       }   
                                                                                                                                                                                   
   }

/*3.Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra 
kiekvienos raidės.*/
console.log(`-------------2.3.UZDAVINYS-----------`)
let masyvas3 = [];
let possibleString = 'ABCD'
 for(let i = 0; i < 200; i++){
     masyvas3.push(possibleString.charAt(Math.floor(Math.random() * possibleString.length)));
 }
 const map = masyvas3.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  
console.log(masyvas3)
console.log(map);


/*4.Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.*/
console.log(`-------------2.4.UZDAVINYS-----------`)


/*5.Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999.
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).*/
console.log(`-------------2.5.UZDAVINYS-----------`)

const masyvas5 = [];
const masyvas6 = [];
for(let i = 0; i < 100; i++){
    masyvas5.push((rand(100,999)));
    masyvas6.push((rand(100,999)));

    let index5 = masyvas5[0];
    if(index5 = masyvas5[i]){
        continue
    }
    let index6 = masyvas6[0];
    if(index6 = masyvas6[i]){
        continue
    }
}

console.table(masyvas5)
console.table(masyvas6)

/*6.Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame
 6 uždavinio masyve.*/
 console.log(`-------------2.6.UZDAVINYS-----------`)

const masyvas7 =[];

 

console.table(masyvas7)

/*7.Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.*/
console.log(`-------------2.7.UZDAVINYS-----------`)

const masyvas8 =[];

 

console.table(masyvas8)

/*8.Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės būtų antrojo masyvo.*/
console.log(`-------------2.8.UZDAVINYS-----------`)



/*9.Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/
console.log(`-------------2.9.UZDAVINYS-----------`)

let masyvas10 = [];
let prev;
let prev2;

for (let i = 0; i < 10; i++){
  masyvas10[0] = rand(5, 25);
  masyvas10[1] = rand(5, 25);
  masyvas10[2] = masyvas10[0]+masyvas10[1];
  masyvas10[3] = masyvas10[1]+masyvas10[2];
  masyvas10[4] = masyvas10[2]+masyvas10[3];
  masyvas10[5] = masyvas10[3]+masyvas10[4];
  masyvas10[6] = masyvas10[4]+masyvas10[5];
  masyvas10[7] = masyvas10[5]+masyvas10[6];
  masyvas10[8] = masyvas10[6]+masyvas10[7];
  masyvas10[9] = masyvas10[7]+masyvas10[8];


}

console.table(masyvas10);