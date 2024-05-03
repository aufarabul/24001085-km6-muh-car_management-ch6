import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  cars: [],
  car: null,
};

// Define the slice
const carsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setCar: (state, action) => {
      state.car = action.payload;
    },
  },
});

// export the setter funtion
export const { setCars, setCar } = carsSlice.actions;

// export the reducer
export default carsSlice.reducer;
