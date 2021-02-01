import "./ColumnMenu.css";
import { connect } from "react-redux";
import {
  displayAddItem,
  removeColumn,
  outSideDisplay,
  modifyColumnTitle,
} from "../slice/counterSlice";
import useOutsideAlerter from "../customHooks/useOutsideAlerter";
import { useEffect, useRef, useState } from "react";

const ColumnMenu = ({ dispatch, index }) => {
  const menuRef = useRef();
  const outside = useOutsideAlerter(menuRef);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [inputs, setInputs] = useState("");

  useEffect(() => {
    if (outside) {
      dispatch(
        outSideDisplay({ id: index, target: "menuDisplay", value: !outside })
      );
    }
  }, [outside, dispatch, index]);

  return (
    <nav className="column-menu-all" ref={menuRef}>
      <ul>
        <li
          onClick={() => {
            dispatch(displayAddItem({ id: index }));
          }}
        >
          add item
        </li>
        <li
          onClick={() => {
            dispatch(removeColumn(index));
          }}
        >
          remove column
        </li>
        <li onClick={() => setIsDisplayed(!isDisplayed)}>
          modify column title
        </li>
        {isDisplayed && (
          <li>
            <input
              type="text"
              value={inputs}
              onChange={(e) => setInputs(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(modifyColumnTitle({ id: index, value: inputs }));
              }}
            >
              ok
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default connect()(ColumnMenu);
