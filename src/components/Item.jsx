import "./Item.css";

const Item = (props) => {
  return (
    <div className="item-all">
      <h5>{props.titre}</h5>
    </div>
  );
};

export default Item;
