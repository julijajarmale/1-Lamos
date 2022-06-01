import KoltForm from './Components/Kolt/kolt-form';
import './kolt.scss';
import { useState, useEffect} from "react";
import { create, read, remove} from './Functions/localStorageKolt';
import KoltList from './Components/Kolt/kolt-lits';


function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [kolt, setKolt] = useState(null);


    const [createKolt, setCreateKolt] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

   // Read (Kolt-form)
   
    useEffect(() => {
        setKolt(read());
    }, [lastUpdate]);

    // Create (Kolt-form)
     useEffect(() => {
        if (null === createKolt) {
            return;
        }
        create(createKolt);
        setLastUpdate(Date.now());

    }, [createKolt]);

    // Delete
    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        remove(deleteData);
        setLastUpdate(Date.now());

    }, [deleteData]);

    return (
        <div className="App">
            <header className="App-header">
            <div className="container">
            <div>
            <KoltForm setCreateKolt={setCreateKolt}></KoltForm>
            </div>
            <div>
            <KoltList kolt={kolt} setDeleteData={setDeleteData}></KoltList>
            </div>
            </div>
            </header>
        </div>
    );
}

export default App;


//
//<main class="container">
//<form class="form">
//    <div class="form-row">
//        <h1>Get In Touch</h1>
//    </div>
//    <div class="form-row">
//        <input type="text" class="input input1" placeholder="First Name">
//        <input type="text" class="input input1" placeholder="Last Name" >
//    </div>