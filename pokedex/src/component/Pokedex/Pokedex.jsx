import React, { useEffect, useState } from "react";
import Search from "../search/Search";
import "./Pokedex.css";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [SearchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedexWrapper">
      <Search updateSearchTerm={setSearchTerm} />
      <div className="wrapper">
        {!SearchTerm ? (
          <PokemonList />
        ) : (
          <PokemonDetails key={SearchTerm} pokemonName={SearchTerm} />
        )}
      </div>
    </div>
  );
}

export default Pokedex;
