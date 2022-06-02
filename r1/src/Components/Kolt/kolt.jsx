function OneKolt({ oneKolt, setDeleteData, setModalData }) {

    const koltDelete = () => {
        setDeleteData(oneKolt);
    }

    const koltEdit = () => {
        setModalData(oneKolt);
    }

    return (
        <li className="list-item">
            <div className="item">
                <div className="content">
                    <td>{oneKolt.id}</td>
                    <td>{oneKolt.code}</td>
                    <td>{oneKolt.time}</td>
                    <td>{oneKolt.km}</td>
                    <td>{oneKolt.isBusy === 1? <div className="uzimtas">Uzimtas</div>:<div className="laisvas">Laisvas</div>}</td>
                    
                    <div className="buttons">
                    <button type="button" className="btn2" onClick={koltEdit}>Redaguoti</button>
                    <button type="button" className="btn2" onClick={koltDelete}>Ištrinti</button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default OneKolt;