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
console.log(`-------------5.UZDAVINYS-----------`) //count++ nepavyko

let largest = pinigine[0];
let countLargest = 0;

for (let i = 0; i < pinigine.length; i++) {
    if (largest < pinigine[i] ) {
        largest = pinigine[i];  

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
 let naujiPinigai = (rand(0, 10))
 for (let i = 0; i < ; i++){
 do{
 pinigine.push(naujiPinigai)
 } 
 while(pinigine.length != 30)
console.log(pinigine)
 }
 


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
