import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Movies, MovieInfo, Profile, Navbar, Actors } from './index';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
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
