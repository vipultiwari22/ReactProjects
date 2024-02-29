import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonListState, setPokemonListState] = usePokemonList(true);

  async function downloadPokemon() {
    try {
      let response;
      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      const pokemonOfSameTypeResponse = await axios.get(
        `http://pokeapi.co/api/v2/type/${
          response.data.types ? response.data.types[0].type.name : ""
        }`
      );

      const similarPokemons =
        pokemonOfSameTypeResponse.data.pokemon.map((p) => ({
          id: p.pokemon.url.split("/").slice(-2, -1)[0], // Extracting id from url
          name: p.pokemon.name,
        })) || [];

      setPokemon({
        name: response.data.name,
        image:
          response.data.sprites.other?.dream_world?.front_default ||
          response.data.sprites.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types
          ? response.data.types.map((t) => t.type.name)
          : [],
        similarPokemons: similarPokemons,
      });

      // Update pokemonListState with the type and similarPokemons
      setPokemonListState({
        ...pokemonListState,
        type: response.data.types ? response.data.types[0].type.name : "",
        similarPokemons: similarPokemons,
      });
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, []); // Dependency on 'id' to re-fetch the Pokemon when 'id' changes

  return [pokemon, pokemonListState]; // Return both pokemon and pokemonListState
}

export default usePokemonDetails;
