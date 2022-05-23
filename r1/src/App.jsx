
import './App.css';
import Bala from './Components/HomeworkCoponents/Bala';
import Jura from './Components/HomeworkCoponents/Jura';
import Tvenkinys from './Components/HomeworkCoponents/Tvenkinys';
import Vandenynas from './Components/HomeworkCoponents/Vandenynas';



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Bala></Bala>
      <Tvenkinys></Tvenkinys>
      <Jura></Jura>
      <Vandenynas></Vandenynas>
      </header>
    </div>
  );
}

export default App;

//1.	Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.

//2.Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. 
//Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti 
//masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams 
//(pagal id, ne masyvo indeksą).
