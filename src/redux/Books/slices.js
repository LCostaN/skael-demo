import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  books: [],
  count: 0,
  nextUrl: "",
  previousUrl: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    actionBooks: (state, action) => {
      state.count = action.payload.count;
      state.nextUrl = action.payload.next;
      state.previousUrl = action.payload.previous;
      state.books = action.payload.results;
      state.page = action.payload.page ?? 1;
    },
    actionLoading: (state) => {
      state.isLoading = true;
    },
    actionReady: (state) => {
      state.isLoading = false;
    },
    actionSetBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { actionBooks, actionLoading, actionReady, actionSetBooks } =
  authSlice.actions;

export default authSlice.reducer;
