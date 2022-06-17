
import { useState } from 'react';
import './App.scss';
import Pokemon from './Components/poke';


function App() {

const [poke, setPoke] = useState([])

const getData = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setPoke(data.results)
 
    })     
           
};
getData()

    return (
        
        <div className="App">
           
            <header className="App-header">
              <h1>REACT WORKSHOP</h1>
              <div className="kvc">
                <div>
                <ul className="list-group">
               <Pokemon poke={poke}></Pokemon>
                </ul>
                </div>
               
        
             </div>
            </header>
           
        </div>
    
    );

    
}

export default App;