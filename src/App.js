import React, { useState, useCallback } from "react";
import Training from "./Training";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Button from "@material-ui/core/Button";

const App = () => {
  const [trainings, setTrainings] = useState([
    {
      id: 0,
      value: (
        <Training
          data={[
            {
              excecrise: "exc",
              weight: 0,
              sets: 0,
              reps: 0
            },
            {
              excecrise: "exc",
              weight: 0,
              sets: 0,
              reps: 0
            },
            {
              excecrise: "exc",
              weight: 0,
              sets: 0,
              reps: 0
            }
          ]}
        />
      )
    }
  ]);

  const addTraining = useCallback(() => {
    setTrainings(currentTrainings => [
      ...currentTrainings,
      {
        id: currentTrainings.length,
        value: (
          <Training
            data={[
              {
                excecrise: "exc",
                weight: 0,
                sets: 0,
                reps: 0
              }
            ]}
          />
        )
      }
    ]);
  }, [setTrainings]);

  return (
    <div className="App" style={{}}>
          
      <header className="App-header">
         <Header />
        <Button variant="outlined" color="primary" onClick={addTraining}>
          Add new Train Session
        </Button>
      </header>
      <body className="App-body" style={{ wdith: "200px" }}>
        <Grid container>
          {trainings.map(train => (
            <Grid xs={4}>{train.value}</Grid>
          ))}
        </Grid>
      </body>
    </div>
  );
};
export default App;
