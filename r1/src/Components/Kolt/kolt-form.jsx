import { useState } from "react";
import randLetters from "../../Functions/randLetters";

function KoltForm({setCreateKolt}) {
    
const [id, setId] = useState('');
const [code, setCode] = useState(randLetters());
const [time, setTime] = useState(new Date());
const [km, setKm] = useState(0);
const [isBusy, setIsBusy]=useState('1');
const [checkBusy, setCheckBusy] = useState(({a: false, b: false} ));

const current = new Date();

const koltCreate = () => {
    const data = {id, code, time, km, isBusy, checkBusy};
    setCreateKolt(data);
    setId('');
    setCode('');
    setTime((`${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`));
    setKm(0);
    setIsBusy(1);
    setCheckBusy(({a: false, b: false} ));
}




    return (
        <div className="form-column">
        <div className='form'>
        <div>
          <h2>Naujo paspirtuko forma</h2>  
        </div>
        <div className="form-group">
            <label className="label">Registration Code:</label>
            <input type="text" className="form-row" onChange={e => setCode(e.target.value)} value={code}/>
        </div>
        <div className="form-group">
            <label className="label">Last time used:</label>
            <input type="text" className="form-row" onChange={e => setTime(e.target.value)} value={time}/>
        </div>
        <div className="form-group">
            <label className="label">Total Kilometers Ride:</label>
            <input type="text" className="form-row" onChange={e => setKm(e.target.value)} value={km}/>
        </div>
        <button type="button" className="btn" onClick={koltCreate}>Pridėti</button>
    </div>
    </div>
    );
}

export default KoltForm;

