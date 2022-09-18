import React, { useState, useEffect } from 'react';
import { Grid, ToggleButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from './MovieList.styles';
import { Movie } from '../index';
import { loadAdultMovies } from '../../features/currentGenreOrCategory';

function MovieList({ movies }) {
  const [adult, setAdult] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdultMovies(adult));
  });

  return (
    <>
      <ToggleButton
        value="check"
        selected={adult}
        onChange={() => setAdult((previousAdultState) => !previousAdultState)}
      >
        Adult?
      </ToggleButton>
      <Grid container className={classes.moviesContainer}>
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </>
  );
}

export default MovieList;
