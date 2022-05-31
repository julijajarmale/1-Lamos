import './App.scss';
import { useState, useEffect} from 'react';
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
    useEffect(() => {
        setKatinukai(JSON.parse(localStorage.getItem('katinukai') ?? '[]'));
      }, []);

      useEffect(() => {
        if (null === katinukai) {
            return;
        }
        localStorage.setItem('katinukai', JSON.stringify(katinukai));
      }, [katinukai]);

      const istrintiKatinukus = () => {
        setKatinukai([]);
      };
      

    katinukai.sort((a, b) => b[1] - a[1]);

    let bendrasSvoris = 0;
    for (let i = 0; i < katinukai.length; i++){
        bendrasSvoris = Number(katinukai[i][1]) + bendrasSvoris
    }

// 3 užduotis
    const [pirmasInput, setPirmasInput] = useState('50');
    const [antrasInput, setAntrasInput] = useState('100');

    const inputFirst = e =>{
        setPirmasInput(e.target.value);
        setAntrasInput(e.target.value * 2);
    }

    const inputSecond = e =>{
        setAntrasInput(e.target.value);
        setPirmasInput(e.target.value / 2);
    }
    
// 4 užduotis
    
    const [text, setText] = useState('')
    const [selectColor, setSelectColor] = useState('pink')
    const [selectFont, setSelectFont] = useState('')
    const [selectSize, setSelectSize] = useState('')
    
    const updateText =(e) => {
        setText(e.target.value);
      };

// 5 užduotis

      const [kvadratai, setKvadratas] = useState([]);
      const[spalva, setSpalva] = useState('');
      const[plotis, setPlotis] = useState('100px');
      const[aukstis, setAukstis] = useState('100px');
    

      const pridetiKvadrata = () =>{
          setKvadratas((k) => [...k, kvadratai]);
      }

      const keistiSpalva = e =>{
        setSpalva(e.target.value);
    }
      
    const keistiPloti = e =>{
      setPlotis(`${e.target.value}px`);
  }
    const keistiAuksti= e =>{
    setAukstis(`${e.target.value}px`);
}
  //const saugotiKvadrata = useRef()
  //console.log(saugotiKvadrata.current)

 

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
               <button onClick={istrintiKatinukus}>Naujas sąrašas</button>
            </fieldset>
            <fieldset>
              <legend>3 Užduotis</legend>
              <input type="text" onChange={inputFirst} value ={pirmasInput}></input>
              <input type="text" onChange={inputSecond} value ={antrasInput}></input>
            </fieldset>
            <fieldset>
              <legend>4 Užduotis</legend>
              <input type="text" onChange={updateText} value ={text}></input>
              <select value={selectColor} onChange={e => setSelectColor(e.target.value)}>
                <option value ="pink">Pink</option>
                <option value ="violet">Violet</option>
                <option value ="yellow">Yellow</option>
                <option value ="green">Green</option>
                <option value ="blue">Blue</option>
              </select>
              <select value={selectFont} onChange={e => setSelectFont(e.target.value)}>
                <option value ="Arial">Arial</option>
                <option value ="Times New Roman">Times New Roman</option>
                <option value ="Courier">Courier</option>
                <option value ="Gothic">Gothic</option>
                <option value ="Broadway">Broadway</option>
              </select>
              <select value={selectSize} onChange={e => setSelectSize(e.target.value)}>
                <option value ="10">10px</option>
                <option value ="15">20px</option>
                <option value ="20">30px</option>
                <option value ="25">40px</option>
                <option value ="30">50px</option>
              </select>
              <p style={{color: selectColor, fontFamily: selectFont, fontSize: Number(selectSize)}}>{text}</p>
              
            </fieldset>
            <fieldset>
              <legend>5 Užduotis</legend>
              <label>Plotis</label>
              <input type="range" min={10} max={200} onChange={keistiPloti} value={plotis}></input>
              <label>Aukštis</label>
              <input type="range" min={10} max={200} onChange={keistiAuksti} value={aukstis}></input>
              <input type="color" onChange={keistiSpalva} value = {spalva}></input>
              <button onClick={pridetiKvadrata}>SUKURTI</button>
              <button>IŠSAUGOTI</button>
              <div className='kvc'>
              {
                      kvadratai.map((k, i) => <div key={i}  style={{background: spalva, width: plotis, height: aukstis}}>{k}</div>)
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

//3.Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50.
// Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti
//ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs.

//4.Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti 
//atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų 
//fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti 
//atvaizduojamo teksto išvaizdą.

//5.Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range 
//vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir
// išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu.
// Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: 
//range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. 
//Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką 
//sukurti- atsiranda naujas reguliuojamas kvadratas.