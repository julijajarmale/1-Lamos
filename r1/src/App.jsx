import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import booksReducer from './Reducers/booksReducer';



function App() {
//const [books, setBooks] = useState([]);
const [books, dispachBooks] = useReducer(booksReducer, []);

useEffect(() => {
    axios.get('https://in3.dev/knygos/')   
    .then(res => {
        const action ={
        payload:res.data, 
        type:'get_from_server'
        }
        dispachBooks(action);
    })                                            //READY!  kai paleidziam callbacka kurio argumentas yra tuscias masyvas, inicijuojame, kad paleista ir galima daryti kreipimasi i serveri;
}, [])  




    return (
        <div className="App">
            <header className="App-header">
            <div>
              {
                books.length? books.map(b => <div key={b.id}>{b.title}</div>): <h2>Loading...</h2>
              }
          </div>

            </header>
        </div>
    );

    

}

export default App;