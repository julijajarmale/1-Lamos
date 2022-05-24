import { useState } from 'react';
import './App.scss';

function App() {

     function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

  const [gyvunas, setGyvunas] = useState(0)
 
  const pridetiGyvuna = () => {
    setGyvunas(g => [...g]);
  
  }


  return (
    <div className="App">
      <header className="App-header">
         <div className="container">
            <h1>GANYKLA</h1>
                <div className="column">
                    <h2>Karvės</h2>
                    {
       gyvunas.map((g, i) => <div className='karve' key={i}></div>)
       }
                </div>
                <div className="column">
                    <h2>Avys</h2>
                    {
       gyvunas.map((g, i) => <div className='avis' key={i}></div>)
       }
                </div>
         <button onClick={pridetiGyvuna}>Į GANYKLĄ</button>
     </div>
      </header>
    </div>
    
  );
}

export default App;