import { useContext, useEffect, useState } from "react";
import Kolt from "./Kolt";
import KoltContext from "./KoltContext";

function KoltList() {

  const {kolt, setDeleteData, setModalData} = useContext(KoltContext);
    
    const [copy, setCopy] = useState([]); // sort tik ant kopiju
   useEffect(() => {
    if (null === kolt) {
      return;
    }
    setCopy([...kolt]);
  }, [kolt]);

  const sortKm = () => {
    setCopy(
      [...copy].sort((a, b) => a.km - b.km)
    );
  }
const sortDate = () => {
        setCopy(
      [...copy].sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
      );
        
    
  };

    return (
        <div className='list-column'>
        <div>
           <h2>Scooter List</h2>  
       </div>
       <div className="form-group">
       <ul className="kolt-list">
           {
          copy.map(oneKolt => <Kolt key={kolt.id}  setDeleteData={setDeleteData} setModalData={setModalData} ></Kolt>)
        }
       </ul>
       <div className="buttons2">
       <button className="btn" onClick={sortDate}>Sort by date</button>
       <button className="btn" onClick={sortKm}>Sort by km</button>
       
       </div>
   </div>
   </div>
    );
}

export default KoltList;