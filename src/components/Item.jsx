import "./Item.css";
import { Draggable } from "react-beautiful-dnd";

const Item = (props) => {
  return (
    <Draggable draggableId={props.titre + "-" + props.i} index={props.i}>
      {(provided) => (
        <div
          className="item-all"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h5>{props.titre}</h5>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
