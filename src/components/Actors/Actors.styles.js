import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em',
  },
}));

export default useStyles;
