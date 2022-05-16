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
    saskaita.grandtotal = (grandTotal).toFixed(2)
}
  console.log(saskaita)
}


  



