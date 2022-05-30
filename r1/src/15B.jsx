import { useState } from 'react';
import './App.scss';
import getId from './Functions/getId';



function App() {
const [kv, setKv] = useState([]);

const addKv= () => {
setKv(k => [...k, getId('KV')]); //raktas vadinamas kaip norim
}


    return (
        <div className="App">
            <header className="App-header">
            <div className="kvc">
                    {
                    kv.map((k, i) => <div key={i} className="kv">{k}</div>)
                    }
            </div>
            <button onClick={addKv}>ADD</button>
            </header>
        </div>
    );
}

export default App;