import Bala from "./Bala";

function Akvariumas({seaPlaner}){
    
    return <div><i>ID:{seaPlaner.id} TYPE:{seaPlaner.type} <b style={{color: seaPlaner.color}}>{seaPlaner.name}</b></i></div>
}

export default Akvariumas;



/*function Akvariumas(){
    <span style={{color: v.color}}>{v.name}</span> {v.color}
    const seaPlaners = [
        {id: 1, type: 'man', name: 'Lina', color: 'blue'},
        {id: 2, type: 'car', name: 'Opel', color: 'red'},
        {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
        {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
        {id: 5, type: 'man', name: 'Tomas', color: 'green'},
        {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
        {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
        {id: 8, type: 'car', name: 'MB', color: 'blue'},
        {id: 9, type: 'car', name: 'ZIL', color: 'red'},
        {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
    ];

   
    return  seaPlaners.map((Bala, i) => Bala.type === 'fish' ? <div key={i}>{Bala.id}{Bala.name} {Bala.type} </div> : null)
}

export default Akvariumas;*/


