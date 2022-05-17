//EVENT
//1. Susirandame taga <>
//2. Susirandam ivyki
//3. Pradedame stebeti// vienu metu galima stebeti vieno elemento viena ivyki;
console.log(`1 UZDAVINYS`)

//1.Atskiri elementai
//A)Tamsiai žaliai nuspalvinti h1 tagą;
const h1 = document.querySelector('h1');
h1.style.color = 'green'

console.log(h1)

//B)Tagui i pridėti klasę small;
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
const i = document.querySelector('i');
i.classList.add("small");
console.log(i);

//C)Iš tago h1 pašalinti klasę main;
h1.classList.remove("main");

//D)Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
const h2First = document.querySelector('h2')
h2First.classList.add("first");
h2First.classList.remove("main");

//E)Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
console.log(`2 UZDAVINYS`)
const firstSpan = document.querySelector('h2 > span');
firstSpan.classList.add("span");

//2.Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//A)Suskaičiuoti kiek yra h2 tagų;

const h2All = document.querySelectorAll('h2');
console.log(`h2 tagų yra ${h2All.length}`)

//B)Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

let h2NoFirst = 0;
for (let i = 0; i< h2All.length; i++){
  if (!h2All[i].classList.contains('first')){
    h2NoFirst++
  } 

}
console.log(`Firs klases neturi ${h2NoFirst} h2 tagai`)


//C)Visus h2 tagus nuspalvinti šviesiai mėlynai
h2All.style.color = 'lightblue'

//D)Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
//E)Pabraukti visus tagus su klase new;
//F)Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
//G)Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
//H)Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
//I)Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log(`2 UZDAVINYS`)

//3.Elementų events
//A)Padaryti tai ką liepia mygtukai Header1 sekcijoje;
//B)Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
//C)Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu 
//į baltą spalvą;
//D)Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
//E)Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė
// fontSize = 20px;
//F)Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos
// https://stackoverflow.com/questions/18691655/remove-style-on-element
//G)Padaryti tai ką liepia mygtukai Header2 sekcijoje;
console.log(`3 UZDAVINYS`)

//4.Elementų grupių events
//A)Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
//B)Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
//C)Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
console.log(`4 UZDAVINYS`)

//5.Dinaminis elementų kūrimas (su createElement)
//A)Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
//klasę new ir ant jo paklikinus jis pasidarytų žalias;
//C)Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, 
//kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
//D)Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir 
//HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai 
//turi daryti tai kas ant jų parašyta
console.log(`5 UZDAVINYS`)


