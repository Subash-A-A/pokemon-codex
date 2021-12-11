import React from "react";
import PokemonImage from "./PokemonImage";
import "./PokemonList.css";

function PokemonList({ pokemon }) {
  return (
    <div className="pokemonGrid">
      {pokemon.map((p) => (
        <div key={p}>
          <PokemonImage url={p[1]} />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
