import { DIFFERENT_PLACES } from "../data/Data";
import PlacesContent from "./PlacesContent";
import classes from "./DifferentPlaces.module.css";

const DifferentPlaces = () => {

  return (
    <section className={classes.places}>
      <h2>Several beautiful places</h2>
      <ul>
        {DIFFERENT_PLACES.map(place => <PlacesContent key={place.id} {...place}/>)}
      </ul>
    </section>
  );
};

export default DifferentPlaces;