import { useState } from "react";
import { connect } from "react-redux";
import { addColumn } from "../slice/counterSlice";
import "./AddColumn.css";

const AddColumn = ({ dispatch }) => {
  const [input, setInput] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <div className="add-column">
      <div className="add-column-plus">
        <button onClick={() => setIsDisplayed(!isDisplayed)}>+</button>
      </div>
      {isDisplayed && (
        <div className="add-column-pop">
          <h4>Column Name</h4>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addColumn(input));
              setInput("");
            }}
          >
            Add Column
          </button>
        </div>
      )}
    </div>
  );
};

export default connect()(AddColumn);
