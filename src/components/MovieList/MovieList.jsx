import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './MovieList.styles';
import { Movie } from '../index';

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
