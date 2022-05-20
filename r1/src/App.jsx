
import './App.css';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
dogs.sort(function(a, b){return b.length - a.length});

function App() {
 /* let newDogs = dogs.map(function (item) {
    if(dogs[i](0) === )
      return false; // This will skip current element
    else
        // logic for mapping acceptable elements
  })*/
  return (
    <div className="App">
      <header className="App-header">
      <div className='kvc'>
      {
       dogs.map((d, i) => <div className='kv' key={i}>{d}</div>)
      }
      </div>
      <div className='kvc'>
      {
       dogs.map((d, i) => <div className='circ' key={i}>{i}.{d}</div>)
      }
      </div>
      <div className='kvc'>
      {
       dogs.map((d, i) => <div className={i % 2 ===0 ? 'kv': 'circ'} key={i}>{i}.{d}</div>)
      }
      </div>
      <div className='kvc'>
      {
       dogs.map((d, i) => <div className={'circ'} key={i}>{i}.{d}</div>)
      }
      </div>
      

      </header>
    </div>
  );
}

export default App;