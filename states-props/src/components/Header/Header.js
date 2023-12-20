import temple from "../../assets/japanese-temple.jpg";
import classes from "./Header.module.css";
const Header = () => {


  return (
    <header className={classes.content}>
      <img src={temple} alt="qwe"/>
      <h1>Beautiful places in the world</h1>
      <p>
        Our planet earth is a treasure trove of stunning landscapes, each narrating awe-inspiring tales.
        From stunning beaches to mighty mountains and green forests to pristine lakes, these incredible places
        have left travellers stunned with their pure beauty and sheer magnificence.
      </p>
      <p>
        Let’s have a look at some of the most beautiful places to visit in the world.
      </p>
    </header>
  );
};

export default Header;