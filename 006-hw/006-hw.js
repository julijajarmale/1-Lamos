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
        total: 0
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
     

}


console.log(saskaituMasyvas)


    