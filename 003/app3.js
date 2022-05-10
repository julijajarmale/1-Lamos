console.log(`CIKLAI`)

//for naudojama visada kai is anksto zinome, kiek bus iteraciju - kiek prasisuks ciklas;
//while, kai nezinom is anksto;
// while and do... while

let result = '';
let i = 0;

do{
    i = i + 1;
    result = result + i;  
} while (i < 5);

console.log(result);
// while nuo 0 iki begalybes; tikrina pacia pirma salyga;
// do while kai ciklu kiekiai nuo 1 iki begalybes; pvz monetos metimas === nuo 1neto. niekada netikrina pirmos salygos;
//for each- nelabai ciklas


let a = 0;

let b = 0;

while(b < -10){//ciklas kartojas tol, kol cia yra true

    if(++a > 100){
        console.log('avarija');
    break; //saugiklis nuo kompo uzimo galima deti i visus ciklus, kad nepastrigtu
    }

    b++
}
console.log(b);

//do while

let c = 0;

do{
    if(++a > 100){
        console.log('avarija');
    break; //saugiklis nuo kompo uzimo galima deti i visus ciklus, kad nepastrigtu
    }
    c++;

} while (c <-10);

console.log(b,c);
// jiegu salyga is pat pradziu neatitinka salygos while ja nutraukia, o do while viena prasuka








//pazet a++ ir ++a skirtumus

// i - iteracija, turi buti uzdeklaruota visada
for(let i = 0; i < 10; i++){
    if (i == 2){
        break;
    }
    if (i == 6){
        continue; //continue nutraukia tam tikra rata
    }
    console.log(`Dabar sukasi:
     ${i + 1}`);
}

// ciklas cikle

 for (let i = 0; i < 5; i++){
     console.log(`Dabar einasi DIDELIS ${i + 1}`)
     }
        for (let k = 0; k < 5; k++){
            console.log(`Dabar einasi MAZIUKAS ${k + 1}`)
        
     }

     //leksteje gali buti 10...30 kasniu kotleto
     //kasnis susikramto per rand 1...10
     //kasnis susikramto neaisku kaip - tikrinti po kiekvieno krimstelejimo;
     

        function random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
       }

       const kotletoKasniai = random(10, 30);
       let kotletasSuvalgytasPer = 0;

       for (let i = 0; i < kotletoKasniai; i++){
       //const gabaliukasSukramtomas = random(1,10);
       //kotletasSuvalgytasPer += gabaliukasSukramtomas;
       do{
            kotletasSuvalgytasPer++
       } while(random(0,2));
       }

     console.log(kotletasSuvalgytasPer);

// kiek ciklu nueis kate, kol pagaus nemaziau nei 20 ziurkiu

console.log(`********************KONTROLINIS***********************`);

     let ziurke;
     let sumZiurke = 0;
     let ciklas = 0;

    do{ 
        let ziurke = random(3, 5);
        console.log(ziurke);
        sumZiurke = sumZiurke + ziurke;
        ciklas++
    }
    
    while (sumZiurke <= 20);
    console.log(`katinas pagavo ${sumZiurke} ziurke apsukes aplink nama ${ciklas} kartus`)


 