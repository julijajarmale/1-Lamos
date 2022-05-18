function TrysProps({vilkas, krabas, spalvyte}){

return( <>
    <h1 style = {
        {
            color: spalvyte
        }
    }>{vilkas}</h1>
    <h2 style = {
        {
            color: spalvyte
        }
    }>{krabas}</h2>
    </>)

}

export default TrysProps;


/*5.Sukurti komponentą, kuris gauna tris props. Vienas props bet koks 
tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas 
kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.*/