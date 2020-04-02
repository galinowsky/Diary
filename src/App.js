import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Training from './Training';
import Header from './Header';
import TrainDaysForm from './TrainDaysForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: '20px',
  },
}));

const App = () => {
  const [trainings, setTrainings] = useState([
    {
      id: 0,
      data: [{
        excecrise: 'SQT',
        weight: 100,
        sets: 3,
        reps: 3,
        editable: false,
      }],
    },
  ]);

  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const changeDaysPerWeek = (val) => {
    setDaysPerWeek(val);
  };

  const deleteTraining = useCallback((i) => {
    trainings.splice(i, 1);
    setTrainings([...trainings]);
  }, [trainings]);

  const addTraining = useCallback(() => {
    setTrainings((currentTrainings) => [
      ...currentTrainings,
      {
        id: currentTrainings.length,
        data: [{
          excecrise: 'exc',
          weight: 0,
          sets: 0,
          reps: 0,
          editable: false,
        }],
      },
    ]);
  }, [setTrainings]);
  const classes = useStyles();
 

  return (
    <>

      <header className="App-header">
        <Header />
        <Grid container>
          <Grid item xs={2}>
            <Button variant="outlined" color="primary" onClick={addTraining} className={classes.root}>
              Add new Train Session
            </Button>
          </Grid>
          <Grid item xs={2}>
            <TrainDaysForm data={daysPerWeek} changeDaysPerWeek={changeDaysPerWeek} />
          </Grid>
        </Grid>
      </header>
      <body className="App-body">
        <Grid container direction="row" spacing={1}>
          {trainings.map((train, i) => (
            <Grid xs={12/daysPerWeek}  key={train.id} item>
              <Training data={train.data} onClick={() => { deleteTraining(i); }} />
            </Grid>
          ))}
        </Grid>
      </body>
    </>
  );
};
export default App;
