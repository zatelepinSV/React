import DifferentPlaces from "./components/differentPlaces/DifferentPlaces";
import SelectedPlace from "./components/selectedPlace/SelectedPlace";
import Header from "./components/header/Header";
import './App.css';


const App = () => {

  return (
    <>
      <Header/>
      <main>
        <DifferentPlaces/>
        <SelectedPlace/>
      </main>
    </>
  );
};

export default App;