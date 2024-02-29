import React, { useState } from "react";
import "./Search.css";
import useDebounce from "../Hooks/useDebounce";

function Search({ updateSearchTerm }) {
  const debounceCallback = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
    <div className="search-wrapper">
      <input
        type="text"
        name=""
        id="pokemon-name-search"
        placeholder="Search Pokemon Name "
        onChange={debounceCallback}
      />
    </div>
  );
}

export default Search;
