import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  listSub: {
    position: 'static',
  },
}));

export default useStyles;
