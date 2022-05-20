
import './App.css';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
dogs.sort(function(a, b){return b.length - a.length});

const newDogs = [];
for(let i =0; i< dogs.length; i++){
 if(dogs[i][0].toUpperCase() !== dogs[i][0]){
   newDogs.push(dogs[i])
 }
}
console.log(newDogs)

const newDogs2 = [];

for(let i =0; i< dogs.length; i++){
 let index = dogs[i].length
 console.log(index)
 newDogs2[i] = dogs[i]+index
 console.log(newDogs2[i])
  newDogs2.push(newDogs2[i])
  }
  console.log(newDogs2)
 

function App() {



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
       newDogs.map((d, i) => <div className={'circ'} key={i}>{i}.{d}</div>)
      }
      </div>

      <div className='kvc'>
      {
       newDogs2.map((d,i) => <div className={d.slice(-1) > 6 ? 'colorGreen':'colorRed'} key={i}>{d}</div>)
      }
      </div>

      </header>
    </div>
  );
}

export default App;