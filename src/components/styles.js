import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
  },
  toolbar: {
    height: '70px',
  },
}));

export default useStyles;
