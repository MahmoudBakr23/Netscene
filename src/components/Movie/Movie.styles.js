import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  title: {
    color: theme.palette.text.primaty,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '10px 0 0 0',
    textAlign: 'center',
  },
}));

export default useStyles;
