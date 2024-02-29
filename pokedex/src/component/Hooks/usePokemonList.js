import axios from "axios";
import { useState, useEffect } from "react";

function usepokemonList(type) {
  const [pokemonListState, setPokemonListState] = useState({
    PokemonLists: [],
    isLoading: true,
    pokedexUrl: `https://pokeapi.co/api/v2/pokemon`,
    nextUrl: "",
    prevUrl: "",
  });

  const downloadPokemon = async () => {
    setPokemonListState({ ...pokemonListState, isLoading: true });
    try {
      const response = await axios.get(pokemonListState.pokedexUrl);
      const pokemonResults = response.data.results;

      setPokemonListState((state) => ({
        ...state,
        nextUrl: response.data.next,
        prevUrl: response.data.previous,
      }));

      if (type) {
        setPokemonListState((state) => ({
          ...state,
          PokemonLists: pokemonResults.slice(0, 5),
          isLoading: false,
        }));
      } else {
        const pokemonDataPromises = pokemonResults.map((pokemon) =>
          axios.get(pokemon.url)
        );
        const pokemonDataResponses = await Promise.all(pokemonDataPromises);

        const pokeListResult = pokemonDataResponses.map((response) => ({
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other
            ? response.data.sprites.other.dream_world.front_default
            : response.data.sprites.front_shiny,
          types: response.data.types,
        }));

        setPokemonListState((state) => ({
          ...state,
          PokemonLists: pokeListResult,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setPokemonListState({ ...pokemonListState, isLoading: false });
    }
  };

  useEffect(() => {
    downloadPokemon();
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
}

export default usepokemonList;
