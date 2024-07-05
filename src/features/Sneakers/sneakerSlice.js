import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sneakers: [],
  loading: false,
  error: null,
  sneaker: null,
};
export const sneakerSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    loadSneakersRequest: (state, action) => {
      state.loading = true;
    },
    loadSneakersSuccess: (state, action) => {
      state.loading = false;
      state.sneakers = action.payload;
    },
    loadSneakersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadSneakerRequest: (state, action) => {
      state.loading = true;
    },
    loadSneakerSuccess: (state, action) => {
      state.loading = false;
      state.sneaker = action.payload;
    },
    loadSneakerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default sneakerSlice.reducer;
export const {
  loadSneakersRequest,
  loadSneakersSuccess,
  loadSneakersFail,
  loadSneakerRequest,
  loadSneakerSuccess,
  loadSneakerFail,
} = sneakerSlice.actions;
