/*1.Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines
 reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą naudodami console.log()*/
console.log('---------------------')
let a = Math.floor(Math.random() * 5)
let b = Math.floor(Math.random() * 5)
console.log(a)
console.log(b)

 const dalmuo = (a,b)
 
  if (a > b) {
      console.log(a / b);
  }

  if (b > a) {
      console.log(b / a);
  }

  if (a===b) {
    console.log('skaiciai yra lygus');
  }

/*2.Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines 
reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.*/
console.log('---------------------')


function nextBiggest(cde) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of cde) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  let c = Math.floor(Math.random() * 26)
  let d = Math.floor(Math.random() * 26)
  let e = Math.floor(Math.random() * 26)
  console.log(c)
  console.log(d)
  console.log(e)
  
  const cde = [c, d, e]
  console.log(cde)
  console.log(result)
 



/*3.Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). 
Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). */
/*4.Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()*/
/* 5.Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10.
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite
 “-” simbolius, o prie 0 “*” simbolius*/
/* 6.Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 %
 nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia 
 kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.*/
/* 7.Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, 
kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()*/