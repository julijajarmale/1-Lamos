function OneKolt({ oneKolt, setDeleteData, setModalData }) {

    const koltDelete = () => {
        setDeleteData(oneKolt);
    }

    const koltEdit = () => {
        setModalData(oneKolt);
    }

    return (
        <li className="list-item">
                <div className="content">
                    <b>{oneKolt.id}</b>
                    <span>{oneKolt.code}</span>
                    <span>{oneKolt.time}</span>
                    <span>{oneKolt.km} km</span>
                    <span>{oneKolt.isBusy ? <div className="uzimtas">Busy</div>:<div className="laisvas">Available</div>}</span>
                    <div className="buttons">
                    <button type="button" className="btn2" onClick={koltEdit}>Redaguoti</button>
                    <button type="button" className="btn2" onClick={koltDelete}>Ištrinti</button>
                    </div>
                </div>
            
        </li>
    );
}

export default OneKolt;