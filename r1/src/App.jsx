import KoltForm from './Components/Kolt/kolt-form';
import './kolt.scss';
import { useState, useEffect} from "react";
import { create, read, remove, edit } from './Functions/localStorageKolt';
import KoltList from './Components/Kolt/kolt-lits';
import KoltEdit from './Components/Kolt/kolt-edit';


function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [kolt, setKolt] = useState(null);
    const [modalData, setModalData] = useState(null);


    const [createKolt, setCreateKolt] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);

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

     // Edit
     useEffect(() => {
        if (null === editData) {
            return;
        }
        edit(editData);
        setLastUpdate(Date.now());

    }, [editData]);

    return (
        <>
        <div className="App">
            <header className="App-header">
            <div className="container">
            <div>
            <KoltForm setCreateKolt={setCreateKolt}></KoltForm>
            </div>
            <div>
            <KoltList kolt={kolt} setDeleteData={setDeleteData} setModalData={setModalData}></KoltList>
            </div>
            </div>
            </header>
        </div>
        <KoltEdit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></KoltEdit>
        </>
    );
}

export default App;

