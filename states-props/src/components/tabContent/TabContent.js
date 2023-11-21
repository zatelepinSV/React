const TabContent = ({title, images, fullDescription}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={images} alt={title} />
      <p>{fullDescription}</p>
    </div>
  );
};


export default TabContent;
