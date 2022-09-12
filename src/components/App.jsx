import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" />
          <Route exact path="/actors/:id" />
          <Route exact path="/profile/:id" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
