import './FruitPost.css';

function FruitPost(props) {
  const { fruit, onBgClick } = props;
  return (
    <div className="fruit-post">
      <div className="fruit-post-bg" onClick={onBgClick}/>
      <div className="fruit-post-content">
          <img src={fruit.detailUrl}></img>
          <h4>{fruit.title}</h4>
      </div>
    </div>
  );
}

export default FruitPost;
