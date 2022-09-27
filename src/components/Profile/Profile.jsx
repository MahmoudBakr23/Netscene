import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const favoriteMovies = [];

function Profile() {
  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };
  const { user } = useSelector(userSelector);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>{user.username} &nbsp; Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="h5">Add favorites or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            FAVORITE MOVIES
          </Box>
        )}
    </Box>
  );
}

export default Profile;
