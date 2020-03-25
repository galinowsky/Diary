import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      // width: theme.spacing(30),
      // height: theme.spacing(15)
    },
  },
}));

export default useStyles;
