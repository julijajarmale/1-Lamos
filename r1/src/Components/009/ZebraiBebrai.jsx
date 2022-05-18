
function ZebraiBebrai({props}){
    console.log(props)
if(props===1){
    return <h1 style={
        {
            color: 'blue'
        }
    }>Zebrai ir Bebrai</h1>
}
if(props===2){
    return <h1 style={
        {
            color: 'red'
        }
    }>Zebrai ir Bebrai</h1>
}
}

export default ZebraiBebrai;

//3.Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, 
//kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas 
//nudažomas mėlynai, o jeigu 2 - raudonai.
