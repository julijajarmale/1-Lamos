
import { useState, useRef, useEffect } from 'react';
import './App.scss';

function App() {

const [count, setCount] = useState(null);

const mano = useRef(0);
const panda = useRef();

useEffect(() => {    //sis useeffect skirtas tai vietai kai pirma karta uzkrauname puslpai
setCount(parseInt(localStorage.getItem('count') ?? 0 )); // A = B ?? ==> reiskia, kad turim default reiksme, kuria priskiriama A. jei nera reiksmes B einame ant defaulto.
                                                            //parseInt pavercia i numberi tas pats, kad Number()

}, []);

useEffect(() => {      
 if (null === count){  // is use effecto vieta tada kai refreshinam
     return;
 }
 localStorage.setItem('count', count) 
    }, [count]);



const add = () => {
    setCount(c =>c + 1);
    mano.current = mano.current + 3;
    console.log(mano.current);
    
    const p = panda.current
    //console.log(p.dataset.panda) //dataset. is plain js. duomenu saugojimas html'e.
}

const addCat = () => {
    localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis']));
}

const getCat = () => {
    console.log(JSON.parse(localStorage.getItem('katinukas')));
}

const remCat = () => {
    localStorage.removeItem('katinukas');
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>useRef LocalStorage {count}</h1>
        <button onClick={add}>+1</button>
        <div ref={panda} data-panda="miega"></div>

        <button onClick={addCat}>Add Cat</button>
        <button onClick={getCat}>Get Cat</button>
        <button onClick={remCat}>Remove Cat</button>

      </header>
    </div>
  );
}

export default App;

//https://dmitripavlutin.com/react-useref-guide/
//useRef current ir t.t. //<div id ="panda" data-panda="miega"></div>
//console.log(p.dataset.panda) <--- placiai naudojamas dalykas.
//referensas - susikuriam taga, pridedame referensa ir tada rodome kad nukreipia
//referensas i ta taga., taip galima pazymeti elementa.


//LOCAL STORAGE - tarsi nuotoline duomenu baze.
//nieko bendro su reaktu
//narsykles feature - application--> local storage
//key ir value, ten galima pasideti informacija, kuri niekur nedingsta.
//value gali buti tiktai stringas;objekta galima saugoti su json.
//norint ikelt pvz masyva reikia sujsonininti tada istraukti stringa ir ikelt;
//