import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  HeaderElem: {
    float: 'left',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    padding: '2%',
    margin: '2%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '96%',
    position: 'relative'
  },
  button: {
    // float: 'right',
    position: 'absolute',
    top: '2px',
    right: '5px',
    marginRight: 1,
  },
});

export default useStyles;
