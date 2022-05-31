import KoltForm from './Components/Kolt/kolt-form';
import './kolt.scss';
import { useState, useEffect} from "react";
import { create } from './Functions/localStorageKolt';

function App() {

    const [createKolt, setCreateKolt] = useState(null);


    // Create (Kolt-form)
     useEffect(() => {
        if (null === createKolt) {
            return;
        }
        create(createKolt);
        

    }, [createKolt]);


    return (
        <div className="App">
            <header className="App-header">
            <div className="container">
            <KoltForm setCreateKolt={setCreateKolt}></KoltForm>
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