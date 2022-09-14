import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './Sidebar.styles';

const redLogo = 'https://fontmeme.com/permalink/220914/2d14ec30cf8c558cbbbedc5a9d4cf443.png';
const blueLogo = 'https://fontmeme.com/permalink/220914/1b1fd1646ea20814fb7c6af933bf19c6.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Link to="/" className={classes.imageLink}>
      <img
        className={classes.image}
        src={theme.palette.mode === 'light' ? redLogo : blueLogo}
        alt="Netscene logo"
      />
    </Link>
  );
}

export default Sidebar;
