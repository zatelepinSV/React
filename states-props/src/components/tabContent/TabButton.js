import classes from "./TabButton.module.css";

const TabButton = ({children, onSelect, isSelected}) => (
  <li className={classes.content}>
    <button className={isSelected ? classes.active : ''} onClick={onSelect}>{children}</button>
  </li>
);

export default TabButton;