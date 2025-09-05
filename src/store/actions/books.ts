import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_BOOKS_KEY } from "../../constants/requestsKeys";
import { fetchBooks } from "../../api/requests/fetchBooks";

export const fetchBooksAsync = createAsyncThunk(
  FETCH_BOOKS_KEY,
  async (_, thunkAPI) => {
    try {
    const response = await fetchBooks();
  
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as Error).message);
  }
  },
);