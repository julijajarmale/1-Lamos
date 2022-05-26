import { useState } from 'react';
import './App.scss';


function App() {

    const[text, setText] = useState('');
    const[select, setSelect] = useState('three');
    const[cb, setCb] = useState({a: false, b: false, c: true, d: true});
    const[radio, setRadio] = useState('c');
    const[color, setColor] = useState('');

    const inputText = e =>{
        console.log('gfh'.padStart(10, 0))
        setText(e.target.value + '*')
    }

    const cbClick = c =>{
        setCb(checkBox => ({...checkBox, [c]: !checkBox[c]}));
    }

    const inputColor= e =>{
        setColor(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
            <fieldset>
            <input type="text" onChange={inputText} value={text}></input>
            </fieldset>
            <fieldset>
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value ="one">Vienas</option>
                <option value ="two">Du</option>
                <option value ="three">Trys</option>
                <option value ="four">Keturi</option>
            </select>
            </fieldset>
            <fieldset>
                <legend>CHECKBOX</legend>
                A<input type = "checkbox" onChange={() => cbClick('a')} checked={cb.a}></input>
                B<input type = "checkbox" onChange={() => cbClick('b')} checked={cb.b}></input>
                C<input type = "checkbox" onChange={() => cbClick('c')} checked={cb.c}></input>
                D<input type = "checkbox" onChange={() => cbClick('d')} checked={cb.d}></input>
            </fieldset>
            <fieldset>
                <legend>RADIO BUTTON</legend>
                A<input type = "radio" name='r' value='a' onChange={e => setRadio(e.target.value)} checked={radio === 'a'}></input>
                B<input type = "radio" name='r' value='b' onChange={e => setRadio(e.target.value)} checked={radio === 'b'}></input>
                C<input type = "radio" name='r' value='c' onChange={e => setRadio(e.target.value)} checked={radio === 'c'}></input>
                D<input type = "radio" name='r' value='d' onChange={e => setRadio(e.target.value)} checked={radio === 'd'}></input>
            
            </fieldset>
            <fieldset>
                <legend>COLOR</legend>
                <p className='kv' style ={{background: color}}></p>
                <input type = "color" onChange={inputColor} value ='color'></input>
             
            
            </fieldset>
            </header>
        </div>
    );
}

export default App;