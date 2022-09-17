import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // Get Movies' Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreOrCategoryName, page }) => {
        if (genreOrCategoryName && typeof genreOrCategoryName === 'string') {
          return `movie/${genreOrCategoryName}?page=${page}&include_adult=true&api_key=${tmdbApiKey}`;
        }
        if (genreOrCategoryName && typeof genreOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreOrCategoryName}&sort_by=popularity.desc&page=${page}&include_adult=true&api_key=${tmdbApiKey}`;
        }
        return `movie/popular?page=${page}&include_adult=true&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
} = tmdbApi;
