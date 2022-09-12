import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies/Movies';
import Profile from './Profile/Profile';
import MovieInfo from './MovieInfo/MovieInfo';
import Actors from './Actors/Actors';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
