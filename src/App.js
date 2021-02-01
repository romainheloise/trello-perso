import React from "react";
import "./App.css";
import AddColumn from "./components/AddColumn";
import ColumnList from "./components/ColumnList";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { dropItem } from "./slice/counterSlice";

function App({ dispatch }) {
  const onDragEnd = ({ source, destination }) => {
    if (destination) {
      dispatch(
        dropItem({
          start: source.index,
          end: destination.index,
          column: source.droppableId,
        })
      );
    }
  };
  return (
    <div className="App">
      <AddColumn />
      <DragDropContext onDragEnd={onDragEnd}>
        <ColumnList />
      </DragDropContext>
    </div>
  );
}

export default connect()(App);
