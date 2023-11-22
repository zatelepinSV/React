const PlaceContent = ({images, title, shortDescription}) => (
  <li>
    <img src={images} alt={title}/>
    <h3>{title}</h3>
    <p>{shortDescription}</p>
  </li>
);

export default PlaceContent;