import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("likedItems");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (e) {
    console.warn("Could not load from localStorage", e);
    return {};
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("likedItems", serializedState);
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
};

const likedSlice = createSlice({
  name: "liked",
  initialState: loadFromLocalStorage(),
  reducers: {
    toggleLike: (state, action) => {
      const { key, product } = action.payload;
      if (state[key]) {
        delete state[key]; // Unlike
      } else {
        state[key] = product; // Like
      }

      saveToLocalStorage(state); // ✅ Update localStorage every time
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
