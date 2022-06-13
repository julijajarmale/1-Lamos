import { useEffect, useState } from "react";

function KoltEdit({modalData, setModalData, setEditData}) {

    const current = new Date();
    
    const [code, setCode] = useState('');
    const [time, setTime] = useState('1');
    const [newTime, setNewTime] = useState((`${current.getFullYear()}-0${current.getMonth()+1}-${current.getDate()}`));
    const [km, setKm] = useState('');
    const [newKm, setNewKm] = useState('');
    const [isBusy, setIsBusy]=useState('0');

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setCode(modalData.code);
        setTime(modalData.time);
        setNewTime(modalData.newTime);
        setKm(modalData.km); 
        setNewKm(modalData.newKm);
        setIsBusy(modalData.isBusy);
    }, [modalData]);

    const koltEdit = () => {
        const data = {
            code, 
            time, 
            newTime, 
            km, 
            newKm,
            isBusy: isBusy ? 'true' : false,
            id: modalData.id};
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
            <label className="label">New date and time:</label>
            <input type="date" className="form-row"  onChange={e => setNewTime(e.target.value)} value={newTime}/>
        </div>
        <div className="form-group">
            <label className="label">Total Kilometers Ride:</label>
            <input type="text" className="form-row" onChange={e => setKm(e.target.value)} value={km}/>
        </div> 
        <div className="form-group">
            <label className="label">Add New Kilometers</label>
            <input type="text" className="form-row" onChange={e => setNewKm(e.target.value)} value={newKm}/>
        </div>  
        <div className="form-group">
                <small>Check if busy</small>
                <input type="checkbox" checked={isBusy ? 1 : 0} onChange={() => setIsBusy(isBusy ? 0 : 1)}/>
        </div> 
        <button type="button" className="btn2" onClick={() => setModalData(null)}>Uždaryti</button>
        <button type="button" className="btn" onClick={koltEdit}>Išsaugoti</button>

    </div>
    </div>
              
    );
}

export default KoltEdit;