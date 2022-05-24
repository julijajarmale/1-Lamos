
import { useState, useEffect } from 'react';
import './App.scss';
import randColor from './Functions/randColor';




function App() {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
 
const [gyvunas, setGyvunas] = useState(null);

const plusGyvunas  = () => {
  setGyvunas(k => [...k, randColor()]);
}
// Kad persikrovus viskas liktu iki 31 eilutes, bet pakeitimai xtmle
useEffect(() => {
  setGyvunas(JSON.parse(localStorage.getItem('gyvunas') ?? '[]'));
}, []);

useEffect(() => {
  if (null === gyvunas) {
      return;
  }
  localStorage.setItem('gyvunas', JSON.stringify(gyvunas));
}, [gyvunas]);

//gyvunai juda

const [setMigracija] = useState(null);
const moveGyvunas = () => {
  setMigracija(("source").appendTo("destination"))
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>GANYKLA</h1>
        <div className='container'>
          <div className='column1'>
            <h2>Karvės</h2>
            {
       gyvunas ? gyvunas.map((c, i) => <div className='karve' id ="source" onClick={moveGyvunas} key={i}>{`K0${rand(100000,999999)}`}</div>) : null
       }
        
          </div>
          <div className='column1'>
            <h2>Avys</h2>
            {
       gyvunas ? gyvunas.map((c, i) => <div className='avis' id ="destination" key={i}>{`K0${rand(100000,999999)}`}</div>) : null
       }
          </div>
         <button onClick={plusGyvunas}>Į GANYKLĄ</button>

        </div>
       
      </header>
    </div>
  );
}

export default App;

//Nepadaryti random 5-20; identifikaciniai,  kad liktu tie patys ir nejuda gyvunai



/*REACT useState & useEffect PROJECT (MyLittleFarm)


Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. 
Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis,
kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja
keturkampiai. Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje
yra random identifikacinis numeris: pvz avim A0254787, karvėm K0007898, 
kur skaičius yra septynženklis rand skaičius. Perkrovus puslapį avių ir 
karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį 
pirmą kartą “Ganykla” turi būti tuščia). Paspaudus ant avies arba karvės
ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti
atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai
paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.


Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam!
 Perbėgusios avys ir karvės yra dedamos į bandos galą. */
