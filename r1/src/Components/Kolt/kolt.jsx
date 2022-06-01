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
                    <b>{oneKolt.id}</b>
                    <i>{oneKolt.code}</i>
                    <i>{oneKolt.time}</i>
                    <i>{oneKolt.km}</i>
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