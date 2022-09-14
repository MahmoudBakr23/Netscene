import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './Sidebar.styles';
import { useGetGenresQuery } from '../../services/TMDB';

const redLogo = 'https://fontmeme.com/permalink/220914/2d14ec30cf8c558cbbbedc5a9d4cf443.png';
const blueLogo = 'https://fontmeme.com/permalink/220914/1b1fd1646ea20814fb7c6af933bf19c6.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data, isFetching } = useGetGenresQuery();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Netscene logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader className={classes.listSub}>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={blueLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={id} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={blueLogo} className={classes.genreImages} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
