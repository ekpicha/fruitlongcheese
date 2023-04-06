import './FruitItem.css';

function FruitItem(props) {
  const { fruit, onFruitClick } = props;
  return (
    <div className="fruit-item">
      <img src={fruit.thumbnailUrl} onClick={() => {onFruitClick(fruit)}}></img>
      <h4>{fruit.title}</h4>
    </div>
  );
}

export default FruitItem;
