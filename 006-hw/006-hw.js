console.log(`DUOMENU STRUKTUROS`)
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
let saskaita = {};
let saskaitosNr;
let productsNewMasyvas = [];


for (let i = 0; i <= 100; i++){
    saskaituMasyvas.push(saskaita)
}
    for (let i = 0; i <saskaituMasyvas.length; i++){
      let saskaitosNr = `INV${i}`
      if(i<10 && i > 0){
        saskaitosNr = `INV00${i}`
    }
      if(i>=10 && i <= 99){
        saskaitosNr = `INV0${i}`
    }
     if(i===0){
        continue
    }
    let saskaita ={
        [saskaitosNr]:'number',

    }
    console.log(saskaita)
}

for (let i = 0; i < rand(1, 10); i++){
    let productsNew = products[Math.floor(Math.random() * products.length)]
    console.table(productsNew)
    productsNewMasyvas.push(productsNew)
       
    }
   
    

     
console.log(productsNewMasyvas)


