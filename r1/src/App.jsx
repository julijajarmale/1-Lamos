
import './App.scss';
import Pokemons from './Components/Pokemons';



function App() {

    return (
        
        <div className="App">
           
            <header className="App-header">
              <h1>REACT WORKSHOP</h1>
              <div className="kvc">
                <div>
                <ul className="list-group">
               <Pokemons></Pokemons>
                </ul>
                </div>
               
        
             </div>
            </header>
           
        </div>
    
    );

    
}

export default App;