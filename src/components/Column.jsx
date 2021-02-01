import "./Column.css";
import { connect } from "react-redux";
import { useState } from "react";
import { addItem, displayMenu } from "../slice/counterSlice";
import Item from "./Item";
import ColumnMenu from "./ColumnMenu";

const Column = ({ name, list, dispatch, index, column }) => {
  const [input, setInput] = useState("");

  return (
    <div className="column-solo">
      <div className="column-top">
        <h4>{name}</h4>
        <p
          onClick={() => {
            dispatch(displayMenu({ id: index, target: "menuDisplay" }));
          }}
        >
          ...
        </p>
        {column.dash[index].menuDisplay && <ColumnMenu index={index} />}
      </div>
      <div className="column-items-container">
        {column.dash[index].addItemDisplay && (
          <div className="column-additems">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="item title"
            />
            <button
              id={index}
              onClick={(e) => {
                dispatch(addItem({ id: parseInt(e.target.id), title: input }));
                setInput("");
              }}
            >
              add
            </button>
          </div>
        )}
        {list.map((item, index) => {
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ column }) => ({ column });

export default connect(mapStateToProps)(Column);
