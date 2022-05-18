import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/Kurmis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello/>
       <Hello></Hello>
       <Hello></Hello>
       <Kurmis></Kurmis>
      </header>
    </div>
  );
}

export default App;

//js - sudaro kodas;
//js x = kodas + XML <---- grieztesne HTML atmaina; JSX- kodo ir html misinys;
//jeigu matome, kad kodas painiojasi su html faila pervadinti is js i jsx.
//XML visi tagai, kurie atsidare, turi buti uzdaryti pvz <img  /> arba <img></img>
//className === class, class rasyti negalime.
//index.js uzkomentuoti 9 ir 11 eilutes - strict mode

//REACTAS SUSIDEJA IS 3 KOMPONTENTU:
//1.Komponentas Components <==== sudarytas is funkcjos, kuri grazina Html; vadiname APP componentas(funckija vvirsuje)
//Komponentas turi prasideti didziaja raide (kaip App cia);daznausiai vienas komponentas = vienas failas;
// Sukuriam komponenta atskiram folderyje, ir importuojam tagu <hello></hello> 
//paspaudus ant reikiamo importuojasi pats
//Jeigu yra kelios html eilutes return reikia rasyti su skliausteliais(kaip kurmis)
//// tuscias tagas <></> apsklausti teviniu komponentu
// galim grazinti TIK VIENA komponenta



//2.Propsas Props
//3.Steitas State


