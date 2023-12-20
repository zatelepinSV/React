import classes from "./TabContent.module.css";

const TabContent = ({title, images, fullDescription}) => (
  <div className={classes.content}>
    <h3>{title}</h3>
    <img src={images} alt={title}/>
    <p>{fullDescription}</p>
  </div>
);

export default TabContent;