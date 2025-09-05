import { createSlice, isFulfilled, isRejected, PayloadAction } from '@reduxjs/toolkit';


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
     .addMatcher(isFulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isRejected, (state) => {
        state.isLoading = false;
      });
    }
});

// export const {
//   increaseAlertsTotalCount,
//   resetAlertsCenter,
// } = alertsCenterSlice.actions;

export default booksSlice.reducer;
