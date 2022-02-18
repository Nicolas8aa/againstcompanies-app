import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { queryString } from "../../selectors/queryString";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = "" } = queryString(location.search);
  const [values, handleInput] = useForm({ textSearch: q });

  const { textSearch } = values;

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${textSearch.trim()}`);
  };

  const heroesFound = useMemo(() => getHeroesByName(q), [q]);

  // Other way longer :c, not so efficent
  // const [heroesFound, setHeroesFound] = useState([]);
  // useEffect(() => {
  //   setHeroesFound(getHeroesByName(q));
  // }, [q]);

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              className="form-control"
              type="text"
              name="textSearch"
              placeholder="Ex: Iron fist"
              onChange={handleInput}
              autoComplete="off"
              value={textSearch}
            />

            <button className="btn btn-outline-primary mt-3" type="submit">
              Find
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Find a hero </div>}

          {heroesFound.length !== 0
            ? heroesFound.map((hero) => <HeroCard key={hero.id} {...hero} />)
            : q !== "" && (
                <div className="alert alert-danger">
                  No se encontraron heroes: {q}
                </div>
              )}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
