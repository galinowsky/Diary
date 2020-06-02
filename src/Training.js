import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TrainTable from './TrainTable';
import TrainHeader from './TrainHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
  title: {
    margin: 15,
    padding: 20,
    fontWeight: 545,
    contenEditable: true,
  },
}));

const Training = (props) => {
  const classes = useStyles();
  const onClickFunction = { ...props };
  return (
    <div className={classes.root}>

      <Paper>
        <TrainHeader onClick={onClickFunction.onClick} />
      
        <TrainTable {...props} />
      </Paper>
    </div>
  );
};
export default Training;
