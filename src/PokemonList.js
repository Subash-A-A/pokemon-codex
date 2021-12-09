import React from "react";
import "./PokemonList.css";

function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-grid">
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default PokemonList;
