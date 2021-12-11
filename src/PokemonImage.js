import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PokemonImage.css";

function PokemonImage({ url }) {
  const [spriteUrl, setspriteUrl] = useState("");
  const [id, setId] = useState("");
  const [element, setElement] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        // console.log(res.data);
        setspriteUrl(res.data.sprites.front_default);
        setId(res.data.id);
        setName(res.data.name);
        setElement(res.data.element);
      })
      .catch(() => {});
    return () => cancel();
  }, [url]);

  return (
    <div className="pokemonContainer" key={id}>
      <p>{name}</p>
      <img src={spriteUrl} alt={name} />
      <p>{element}</p>
    </div>
  );
}

export default PokemonImage;
