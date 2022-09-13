import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@material-ui/core';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './Navbar.styles';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inerit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
