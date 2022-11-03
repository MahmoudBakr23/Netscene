import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { MovieList, Pagination } from '../index';

import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
  const { genreOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetMoviesQuery({ genreOrCategoryName, page, searchQuery });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberofMovies = lg ? 16 : 18;
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No movies that match that name.
          <br />
          Please search for something else.
        </Typography>

      </Box>
    );
  }
  if (error) return 'An error has occured.';

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberofMovies} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
}

export default Movies;
