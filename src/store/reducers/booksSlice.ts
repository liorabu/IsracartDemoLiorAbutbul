import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooksAsync } from '../actions/books';


type BooksSlice = {
  booksList:FetchBooksResponseProps[];
  
  isLoading: boolean;
}

const initialState: BooksSlice = {
  booksList: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action:PayloadAction<FetchBooksResponseProps[]>) {
      state.booksList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBooksAsync.fulfilled, (state, action:PayloadAction<FetchBooksResponseProps[]>) => {
      state.booksList = action.payload;
    } )
    .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
      })
     .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isRejected, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isPending, (state)=>{
         state.isLoading = true;
      })
    }
});

export const {
  setBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
