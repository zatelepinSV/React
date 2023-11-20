import './index.css';


const TabButton = ({ children, onSelect, isSelected }) => {
  console.log(children)

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;