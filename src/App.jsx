import './index.css'
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";
import PokeModal from "./components/PokeModal";


function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState("")

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results)
      })
  }, [])

  const updateSelectedPokemon = (url) =>{
    setPokemonSelected (url)
    console.log('url', url)
  }

  return (
    <>
    {pokemonSelected && <PokeModal 
    url={pokemonSelected} 
    onClose={() => setPokemonSelected('')} 
    />} 

      <header className='header-logo'>
        <img
          src="https://avatars.githubusercontent.com/u/64151210?v=4"
          alt="pokeapi-logo"
        />
      </header>
      <main className="pokemon-list">
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url} 
              name={pokemon.name}
              onClick={ () => updateSelectedPokemon(pokemon.url)}
            />
          )
        })}

      </main>
    </>
  )}


export default App
