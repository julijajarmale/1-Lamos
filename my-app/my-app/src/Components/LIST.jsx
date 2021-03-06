import OneKolt from "./kolt";



function KoltList({kolt, setDeleteData, setModalData}) {

    return (
        <div className='list-column'>
        <div>
           <h2>Paspirtukų sąrašas</h2>  
       </div>
       <div className="form-group">
       <ul className="kolt-list">
           {
          kolt? kolt.map(oneKolt => <OneKolt key={oneKolt.id} oneKolt={oneKolt} setDeleteData={setDeleteData} setModalData={setModalData} ></OneKolt>) : null
        }
       </ul>
   </div>
   </div>
    );
}

export default KoltList;