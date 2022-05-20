
function ZebraiBebrai({randomSkaicius}){
    console.log(randomSkaicius)
    let spalva;
    if(randomSkaicius===1){
        spalva='blue'
    }else if(randomSkaicius===2){
        spalva='red'
    }else {
        spalva='black'
    }

    return <h1 style={
        {
            color: spalva
        }
    }>Zebrai ir Bebrai</h1>

}

export default ZebraiBebrai;

//3.Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, 
//kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas 
//nudažomas mėlynai, o jeigu 2 - raudonai.
