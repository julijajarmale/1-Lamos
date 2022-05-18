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
h2All.forEach(h2 => {
 h2.style.color = 'lightblue'
  });

//D)Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

const h2Div = document.querySelectorAll('div.prices > h2');
h2Div.forEach( e => {
    e.classList.add('price-tag');
});

//E)Pabraukti visus tagus su klase new;
const line = document.querySelectorAll('.new');
line.forEach(e=> {
  e.style.textDecoration = ('underline');
});

//F)Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const animals = document.querySelectorAll('ul');
let countAnimals = 0;
animals.forEach(ul => {
  console.log(ul)
  countAnimals++
  
});

console.log(`yra ${countAnimals} gyvunu kategorijos kartu su zirafom`)

//G)Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
animals.forEach(ul => {
  ul.classList.add('ul-border');
})

//H)Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
let countNew = 0;
for (let i = 0; i< line.length; i++){
  if (line[i].classList.contains('new')){
    countNew++
  } 

}
console.log(`New klases turi ${countNew} gyvunai`)

//I)Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

let countZirafos = 0;
let countPlesrunai = 0;
let countGyvates = 0;
let countZoliaedziai = 0;

const zirafos = document.querySelectorAll('#zirafos > .new')
zirafos.forEach(e => {
  console.log(e)
  countZirafos++
});
const plesrunai = document.querySelectorAll('#plesrunai > .new')
plesrunai.forEach(e => {
  console.log(e)
  countPlesrunai++
});

const gyvates = document.querySelectorAll('#gyvates > .new')
gyvates.forEach(e => {
  console.log(e)
  countGyvates++
});

const zoliaedziai = document.querySelectorAll('#zoliaedziai > .new')
zoliaedziai.forEach(e => {
  console.log(e)
  countZoliaedziai++
});


console.log(`Zirafu su klase new ${countZirafos}`)
console.log(`Plesrunu su klase new ${countPlesrunai}`)
console.log(`Gyvaciu su klase new ${countGyvates}`)
console.log(`Zolaedziu su klase new ${countZoliaedziai}`)


//3.Elementų events
console.log(`3 UZDAVINYS`)
//A)Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const mygtukas1 = document.querySelectorAll('#h1-color');
mygtukas1.forEach(e => {
  e.style.color = 'green'
});

const mygtukas2 = document.querySelectorAll('#h1-font');
mygtukas2.forEach(e => {
  e.style.fontSize = '10px'
});

//B)Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

const iBold = document.querySelectorAll('i');

iBold.forEach(i => {

  i.addEventListener('click', () => {
      i.style.fontWeight = 'bold';
      console.log(e);
  });
});


//C)Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu 
//į baltą spalvą;

const prices = document.querySelectorAll('.prices');

prices.forEach(e => {
  e.addEventListener('click', () => {
    e.style.backgroundColor =e.style.backgroundColor === 'white'? 'gray' : 'white';
    console.log(e);
});

})

//D)Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

const contacts = document.querySelectorAll('#contacts');

contacts.forEach(e => {
  e.addEventListener('click', () => {
    e.style.color = 'orange'
    console.log(e);
});

})
//E)Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė
// fontSize = 20px;
const padidinti = document.querySelectorAll('#contacts > u');

padidinti.forEach(e => {
  e.addEventListener('click', () => {
    e.style.fontSize = '20px'
    console.log(e);
});
 
})

//F)Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos
// https://stackoverflow.com/questions/18691655/remove-style-on-element //perdaryti

const remove = document.querySelectorAll('#contacts > b');
remove.forEach(e => {
  e.addEventListener('click', () => {
    contacts.forEach(e => {
        e.style.color = 'null'
        e.style.fontSize = 'null'

    });

});

})


//G)Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const mygtukas3 = document.querySelectorAll('#h1-color-back');
mygtukas3.forEach(e => {
  e.addEventListener('click', () => {
    e.style.color = e.style.color === 'black'? 'green' : 'black';
    console.log(e);
});
});

const mygtukas4 = document.querySelectorAll('#h1-font-back');
mygtukas4.forEach(e => {
  e.addEventListener('click', () => {
    e.style.fontSize = e.style.fontSize === '10px'? '20px' : '10px';
    console.log(e);
})
})

console.log(`4 UZDAVINYS`)

//4.Elementų grupių events
//A)Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai 
https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
line.forEach(e => {
  e.addEventListener('dblclick', () => {
    e.style.color = 'red';
    console.log(e);
})
})

//B)Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

const animalsNew = document.querySelectorAll('.animals > ul > li');
animalsNew.forEach(animals => {
    if (animals.className !== 'like-button') {
        animals.addEventListener('click', e => {
            animals.style.fontSize = '130%';
        });
    }
});

//C)Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;

animalsNew.forEach(animals => {
  if (animals.className === 'like-button') {
      animals.addEventListener('click', e => {
          animals.parentElement.classList.add('like');
      });
  }
});
//5.Dinaminis elementų kūrimas (su createElement)
console.log(`5 UZDAVINYS`)
//A)Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
//klasę new ir ant jo paklikinus jis pasidarytų žalias;
//C)Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, 
//kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
//D)Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir 
//HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai 
//turi daryti tai kas ant jų parašyta



