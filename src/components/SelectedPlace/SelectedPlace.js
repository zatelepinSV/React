import { useState, useCallback } from "react";
import { DIFFERENT_PLACES } from "../../data";
import TabButton from "../TabContent/TabButton";
import TabContent from "../TabContent/TabContent";
import classes from "./SelectPlace.module.css";

const SelectedPlace = () => {

  const [selectedPlace, setSelectedPlace] = useState('');

  const hasSelectedPlace = typeof selectedPlace === "number";

  const onPlaceClick = useCallback(selectedButton => {
    setSelectedPlace(selectedButton);
  },[]);

  return (
    <section className={classes.selected}>
      <menu>
        <ul>
          {DIFFERENT_PLACES.map((place, index) => <TabButton
            key={place.id}
            isSelected={index === selectedPlace}
            onSelect={() => onPlaceClick(index)}
          >{place.title}</TabButton>)}
        </ul>
      </menu>
      {hasSelectedPlace ? (
        <TabContent {...DIFFERENT_PLACES[selectedPlace]} />
      ) : (
        <p>Please select a place</p>
      )}
    </section>
  );
};

export default SelectedPlace;