import { React, useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonlist, setpokemonlist] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  // const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

  async function downloadPokemon() {
    setIsLoding(true);
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon"); // THIS DOWNLOADS LIST OF POKEMONS
    const Pokemonresults = response.data.results;
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    // ITREATING OVER THE ARRAY OF POKEMONS
    const pokemonResultPromise = Pokemonresults.map((pokemon) =>
      axios.get(pokemon.url)
    );

    // PASSING THE PROMISE ARRAY O AXOIS.ALL
    const pokemonData = await axios.all(pokemonResultPromise);
    console.log(pokemonData);
    console.log(response.data);
    const res = pokemonData.map((pokeData) => {
      const pokemons = pokeData.data;
      return {
        id: pokemons.id,
        name: pokemons.name,
        image: pokemons.sprites.other
          ? pokemons.sprites.other.dream_world.front_default
          : pokemons.sprites.front_shiny,
        types: pokemons.types,
      };
    });
    setpokemonlist(res);
    // console.log(res);
    setIsLoding(false);
  }

  useEffect(() => {
    downloadPokemon();
  }, [pokedexUrl]);

  return (
    <>
      <div className="pokemon-list-wrapper">
        <div className="pokemon-list-name"> Pokemon List</div>
        <hr />
        <div className="pokemon-wapper">
          {isLoding
            ? "Loding....."
            : pokemonlist.map((p) => (
                <Pokemon name={p.name} image={p.image} key={p.id} />
              ))}
        </div>
        <div className="Controls">
          <button
            disabled={prevUrl == null}
            onClick={() => setPokedexUrl(prevUrl)}
          >
            Prev
          </button>
          <button
            disabled={nextUrl == null}
            onClick={() => setPokedexUrl(nextUrl)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default PokemonList;
