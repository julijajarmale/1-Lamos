import { useContext } from "react";
import KoltContext from "./KoltContext";

function OneKolt({ onekolt }) {
  const { setDeleteData, setModalData, handleDeleteComment} = useContext(KoltContext);
  const koltDelete = () => {
    setDeleteData(onekolt);
  };

  const koltEdit = () => {
    setModalData(onekolt);
  };

  return (
    <li className="list-item">
      <div className="content">
        <span className="item">{onekolt.code}</span>
        <span className="item">{onekolt.time}</span>
        <span className="item">{onekolt.km} km</span>
        <span className="item">
          {onekolt.isbusy ? (
            <div className="uzimtas">Busy</div>
          ) : (
            <div className="laisvas">Available</div>
          )}
        </span>
        <ul className="list-group mt-2">
                {
                    onekolt.coms ? onekolt.coms.slice(0, -5).split('-^o^-,').map((c, i) => (

                    <li className="list-group-item" key={i}>
                        <div>{c}</div>
                        <button type="button" className="btn btn-outline-danger mt-3" onClick={() => handleDeleteComment(onekolt.coms_id.split(',')[i])}>Delete</button>
                    </li>
                    
                    )) : null
                }
            </ul>
        <div className="buttons">
          <button type="button" className="btn2" onClick={koltEdit}>
            Edit
          </button>
          <button type="button" className="btn2" onClick={koltDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default OneKolt;
