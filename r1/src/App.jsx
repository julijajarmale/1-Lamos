import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create'; // su defaultu be skliaustu
import List from './Components/crud/List';
import { create, read } from './Functions/localStorage'; // jeigu be default export su skliaustais
// import './App.scss';
// import getId from './Functions/getId';


function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now()); // cia padarom, kad is karto updatintusi exai. Reiskia, kad pasikeite duomenys, galima ir delete ir t.t.

    const [exes, setExes] = useState(null);


    const [createData, setCreateData] = useState(null);
    //Read 2nd Crud Element
    useEffect(() => {
    setExes(read());
}, [lastUpdate])


    // Create 1st Crud element
    useEffect(() => {
        if (null === createData) {
            return;
        }
       create(createData)
       setLastUpdate(Date.now());

    }, [createData])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setCreateData={setCreateData}></Create>
                    </div>
                    <div className="col-8">
                        <List exes={exes}></List>
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;