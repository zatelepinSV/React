import DifferentPlaces from "./components/DifferentPlaces/DifferentPlaces";
import SelectedPlace from "./components/SelectedPlace/SelectedPlace";
import Header from "./components/Header/Header";


const App = () => (
  <>
    <Header/>
    <main>
      <DifferentPlaces/>
      <SelectedPlace/>
    </main>
  </>
);

export default App;