import { configureStore } from '@reduxjs/toolkit';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
// import colorModeReducer from '../features/colorMode';
import userReducer from '../features/auth';
import { tmdbApi } from '../services/TMDB';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    // currentMode: colorModeReducer,
    user: userReducer,
  },
});
