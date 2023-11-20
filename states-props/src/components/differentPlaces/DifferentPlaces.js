

const DifferentPlaces = ({ images, title, shortDescription }) => {

  return (
    <li>
      <img src={images} alt={title} />
      <h3>{title}</h3>
      <p>{shortDescription}</p>
    </li>
  );
};

export default DifferentPlaces;