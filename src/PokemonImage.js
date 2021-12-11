import axios from "axios";
import React, { useState, useEffect } from "react";
import "./PokemonImage.css";

function PokemonImage({ url }) {
  const [spriteUrl, setspriteUrl] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  let style = type;

  useEffect(() => {
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log(res.data);
        setspriteUrl(res.data.sprites.front_default);
        setId(res.data.id);
        setName(res.data.name);
        setType(res.data.types[0].type.name);
      })
      .catch(() => {});
    return () => cancel();
  }, [url]);

  return (
    <div className={`pokemonContainer ${style}`} key={id}>
      <p className="id">{`#${id}`}</p>
      <p className="name">{name}</p>
      <img src={spriteUrl} alt={name} className="thumbnail" />
      <p className="type">{type}</p>
    </div>
  );
}

export default PokemonImage;
