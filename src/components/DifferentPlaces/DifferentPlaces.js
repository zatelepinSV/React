import { DIFFERENT_PLACES } from "../../data";
import PlaceContent from "./PlaceContent";
import classes from "./DifferentPlaces.module.css";

const DifferentPlaces = () => (
  <section className={classes.places}>
    <h2>Several beautiful places</h2>
    <ul>
      {DIFFERENT_PLACES.map(place => <PlaceContent key={place.id} {...place}/>)}
    </ul>
  </section>
);

export default DifferentPlaces;