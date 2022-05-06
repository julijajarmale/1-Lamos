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
        console.log(`Skaicius mazesnis uz 7`)
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
    let e = 0
    let sumE = 0
    let arrE = []

    for (let i = 0; i < 5 ; i++) {
        let e = (random(10,20))
        console.log(e)
        sumE= sumE + e;
        arrE.push( e );
        
    }
    console.log(sumE)
    let stringE = arrE.join(` ${e} `)
    console.log(stringE)
    console.log(typeof stringE)
    let stringWithSum = (`${stringE} ${sumE}`)
    console.log(stringWithSum)
    
    

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
    Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. */
    console.log (`--------------8.uzdavinys------------`)


    function rand(min, max) {   
        return Math.floor(Math.random()*(max-min+1)+min);
       }
       let number1 = 0;
       let g = 0;
       while ((number1 != 7) && (number1 != 5)) {
           number1 = rand(0, 10);
           console.log(number1);
           g++
       } console.log(`Ciklas apsisuko ${g} kartų`);
    
    



/*9.	Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, 
kol ciklo viduje bus sugeneruotas skaičius 5;
    A.	Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
    Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
    Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
    B.	Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir
     paskaičiuokite iteracijas analogiškai kaip A dalyje;
    C.	Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;*/
    console.log (`--------------9.uzdavinys------------`)






/*10.	Kazys ir Petras žaidžia bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: 
laimėtojo vardas”. Taškų kiekį generuokite funkcija rand(). Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.*/
console.log (`--------------10.uzdavinys------------`)








