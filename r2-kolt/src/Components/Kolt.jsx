import { useContext } from "react";
import KoltContext from "./KoltContext";

function OneKolt({ onekolt }) {
  const { setDeleteData, setModalData } = useContext(KoltContext);
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
