function Pokemons({poke}){


    return(
        <>
        {
            poke.map(p => <div key={p.url}>{p.name} <a href="url">{p.url}</a></div>)
        }
       </>
    );
        }
    
    
    export default Pokemons;