import React, { useState, useEffect } from 'react';
import { Grid, ToggleButton } from '@mui/material';
import useStyles from './MovieList.styles';
import { Movie } from '../index';

function MovieList({ movies, numberOfMovies }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
