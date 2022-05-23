
import './App.scss';
import { useEffect, useState } from 'react';
import Books from './Components/011/books';
import axios from 'axios';


function App() {

const [count, setCount] = useState(1);
const [books, setBooks] = useState([]);

useEffect(() => {
    console.log('YES')
    axios.get('https://in3.dev/knygos/')   
    .then(res => {
        console.log(res.data);
        setBooks(res.data);
    })                                            //READY!  kai paleidziam callbacka kurio argumentas yra tuscias masyvas, inicijuojame, kad paleista ir galima daryti kreipimasi i serveri;
}, [])                                          //paleidzia viena vieninteli karta, kai viskas uzsikrauna


  return (
    <div className="App">
      <header className="App-header">
          <h1>{count}</h1>
          <button onClick={() => setCount (c => c + 1)}>+1</button>
          <Books books={books}></Books>
          
      
      </header>
    </div>
  );
}

export default App;

//ismokome kreiptis i serveri, gauti informacija ir ja atvaizduoti;
//su books komponentu
//vietoj axios galima naudoti fetch