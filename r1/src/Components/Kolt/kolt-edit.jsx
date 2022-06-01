import { useEffect, useState } from "react";

function KoltEdit({modalData, setModalData, setEditData}) {

    const [code, setCode] = useState('');
    const [time, setTime] = useState('1');
    const [km, setKm] = useState('');

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setCode(modalData.code);
        setTime(modalData.time);
        setKm(modalData.km);
    }, [modalData]);

    const koltEdit = () => {
        const data = {code, time, km, id: modalData.id};
        setEditData(data);
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return (
        <div className="modal">
        <div className='form'>
        <div>
          <h2>Atnaujinti paspirtuko informaciją</h2>  
        </div>
        <div className="form-group">
            <label className="label">Registration Code:</label>
            <input type="text" className="form-row" onChange={e => setCode(e.target.value)} value={code}/>
        </div>
        <div className="form-group">
            <label className="label">Last time used:</label>
            <input type="text" className="form-row"  onChange={e => setTime(e.target.value)} value={time}/>
        </div>
        <div className="form-group">
            <label className="label">Total Kilometers Ride:</label>
            <input type="text" className="form-row" onChange={e => setKm(e.target.value)} value={km}/>
        </div>
        <button type="button" className="btn" onClick={() => setModalData(null)}>Uždaryti</button>
        <button type="button" className="btn" onClick={koltEdit}>Išsaugoti</button>

    </div>
    </div>
              
    );
}

export default KoltEdit;