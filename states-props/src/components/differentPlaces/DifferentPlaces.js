

const DifferentPlaces = ({ images, title, description }) => {

  return (
    <li>
      <img src={images} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default DifferentPlaces;