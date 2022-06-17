import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";


function Pokemons(){

    const [poke, setPoke] = useState([])
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(
            (result) => {
            setPoke(result.results)
     
        },

        (error) => {
            setErrorMsg(error.message)

        }
        
        );   
}, []);        
    
 

    return(
      <>
      {poke.map((pokemon,index) => (
        <Pokemon key={index} vardas={pokemon.name} urlas={pokemon.url}></Pokemon>
      ))} {" "}
      {errorMsg}
      </>
    );
        }
    
    
    export default Pokemons;