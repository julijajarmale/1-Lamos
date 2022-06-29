import { useEffect, useState } from "react";
import FrontContext from "./Components/front/FrontContext";
import ScooterImage from './Components/scooter-image';
import axios from 'axios';
import KoltList from "./Components/front/KoltList";
import KoltForm from "./Components/Create";
import LogIn from "./Components/front/Login";

function Front() {

    const [kolts, setKolts] = useState(null);

    //READ
    useEffect(() => {
        axios.get('http://localhost:3003/front/paspirtukai')
            .then(res => {
                console.log(res.data);
                setKolts(res.data);
            });
    }, []);
    return (
        <FrontContext.Provider value={
            {
                kolts,
            }
        }>
             <div className="App">
            <header className="App-header">
            </header>
            <div className="container">
            <div className="row">
            <div className="col-lg-5 col-ml-12">
            <LogIn></LogIn>
            </div>
            <div className="col-7 col-ml-12">
                <ScooterImage></ScooterImage>
            </div>
            <div className="col-12">
            <KoltList/>
           
            </div>
            </div>
            
            </div>
            
        </div>
        </FrontContext.Provider>
    )
}

export default Front