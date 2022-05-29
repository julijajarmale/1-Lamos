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
     const katinukuSarasas =[]
     
    setKatinukai(x => null === x ? [...katinukuSarasas] : [...x, ...katinukuSarasas]);
    katinukuSarasas.push(vardas, svoris); 
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
              <div className="kvc">
              <legend>Katinukų sąrašas</legend>
                     {
                    katinukai.map((c, i) => <div key={i}>{c}</div>)
                    }
               </div>
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
