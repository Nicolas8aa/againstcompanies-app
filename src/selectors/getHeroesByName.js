import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  console.log("get heroes :C");
  if (name === "") return [];
  name.toLowerCase();
  return heroes.filter((h) => h.superhero.toLowerCase().includes(name));
};
