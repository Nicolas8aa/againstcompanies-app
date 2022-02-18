import React from "react";
import HeroList from "../hero/HeroList";

const MarvelScreen = () => {
  return (
    <>
      <h3>Marvel Comics - heroes list</h3>
      <HeroList publisher="Marvel Comics" />
    </>
  );
};

export default MarvelScreen;
