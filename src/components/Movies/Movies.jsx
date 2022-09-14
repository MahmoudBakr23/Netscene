import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
  const { data } = useGetMoviesQuery();
  console.log(data);

  return (
    <div>Movies</div>
  );
}

export default Movies;
