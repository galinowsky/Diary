import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  HeaderElem: {
    float: 'left',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    flexGrow: 2,
    // marginLeft: '5%',
    padding: '2%',
    margin: '2%',
    textAlign: 'center',
    display: 'inline-block',
  },
  button: {
    float: 'right',
    marginLeft: 35,
    marginRight: 1,
  },
}));

export default useStyles;
