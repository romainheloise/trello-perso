import { createSlice } from "@reduxjs/toolkit";

export const columnSlice = createSlice({
  name: "column",
  initialState: {
    dash: [],
  },
  reducers: {
    addColumn(state, action) {
      state.dash = [
        ...state.dash,
        {
          name: action.payload,
          list: [],
          menuDisplay: false,
          addItemDisplay: false,
        },
      ];
    },

    addItem(state, action) {
      state.dash[action.payload.id].list = [
        ...state.dash[action.payload.id].list,
        {
          titre: action.payload.title,
        },
      ];

      state.dash[action.payload.id].addItemDisplay = !state.dash[
        action.payload.id
      ].addItemDisplay;
    },

    displayMenu(state, action) {
      const isDisplayed = state.dash[action.payload.id].menuDisplay;
      state.dash[action.payload.id].menuDisplay = !isDisplayed;
    },

    displayAddItem(state, action) {
      const addItemisDisplayed = state.dash[action.payload.id].addItemDisplay;
      const menuIsDisplayed = state.dash[action.payload.id].menuDisplay;

      if (!addItemisDisplayed) {
        state.dash[action.payload.id].addItemDisplay = !addItemisDisplayed;
      }

      state.dash[action.payload.id].menuDisplay = !menuIsDisplayed;
    },

    removeColumn(state, action) {
      const filteredColumn = state.dash.filter(
        (item, index) => index !== action.payload
      );
      state.dash = filteredColumn;
    },

    outSideDisplay(state, action) {
      state.dash[action.payload.id][action.payload.target] =
        action.payload.value;
    },

    modifyColumnTitle(state, action) {
      state.dash[action.payload.id].name = action.payload.value;
    },

    dropItem(state, action) {
      const start = action.payload.start;
      const end = action.payload.end;
      const columnId = parseInt(action.payload.column.split("-")[1]);
      const movingItem = state.dash[columnId].list[start];
      let modifyOrder = state.dash[columnId].list.filter(
        (item, index) => index !== start
      );
      modifyOrder.splice(end, 0, movingItem);
      state.dash[columnId].list = [...modifyOrder];
    },
  },
});

export const {
  addColumn,
  addItem,
  displayMenu,
  displayAddItem,
  removeColumn,
  outSideDisplay,
  modifyColumnTitle,
  dropItem,
} = columnSlice.actions;

export default columnSlice.reducer;
