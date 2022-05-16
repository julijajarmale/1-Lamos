console.log(`DUOMENU STRUKTUROS`)
console.log(`A)`)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 
'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 
'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 
'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 
'Medinė dėžė'];

const saskaituMasyvas = [];

for (let i = 0; i <= 100; i++){
    const saskaita = {
        number: 'INV' + i,
        products: [],
    
    };
    if(i<10 && i > 0){
        saskaita.number = `INV00${i}`
    }
      if(i>=10 && i <= 99){
        saskaita.number = `INV0${i}`
    }
     if(i===0){
         continue
     }
     
 for (let i = 0; i < rand(1, 10); i++) {
    const productsSaskaitos = {
        title: products[rand(0, products.length - 1)],
        price: rand(100, 10000) / 100,
        amount: rand(1, 20),
        
        }

    saskaita.products[i] = productsSaskaitos
    let totalProducts =  (saskaita.products[i].price *  saskaita.products[i].amount).toFixed(2);
    saskaita.products[i].total = totalProducts;
  }
  
 let total = 0;
 for(let i = 0; i < saskaita.products.length; i ++){
     total = saskaita.products[i].total++
     saskaita.total = total;
 }

 let vat = 0;
 for(let i = 0; i < saskaita.products.length; i ++){
    vat = saskaita.total * 0.21
    saskaita.vat = (vat).toFixed(2);
}
  
let grandTotal = 0;
 for(let i = 0; i < saskaita.products.length; i ++){
    grandTotal = Number(saskaita.total) + Number(saskaita.vat)
    saskaita.grandTotal = (grandTotal).toFixed(2)
   
}
  saskaituMasyvas.push(saskaita)
}
console.log(saskaituMasyvas)



console.log(`B)`)

//B.	Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą,
// produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir 
// už kokią bendrą sumą.

//Pvz: 
//1.	Dviratis 35 479.55
//2.	Triratis 10 457.22
//3.	…..
//4.	Medinė dėžė 47 1025.74


/*let newGrandTotal = 0;
let sumGrandTotal = 0;
for (let i = 0; i < saskaituMasyvas.length; i++){
   newGrandTotal = Number(saskaituMasyvas[i].grandTotal)
   sumGrandTotal = sumGrandTotal + newGrandTotal;
   console.log(sumGrandTotal)
}*/

let newGrandTotal = 0;
let sumGrandTotal = 0;
let count = 0;
for (let i = 0; i < saskaituMasyvas.length; i++){
   newGrandTotal = Number(saskaituMasyvas[i].grandTotal)
   sumGrandTotal += newGrandTotal;
   
}
console.log(`Visų sąskaitų GrandTotal suma: ${sumGrandTotal.toFixed(2)}`)

// Si dalis nurasyta nuo Doviles, paprasyti, kad paaiskintu destytojas

for (let i = 0; i < products.length; i++) {
  let sum = 0;
  let amount = 0;
  for (let a = 0; a < saskaituMasyvas.length; a++) {
    for (let b = 0; b < saskaituMasyvas[a].products.length; b++) {
      if (products[i] === saskaituMasyvas[a].products[b].title) {
        amount++;
        sum = sum + saskaituMasyvas[a].products[b].total;
      }
    }
  }
  console.log(products[i], amount, Number(sum.toFixed(2)));
}






  



