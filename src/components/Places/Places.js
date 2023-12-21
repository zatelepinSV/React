import classes from "./Places.module.css";

export const Places = ({ title, places, fallbackText, onSelectPlace }) => {
  return (
    <section className={classes.placesCategory}>
      <h2>{title}</h2>
      {places.length === 0 && <p className={classes.fallbackText}>{fallbackText}</p>}
      {places.length > 0 && (
        <ul className={classes.places}>
          {places.map((place) => (
            <li key={place.id} className={classes.placeItem}>
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}