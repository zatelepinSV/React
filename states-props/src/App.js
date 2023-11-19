import Header from "./components/header/Header";
import { DIFFERENT_PLACES } from "./components/data/Data";

import './App.css';
import DifferentPlaces from "./components/differentPlaces/DifferentPlaces";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id='different-places'>
          <h2>Several beautiful places</h2>
          <ul>
            {DIFFERENT_PLACES.map(place => <DifferentPlaces key={place.title} {...place}/>)}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
