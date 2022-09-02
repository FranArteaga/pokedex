import { useEffect, useState } from "react";

export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(props.url)
         .then((response) => response.json())
         .then((json) => setPokemon(json))
    }, [props.url])

    return(
        <article className="pokemon-card" onClick={props.onClick}>
          <header >
            <img src={pokemon?.sprites?.front_default}   alt="pokemon image" />
          </header>
          <footer>
            <p>{props.name}</p>

            <p>{pokemon.id}</p>
            
          </footer>
        </article>
    ) 
}