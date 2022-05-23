import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";
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

function Pasaulis(){
 
    return(
        <>
        <div>
         <h1>PORINIAI</h1>
            <h1>Namas</h1>
            <Namas></Namas>
            <h1>Narvas</h1>
            <Narvas></Narvas>
            <h1>Garazas</h1>
            <Garazas></Garazas>
            <h1>Akvariumas</h1>
            <Akvariumas></Akvariumas>
        </div>
        <div>
         <h1>NEPORINIAI</h1>
            <h1>Namas</h1>
            <Namas></Namas>
            <h1>Narvas</h1>
            <Narvas></Narvas>
            <h1>Garazas</h1>
            <Garazas></Garazas>
            <h1>Akvariumas</h1>
            <Akvariumas></Akvariumas>
        </div>
        </>
       
    )
}
export default Pasaulis;