import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Training from './Training';
import Header from './Header';

const App = () => {
  const deleteTraining = (i) => {
    console.log(trainings);
    trainings.splice(i, 1);
    setTrainings([...trainings]);
  };

  const [trainings, setTrainings] = useState([
    {
      id: 0,
      value: (
        <Training
          data={[
            {
              excecrise: 'SQT',
              weight: 100,
              sets: 3,
              reps: 3,
              editable: false,
            },
          ]}
          onClick={() => deleteTraining(trainings.length - 1)}
        />
      ),
    },
  ]);

  const addTraining = useCallback(() => {
    setTrainings((currentTrainings) => [
      ...currentTrainings,
      {
        id: currentTrainings.length,
        value: (
          <Training
            data={[
              {
                excecrise: 'exc',
                weight: 0,
                sets: 0,
                reps: 0,
                editable: false,
              },
            ]}
            onClick={() => deleteTraining(currentTrainings.length)}
          />
        ),
      },
    ]);
  }, [deleteTraining]);


  return (
    <>
      <header className="App-header">
        <Header />
        <Button variant="outlined" color="primary" onClick={addTraining}>
          Add new Train Session
        </Button>

      </header>
      <body className="App-body">
        <Grid container>

          {trainings.map((train) => (

            <Grid xs={4} key={train.id} item>{train.value}</Grid>
          ))}
        </Grid>
      </body>
    </>
  );
};
export default App;
