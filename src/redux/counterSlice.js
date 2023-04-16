import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    // buraya 1 den fazla reducer ekleyebiliri.
    increase: (state, action) => {
      console.log(">>> increase fonksiyonu cagrildi", state, action);

      state.counter += 1;
    },
    decrease: (state, action) => {
      console.log(">>> decrease fonksiyonu cagrildi", state, action);
      state.counter -= 1;
    },
    setCounter: (state, action) => {
      console.log(">>> setCounter fonksiyonu cagrildi", state, action);
      state.counter = action.payload;
    },
  },
});

export const { increase, decrease, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
