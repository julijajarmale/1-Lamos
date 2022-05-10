/*1.	Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
    A.	Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
    B.	Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
    C.	Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami 
    console.log;
    D.	Sudėkite skaičius į stringo tipo kintamąjį padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, 
    paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;*/
    console.log (`--------------1.uzdavinys------------`)
    function random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
       }
        let a = random(5,25);
        let b = random(5,25);
        let c = random(5,25);
        console.log(a);
        console.log(b);
        console.log(c);

        let sumABC = a + b + c;
        console.log(sumABC);
        
        let string = (`${'' + a}, ${'' + b}, ${'' + c}`)
        console.log(string) 
        let string1 = (`${'' + a} ${'' + b} ${'' + c}`)
        console.log(string1)
        let string2 = (`${'' + a} ${'' + b} ${'' + c} ${sumABC}`)
        console.log(string2)

/*2.	Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį 
atspauszdinkite pasinaudojus console.log;*/
console.log (`--------------2.uzdavinys------------`)
    function random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
        }
        let d = random(5,10);
        console.log(d)


/*3.	Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį
 5 kartus;*/
 console.log (`--------------3.uzdavinys------------`)
    let labas ='Labas'

    for(let i= 0; i < 5; i++){
    console.log(labas)
    }

/*4.	Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;*/
console.log (`--------------4.uzdavinys------------`)
    for (let i= 0; i < 7; i++){
    console.log(d)
    }

/*5.	Pasinaudojus ciklu  ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;*/
console.log (`--------------5.uzdavinys------------`)

    for (let i= 0; i < d; i++){
    console.log(d)
    }

/*6.	Pasinaudojus ciklu  ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas,
 bet tik tada jeigu jis didesnis už 7;*/
 console.log (`--------------6.uzdavinys------------`)
  
    for (let i= 0; i < d; i++)
     if (d >= 7) {
    console.log(d)
    } else {
        console.log(`Skaicius mazesnis uz 7`);
    }

/*7.	Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
    A.	Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
    B.	Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
    Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
    C.	Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
    Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
    D.	Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
     Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje.
    Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;*/
    console.log (`--------------7.uzdavinys------------`)
    function rand(min, max) {   
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    let e = 0;
    let sumE = 0
    let arrE = []

    for (let i = 0; i < 5 ; i++) {
        let e = (random(10,20))
        console.log(e)
        sumE= sumE + e;
        arrE.push( e );
        
    }
    console.log(sumE);
    let stringE = arrE.join(` ${e} `);
    console.log(stringE);
    console.log(typeof stringE);
    let stringWithSum = (`${stringE} ${sumE}`);
    console.log(stringWithSum);
    
    

/*8.	Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius 
skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius
 mažesnis nei 12;
    A.	Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
    B.	Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam 
    pasibaigus;
    C.	Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18,
     ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
    D.	Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte
     (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
    E.	Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
    Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
    F.	Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
    Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 
    */
    console.log (`--------------8.uzdavinys------------`)
   
    function rand(min, max) {   
        return Math.floor(Math.random()*(max-min+1)+min);
       }
       let number1;
       let loop = 0;
       let sum = 0;
       let count = 0;
       let even = 0;
       let odd = 0;
       let countIteracijos = 0;
      do{
        number1 = rand(10, 25);
        console.log(number1);
        loop++
        countIteracijos++

        if (number1 <= 18){
         sum = sum + number1;
         } else {
             count++
         }
         
         if (number1 % 2 ===0){
             even++
         }
         if (number1 % 2 !=0){
             odd++
         }
      }
       while ((number1 != 10) && (number1 != 11) || (countIteracijos < 20))
       
       console.log(`Ciklas apsisuko ${loop} kartų`);
       console.log(`suma: ${sum}`);
       console.log(`atmesta skaiciu:${count}`);
       console.log(`lyginiu: ${even}`)
       console.log(`nelyginiu: ${odd}`)
       
    

/*9.	Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, 
kol ciklo viduje bus sugeneruotas skaičius 5;
    A.	Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
    Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
    Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
    B.	Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir
     paskaičiuokite iteracijas analogiškai kaip A dalyje; 
    C.	Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
    
    !!!!!!! C not done
    */
    console.log (`--------------9.uzdavinys------------`)

    function rand(min, max) {   
        return Math.floor(Math.random()*(max-min+1)+min);
      }
      let number;
      let ciklas = 0;
      let ciklas2 = 0;
      let count5 = 0;
      let ciklasEina = true;
      
      
      do{
        number = rand(5, 10);
        ciklas++
        console.log(number);

        for (let i = 0; i < ciklas ; i++) {
            ciklas2++
        }
        if (number === 5){
            count5 ++
        } else{
            count5 === 0;
        }
        if (count5 === 3){
            ciklasEina = false;
        }
      }
      
      
      while (ciklasEina) 
   console.log(`Isorinis ciklas apsisuko ${ciklas} kartų`)
   console.log(`Vidinis ciklas apsisuko ${ciklas2} kartų`)



/*10.	Kazys ir Petras žaidžia bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: 
laimėtojo vardas”. Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.*/
console.log (`--------------10.uzdavinys------------`)

      let kTaskai;
      let sumaK = 0;
      let pTaskai;
      let sumaP = 0;

      do{
        let kTaskai = rand(5, 25);
        sumaK = sumaK + kTaskai;
        let pTaskai = rand(10, 20);
        sumaP = sumaP + pTaskai;
          if (sumaK >= 222 && sumaK > sumaP){
          console.log(`Kazys: ${sumaK} tasku; Petras: ${sumaP} tasku. Partija laimejo Kazys` )
      }
          if (sumaP >= 222 && sumaP > sumaK){
          console.log(`Kazys: ${sumaK} tasku; Petras: ${sumaP} tasku. Partija laimejo Petras` )
      }
          if (sumaP === 222 && sumaK === 222){
          console.log(`Kazys: ${sumaK} tasku; Petras: ${sumaP} tasku. Rezultatas - lygiosios` )
      }
      }

      while((sumaK < 222 && sumaK != 222)&&(sumaP < 222 && sumaP != 222))

    console.log (`--------------CIKLU ANTRAS LAPAS ------------`)

    
/*1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;*/
console.log (`--------------1.UZDUOTIS ------------`)

    for(let i= 0; i < 5; i++){
     console.log('Labas');
    }

/*2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);*/
console.log (`--------------2.UZDUOTIS ------------`)

    for(let i= 0; i < 5; i++){
     console.log(i);
    }

/*3.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);*/
console.log (`--------------3.UZDUOTIS ------------`)
    for(let i= 0; i <= 40; i+=10){
     console.log(i);
   }

/*4.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);*/
console.log (`--------------4.UZDUOTIS ------------`)
    for(let i= 49; i <= 53; i++){
     console.log(i);
  }

/*5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);*/
console.log (`--------------5.UZDUOTIS ------------`)

    for(let i= 4; i >= 0; i--){
     console.log(i);
 }

/*6.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos
konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);*/
console.log (`--------------6.UZDUOTIS ------------`)

    for(let i= 0; i <= 8; i+=2){
     console.log(i);
}
/*7.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
(vienas skaičius vienoje eilutėje);*/
console.log (`--------------7.UZDUOTIS ------------`)
    let num;

    for(let i= 0; i < 5; i++){
        num = (random(0,10))
        console.log(num);
    }

/*8.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
Paskutinis atspausdintas skaičius turi būti 5;*/
console.log (`--------------8.UZDUOTIS ------------`)

    let l;
    while (l != 5){
        l = (random(0,10))
        console.log(l);
    }

/*9.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;*/
console.log (`--------------9.UZDUOTIS ------------`)

    let sumM=0;
    while (sumM<=100) {
      sumM += rand(1, 10);
      console.log(rand(1, 10));
    }

/*10.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
(vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;*/
console.log (`--------------10.UZDUOTIS ------------`)

    let skaicius1 = 0;
    let ciklas1 = 0;

    while(skaicius1 !=5 && skaicius1 != 7){
        skaicius1 = (rand(0, 10))
        console.log(skaicius1)
        ciklas1++
    }
    console.log(`apsisuko ${ciklas1} ciklu`)

/*11.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
 Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;*/
 console.log (`--------------11.UZDUOTIS ------------`)

   let skaicius11 = 0;
   let ciklas11 = 0;
   let sum11=0;
    while (sum11<=20 || ciklas11<11) {
      sum11 += rand(0, 10);
      ciklas11++
      console.log(rand(1, 10));
    }

/*12.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
 Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;*/
 console.log (`--------------12.UZDUOTIS ------------`)
 
 count = 0;
 ciklasEina = true;

 do{
     num12 = rand(0, 10);
     console.log(num12);
     if(num12 % 2 != 0){
         count++
     }
     if(count === 3){
        ciklasEina = false;
    }
 } while(ciklasEina);
 

/*13.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
 Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;*/
 console.log (`--------------13.UZDUOTIS ------------`)


 let sk1 = 0;
 let sk2 = 0;
 let ciklai = true;
do{
    let sk1 = rand(0, 10);
     let sk2 = rand(0, 10);
     console.log(`${sk1}, ${sk2}`)

     if(sk1 === sk2){
     ciklai = false;
     }
}
 while (ciklai);
    
 
 // vienas random kitas while !==
/*14.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
 Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). 
 Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;*/
 console.log (`--------------14.UZDUOTIS ------------`)
let sk3 = 0;
let sk4 = 0;
let sum3 = 0;
let sum4 = 0;
 while (sum3 < 100 || sum4 < 100){
     let sk3 = rand(0, 10);
     let sk4 = rand(0, 10);
     sum3 = sum3 + sk3;
     sum4 = sum4 + sk4;
     console.log(`${sum3},${sum4}`);
 }

/*15.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
 Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).*/
 console.log (`--------------15.UZDUOTIS ------------`)
 let sk15;
 let sk16;
 let count15 = 0;
 let count16 = 0;

 do{
    let sk15 = random(0, 10);
    let sk16 = random(0, 10);
    console.log(`${sk15}, ${sk16}`)

    if(sk15 % 2 != 0){
        count15 ++
    }
    if(sk16 % 2 != 0){
       count16 ++
   }
   if (count15 >= 3 && count16 >= 3) {
       break;
   }
 }
 while(count15 != 3 || count16 != 3);

        