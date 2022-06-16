import { useState } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import TreeContext from '../../r2/src/Components/TreeContext';
import './App.scss';
import ld from './Reducers/ld';

const masyvas = [
    {id:3, name: 'Peter', bid: 487.77, date: 'December 17, 2022 03:42:00'},
    {id:7, name: 'Mary', bid: 125.33, date: 'March 17, 2022 03:42:00'},
    {id:8, name: 'Ąžuolas', bid: 78.25, date: '3/1/22'},
    {id:9, name: 'Petras Dainorius', bid: 487.77, date: '2022-06-01T08:13'}
];

function App() {

const [list, dispachList] = useReducer(ld, masyvas) // ld - dispatcheris, masyvas - defaultas
const [select, setSelect] = useState('bid_desc')

useEffect(() => {  //useefect veikia tada kai pasikeicia selectras
dispachList({type: select})

},[select])


    return (
        
        <div className="App">
            <TreeContext.Provider>
            <header className="App-header">
              <h1>Sort reducer</h1>
              <dvi className="kvc">
                <div>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        <option value="date_asc">DATE ASC</option>
                        <option value="date_desc">DATE DESC</option>
                        <option value="bid_asc">BID ASC</option>
                        <option value="bid_desc">BID DESC</option>
                        <option value="name_asc">NAME ASC</option>
                        <option value="name_desc">NAME DESC</option>
                        <option value="name_asc_local">NAME ASC LOC</option>
                        <option value="random">RAND</option>
                    </select>
                </div>
                <div>
                    {
                        list.map(b => 
                        <div>
                            <span>ID: {b.id}</span>
                            <span>NAME: {b.name}</span>
                            <span>BID: {b.bid}</span>
                            <span>DATE: {b.date}</span>
                        </div>)
                    }

                </div>
              </dvi>
            </header>
            </TreeContext.Provider>
        </div>
    
    );

    
}

export default App;