import { useContext } from "react";
import KoltContext from "./KoltContext";

function Kolt({kolt}) {

    const {setDeleteData, setModalData} = useContext(KoltContext);
    const koltDelete = () => {
        setDeleteData({kolt});
    }

    const koltEdit = () => {
        setModalData({kolt});
    }

    return (
        <li className="list-item">
                <div className="content">
                    <span className="item">{kolt.code}</span>
                    <span className="item">{kolt.time}</span>
                    <span className="item">{kolt.km} km</span>
                    <span className="item">{kolt.isBusy ? <div className="uzimtas">Busy</div>:<div className="laisvas">Available</div>}</span>
                    <div className="buttons">
                    <button type="button" className="btn2" onClick={koltEdit}>Edit</button>
                    <button type="button" className="btn2" onClick={koltDelete}>Delete</button>
                    </div>
                </div>
            
        </li>
    );
}

export default Kolt;