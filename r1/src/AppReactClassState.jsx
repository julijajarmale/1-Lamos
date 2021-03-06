
import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';



function App() {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  //1.
  const [forma, setForma] = useState('circ');

  const keistiForma = () => {
     setForma(old => old === 'circ' ? 'kv' : 'circ');
     
  };
  //2.
  const [random, setRandom] = useState(rand(1, 25));

  const duokManRandom = () => {
    setRandom(rand(1, 25));
 }
  const [forma2, setForma2] = useState('circ');
  const keistiForma2 = () => {
  setForma2(old => old === 'circ' ? 'kv' : 'circ');
  
};
//3.
const [skaicius, setSkaicius] = useState(0);
 
  const pridetiSkaiciu = () => {
    setSkaicius(skaicius + 1)
 }

 const atimtiSkaiciu = () => {
  setSkaicius(skaicius - 3)
}

//4.
const [kvadratukas, setKvadratukas] = useState([]);

const plusKvadratukas = () => {
  setKvadratukas(k => [...k, randColor()]);

}

//5.

const [kvadratukasRed, setKvadratukasRed] = useState([]);

const pridetiRaudona = () => {
  setKvadratukasRed(k => [...k,{backgroundColor:'red'}]);

}
const [kvadratukasBlue, setKvadratukasBlue] = useState([]);

const pridetiMelyna = () => {
  setKvadratukasBlue(k => [...k,{backgroundColor:'blue'}]);

}

const istrintiKvadratukus = () => {
  setKvadratukasBlue(k => k.slice(k.length))
  setKvadratukasRed(k => k.slice(k.length))
}

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p className={forma}></p>
        <button onClick={keistiForma}>CHANGE ME!</button>
        </div>
        <div>
        <p className={forma2}>{random}</p>
        <button onClick={keistiForma2}>CHANGE ME</button>
        <button onClick={duokManRandom}>GIVE ME RANDOM</button>
        </div>
        <div>
        <p>{skaicius}</p>
        <button onClick={pridetiSkaiciu}>+++PLUS+++</button>
        <button onClick={atimtiSkaiciu}>---MINUS---</button>
        </div>
        <div className='kvc'>
        {
       kvadratukas.map((c, i) => <div className='kv' key={i} style = {{backgroundColor:c}}></div>)
       }
        <button onClick={plusKvadratukas}>ADD Kvadratukas</button>
        </div>
        <div className='kvc'>
        {
       kvadratukasRed.map((c, i) => <div className='kv' key={i} style = {{backgroundColor:'red'}}></div>)
       }
        {
       kvadratukasBlue.map((c, i) => <div className='kv' key={i} style = {{backgroundColor:'blue'}}></div>)
       }
        <button onClick={pridetiRaudona}>ADD RED</button>
        <button onClick={pridetiMelyna}>ADD BLUE</button>
        <button onClick={istrintiKvadratukus}>RESET</button>
        
        </div>
      </header>
    </div>
  );
}

export default App;

//1.	Sukurti aplikacij??, kuri turi mygtuk?? change ir atvaizduoja apskritim??.
// Paspaudus mygtuk?? change apskritimas turi pavirsti ?? kvadrat??, o paspaudus
// dar kart?? v??l pavirsti apskritimu.

//2.	Sukurti aplikacij??, kuri turi mygtukus change ir random bei atvaizduoja 
//apskritim?? su random skai??iumi viduje. Paspaudus change mygtuk?? apskritimas 
//kei??iasi ?? sta??iakamp?? kaip pirmame u??davinyje, o paspaudus random mygtuk??,
// skai??ius pasikei??ia ?? rand 5 - 25

//3.	Sukurti aplikacij??, kuri turi mygtukus plus ir minus, bei atvaizduoja
// skai??i?? 0. Paspaudus plus mygtuk??, skai??ius padid??ja 1, o paspaudus
// minus- suma????ja 3

//4. Sukurti aplikacij??, kuri turi mygtuk?? add, kur?? paspaudus vien?? kart?? 
//atsiranda m??lynas kvadratas, paspaudus du - du kvadratai ir t.t.

//5. Sukurti aplikacij??, kuri turi mygtukus add red, add blue ir reset.
// Paspaudus add red, prisideda raudonas kvadratas, paspaudus add 
//blue - m??lynas ir t.t. Spaudin??jant prisideda vis daygiau kvadrat??. 
//Paspaudus reset viskas i??sitrina
