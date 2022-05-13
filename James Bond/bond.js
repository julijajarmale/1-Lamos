//perziureti css selectors
console.log(`JS and HTML`)

const tagH1 = document.querySelector('h1');
const tagH1Kitas = document.querySelector('h1:last-of-type');
const tagH1Kitas2 = document.querySelector('h1 + h1');

const tagAll = document.querySelectorAll('h1')

console.log(tagH1)
console.log(tagH1Kitas)
console.log(tagH1Kitas2)
console.log(tagAll[1])
console.log(tagAll[0])

tagAll.forEach(h1 => {
    console.log(h1)
    h1.style.color = 'pink'
    h1.style.backgroundColor = 'yellow'
    h1.innerText = 'Valio!' 
    h1.innerHTML ='<i>Valio Valio!</i>'
});

//EVENT
//1. Susirandame taga <>
//2. Susirandam ivyki
//3. Pradedame stebeti// vienu metu galima stebeti vieno elemento viena ivyki;

const but = document.querySelector('button');

but.addEventListener('click',() =>{
    console.log('atliktas paspaudimas')
    but.style.color = but.style.color === 'red'? 'black' : 'red';
}); // calbackas, elementas kai ivyksta ivykis

tagAll.forEach(h1 => {

    h1.addEventListener('click', () => {
        h1.style.color = h1.style.color === 'red'? 'black' : 'red';
        console.log(e);
    });
});

const a = document.querySelector('a');
a.addEventListener('click', e =>{
    e.preventDefault();
    e.target.style.color = 'green' 
});

document.querySelector('#vaikas').addEventListener('click', e =>{
    e.stopPropagation(); // event bubblinimosi stabdymas, kad nenueitu nuo vaiko iki tevo 
    console.log('vaikas')
    e.target.style.backgroundColor = 'black' 
    e.target.style.color = 'green' 
});

document.querySelector('#tevas').addEventListener('click', e =>{
    console.log('tevas')
    document.querySelector('#tevas').style.backgroundColor='black'
});



