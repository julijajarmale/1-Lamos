import { useContext } from "react";
import FrontContext from "./FrontContext";
import { useState } from "react";


function Kolt({ kolt }) {


  const { setCreateComment } = useContext(FrontContext);

  const [com, setCom] = useState('');
  
  const handleComment = () => {
    setCreateComment({com, koltId: kolt.id});
    setCom('');
}
  return (
    <li className="list-item">
      <div className="content">
        <span className="item">{kolt.code}</span>
        <span className="item">{kolt.time}</span>
        <span className="item">{kolt.km} km</span>
        <span className="item">
          {kolt.isbusy ? (
            <div className="uzimtas">Busy</div>
          ) : (
            <div className="laisvas">Available</div>
          )}
        </span>
        <div className="form-group">
        <ul className="list-group mt-2">
                    {
                    kolt.coms ? kolt.coms.slice(0, -5).split('-^o^-,').map((c, i) => <li className="list-group-item" key={i}>{c}</li>) : null
                    }
                </ul>
                <div className="form-group mt-3">
                    <textarea className="form-control" value={com} onChange={e => setCom(e.target.value)} rows="3"></textarea>
                </div>
        </div>
        <div className="buttons2">
          <button className="btn" onClick={handleComment}>Add comment</button>
          <button className="btn">Make reservation</button>
        </div>
      </div>
    </li>
  );
}

export default Kolt;
