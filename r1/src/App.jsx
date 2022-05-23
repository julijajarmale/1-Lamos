
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

const [user, setUsers] = useState([]);

useEffect(() => {
    console.log('YES')
    axios.get('https://jsonplaceholder.typicode.com/users')   
    .then(res => {
        console.log(res.data);
        setUsers(res.data);
    })                                            //READY!  kai paleidziam callbacka kurio argumentas yra tuscias masyvas, inicijuojame, kad paleista ir galima daryti kreipimasi i serveri;
}, [])     

  return (
    <div className="App">
      <header className="App-header">
          <h1>{count}</h1>
          <button onClick={() => setCount (c => c + 1)}>+1</button>
          <Books books={books}></Books>
          <h1>USER NAMES:</h1>
          <div>
              {
                  user.map(u => <div key={u.id}>{u.name}</div>)
              }
          </div>
          
      
      </header>
    </div>
  );
}

export default App;

//ismokome kreiptis i serveri, gauti informacija ir ja atvaizduoti;
//su books komponentu
//vietoj axios galima naudoti fetch