import { useState } from 'react';
import './App.css';

function App() {

    const [spalva, setSpalva] = useState('yellow'); // steitas -spalva, setSpalva- funkcija leidzianti keisti spalvas.[ne masyvas]// const[A,B] = [1,2] a =1 b = usestate-hookas grazina masyva, tame masyve pirmas elementas steito reiksme antra funkcija keiciant steito reiksme. Argumentas yra pradine steito reiksme
    const [skaicius, setSkaiciu] = useState(1)
    //const mygtukas = () => {
    //    console.log('Aš gražus mygtukas')
    //    return mygtukoBrolis;
    //}
//
    //const mygtukoBrolis = () => {
    //    console.log('Aš gražus mygtuko brolis')
    //}

const beArgumentu = () =>{   // neturi parametru nieko neperduoda(be argumentu) nepasileidzia automatiskai todel rasom be skliaustu propse
 console.log('beArgumentu')
}

const suArgumentu = ka =>{   // jeigu su argumentu, tai visada rasome propse su () skliaustais
    console.log('suArgumentu' + ka)
   }
const keistiSpalva = () => {
   // const nauja = spalva === 'yellow' ? 'pink' : 'yellow' ---> negerai taip daryt, galima tik jeigu maza aplikacija;
    //setSpalva(nauja);
    setSpalva(old => old === 'yellow' ? 'pink' : 'yellow');

} 
const keistiSkaiciu = () => {
    
     setSkaiciu(nr => nr + 1 );
     console.log(setSkaiciu)
 
 }

// tiesiogiai steito keisti negalima, galima tik per pagalbines funkcijas, siuo atveju, kaip setSpalva;

  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{color: spalva}}>State</h1>
       <button onClick={beArgumentu}>Be!</button>
       <button onClick={() => suArgumentu('labas')}>Su!</button>
       <button onClick={keistiSpalva}>Kita Spalva</button>
       <h1 style={{color: spalva}}>{skaicius}</h1>
       <button onClick={keistiSkaiciu}>+1</button>
      </header>
    </div>
  );
}

export default App;

//jeigu yra skliaustai prie mygtuko tai jie automatiskai paleidzia funkcija nepaspaudus mygtuko.