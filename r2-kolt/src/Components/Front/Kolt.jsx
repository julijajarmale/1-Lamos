
function Kolt({kolt}) {

    return (
        <li className="list-item">
                <div className="content">
                    <span className="item">{kolt.code}</span>
                    <span className="item">{kolt.time}</span>
                    <span className="item">{kolt.km} km</span>
                    <span className="item">{kolt.isBusy ? <div className="uzimtas">Busy</div>:<div className="laisvas">Available</div>}</span>
                    <div className="form-group">
                    <label>Your comment here</label>
                    <textarea className="form-control"rows="3"></textarea>
                    </div>
                    <div className="buttons2">
                    <button className="btn" >Make reservation</button>
                    <button className="btn" >Add comment</button>
                     </div>
                </div>
            
        </li>
    );
}

export default Kolt;