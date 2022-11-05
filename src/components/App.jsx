import React, { useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Movies, MovieInfo, Profile, Navbar, Actors } from './index';

import useStyles from './styles';

import useAlan from './Alan';

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
