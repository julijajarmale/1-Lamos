import './App.scss';
import { useState } from 'react';
import rand from './Functions/random';

function App() {
// 1 užduotis
    const [kv, setKv] = useState([]);
    const [textValue, setTextValue] = useState('')

    const inputValue = e =>{
        setTextValue(e.target.value);
    }
    
    const prideti = () => {
        const kiekis = textValue;
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push(''); 
        }
        setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }
    
// 2 užduotis
     const [katinukai, setKatinukai] = useState([]);
     const [vardasValue, setVardasValue] = useState('')
     const [svorisValue, setSvorisValue] = useState('')

     const vardasInputValue = e =>{
        setVardasValue(e.target.value);
    }

    const svorisInputValue = e =>{
        setSvorisValue(e.target.value);
    }


     const pridetiKatinuka = () => {
     const vardas = vardasValue;
     const svoris = svorisValue;
     setKatinukai(x => [...x, [vardas, svoris]]);
    // setKatinukai(x => null === x ? [vardas, svoris] : [...x, [vardas, svoris]]);
    }

    katinukai.sort((a, b) => b[1] - a[1]);

    let bendrasSvoris = 0;
    for (let i = 0; i < katinukai.length; i++){
        bendrasSvoris = Number(katinukai[i][1]) + bendrasSvoris
    }
    console.log(bendrasSvoris)

// 3 užduotis
    const [pirmasInput, setPirmasInput] = useState('50');
    const [antrasInput, setAntrasInput] = useState('100');

    const inputFirst = e =>{
        setPirmasInput(e.target.value);
    }

    const inputSecond = e =>{
        setAntrasInput(e.target.value);
    }
    

    
    return (
        <div className="App">
            <header className="App-header">
            <fieldset>
              <legend>1 Užduotis</legend>
              <div className="kvc">
                    {
                        kv ? kv.map((k, i) => <div key={i} className="kv">{k}{rand(100, 200)}</div>) : null
                    }
               </div>
               <input type="text" onChange={inputValue} value={textValue}></input>
               <button onClick={prideti}>Pridėti kvardatėlį</button>
            </fieldset>
            <fieldset>
              <legend>2 Užduotis</legend>
              <input type="text" placeholder="Katinuko vardas" onChange={vardasInputValue} value={vardasValue}></input>
              <input type="text" placeholder="Katinuko svoris" onChange={svorisInputValue} value={svorisValue}></input>
              <button onClick={pridetiKatinuka}>Pridėti katinuką</button>
              <div >
              <legend>Katinukų sąrašas:</legend>
                     {
                    katinukai.map((c, i) => <div key={i}>{c}</div>)
                    }
               </div>
               <legend>Bendras katinukų svoris: {bendrasSvoris}</legend>
            </fieldset>
            <fieldset>
              <legend>3 Užduotis</legend>
              <input type="text" onChange={inputFirst} value ={pirmasInput}></input>
              <input type="text" onChange={inputSecond} value ={antrasInput}></input>
            </fieldset>
            </header>
        </div>
    );
}

export default App;

//1.Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką,
//atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau 
//egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio 
//viduryje turi būti pavaizduotas rand skaičius 100 - 200.

//2.Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą.
//Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio.
//Skaičiuoti ir atvaizduoti bendrą katinukų svorį.

//3.Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50.
// Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti
//ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.
