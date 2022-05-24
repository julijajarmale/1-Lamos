import { useState, useEffect } from 'react';
import './App.scss';
import randColor from './Functions/randColor';

function App() {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    const [kv, setKv] = useState([]);
    
    const addKv = () => {
    setKv(k => [...k + rand(5,10), randColor()]) //neteisingai random padarytas!
 
  }
// perkrovus puslai lieka taip pat

useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
  }, []);
  
  useEffect(() => {
    if (null === kv) {
        return;
    }
    localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);
  
//isvalyti mygtukas

const removeKv = () => {
    setKv(k => k.slice(k.length)) 
 
  }


 return (
    <div className="App">
      <header className="App-header">
     
       <div className='kvc'>
       {
       kv ? kv.map((c, i) => <div className='kv' key={i} style = {{backgroundColor:c}}>{i}</div>) : null
       }
       </div>
       <button onClick={addKv}>Prideti</button>
       <button onClick={removeKv}>Išvalyti</button>
       
     
      </header>
    </div>
  );
    
    }
export default App;
