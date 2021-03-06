import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  ToolBar: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export default useStyles;
