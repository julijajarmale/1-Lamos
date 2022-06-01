import { useState } from "react";

function KoltForm({setCreateKolt}) {

const [id, setId] = useState('');
const [code, setCode] = useState('');
const [time, setTime] = useState('');
const [km, setKm] = useState('');

const koltCreate = () => {
    const data = {id, code, time, km};
    setCreateKolt(data);
    setId('');
    setCode('');
    setTime('');
    setKm('');
}

    return (
        <div className="form-column">
        <div className='form'>
        <div>
          <h2>Naujo paspirtuko forma</h2>  
        </div>
        <div className="form-group">
            <label className="label">ID:</label>
            <input type="text" className="form-row" onChange={e => setId(e.target.value)} value={id}/>
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