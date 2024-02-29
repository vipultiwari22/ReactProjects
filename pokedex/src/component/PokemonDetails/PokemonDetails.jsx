import React from "react";
import { useParams } from "react-router-dom";
import usePokemonDetails from "../Hooks/usePokemonDetails";
import "./PokemonDetails.css";

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon, pokemonListState] = usePokemonDetails(id, pokemonName);

  return (
    <div className="pokemon-details-wrapper">
      {/* Corrected src attribute */}
      <img className="pokemon-details-image" src={pokemon.image} alt="" />
      <div className="pokemon-details-name">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-details-height">Height: {pokemon.height}</div>
      <div className="pokemon-details-weight">Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {/* Corrected accessing 'types' instead of 'type' */}
        {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
      </div>

      {/* Adjusted rendering of pokemonOfSameType */}
      {pokemonListState.similarPokemons && (
        <div>
          more {pokemon.types && pokemon.types[0]} type pokemons
          <ul>
            {pokemonListState.similarPokemons.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
