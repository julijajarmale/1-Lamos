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




