
import './App.css';
import Bala from './Components/HomeworkCoponents/bala';
import Daiktas from './Components/HomeworkCoponents/Daiktas';
import Tvenkinys from './Components/HomeworkCoponents/Tvenkinys';




function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Bala></Bala>
      <Tvenkinys>
        <Daiktas></Daiktas>
        <Daiktas></Daiktas>
      </Tvenkinys>
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
