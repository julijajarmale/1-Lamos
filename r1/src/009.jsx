
import './App.css';
import DuProps from './Components/009/DuProps';
import Hello from './Components/009/Hello';
import LabasZuiki from './Components/009/LabasZuiki';
import Tekstas from './Components/009/Tekstas';
import TrysProps from './Components/009/TrysProps';
import ZebraiBebrai from './Components/009/ZebraiBebrai';
import Kurmis from './Components/Kurmis';
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const x = rand(1,2);
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hello spalva="green" bg="yellow"/>
       <Hello spalva="black" bg="white"></Hello>
       <Hello spalva="yellow" bg="pink"></Hello>
       <Kurmis skaicius={4}></Kurmis>
       <LabasZuiki></LabasZuiki>
       <Tekstas tekstukas ="Bet koks tekstas"></Tekstas>
       <ZebraiBebrai props = {x}></ZebraiBebrai>
       <DuProps zuikis="Zuikis-Puikis" lape="Lape-Snape"></DuProps>
       <TrysProps vilkas ="Vilas-Pilkas" krabas="Labas Krabas" spalvyte = "orange"></TrysProps>
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
// Kintamasis argumentas, kuri mes atiduodam i funkcija; Funkcijos argumenta;
//ikeliam i xml - spalva tada props i reikiamos funkcijos vidu prie hello
//vietoje props irasom skliaustoe {spalva} ir viskas sukrenta (destruktinom objekta)


//3.Steitas State
//propsas, kuris atsiranda komponento viduje. 




