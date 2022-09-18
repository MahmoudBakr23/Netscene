import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
    adultQuery: false,
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
    loadAdultMovies: (state, action) => {
      state.adultQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie, loadAdultMovies } = genreOrCategory.actions;
export default genreOrCategory.reducer;
