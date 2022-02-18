import { useMemo } from "react";
import PropTypes from "prop-types";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3  animate__animated animate__fadeInUp">
      {heroes.map((h) => (
        <HeroCard key={h.id} {...h} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};

export default HeroList;
