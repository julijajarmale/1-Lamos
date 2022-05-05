console.log('labas');

let netikrasSkaicius = '';
let tikrasSkaicius = 8;
let loginis = false;


console.log(typeof netikrasSkaicius);
console.log(typeof tikrasSkaicius);
console.log(typeof loginis);

console.log(!!tikrasSkaicius);
// 0 logine israiska visada yra - false; visi kiti skaiciai - true;
// tuscias stringa - visada yra - false; visi kiti stringai - true;

console.log(!!netikrasSkaicius);

if(netikrasSkaicius) {
console.log('yes');

} else if(tikrasSkaicius){
    console.log('nezinau');
}
else {
    console.log('no');
}

if (3 > 8){
    console.log('yes');
} else {
    console.log('no');
}

// ==  kovertuojama lygybe daziausiai naudojamas kai nori palyginti skaiciu ir skaiciu-stringa 8=='8';
// === nekonvertuojama lygybe, jeigu nesutampa tipai, nieko nebelygina;
console.log(`--------------`)
console.log(true || false)
// ARBA  || visada renkasi true false tik tada kai abu kintamieji false;

console.log(true && false)
//&& visada is pradziu renkasi false;

let t = 8
if(t <= 7){
    console.log('yes')
}else{
    console.log('no')
}
/*
reiksme <===> priesinga reiksme
    >   <===>   <=
    <   <===>   >=
    ==  <===>   !=
    ||  <===>   &&
    &&  <===>   || 
apkeiciant reiksmes butinai prideti arba atimti lygybes zenkla.


*/
console.log(+'6') // +- greitas stringo konvertavimas i skaiciu
console.log('' + 7)  // greitasi konvertavimas i stringa is skaiciaus
console.log(!7) // i booleana priesinga
console.log(!!7) // i booleana tikra tipa

let kas = 'tas'
switch(kas){
    case 'anas':
        console.log('ANAS');
        break
    case 'tas':
        console.log('TAS');
        break
    case 'antis':
        console.log('ANTIS');
        break
    default:
        console.log('LABANAKT')
        break
    
} // switch yra ciklas

