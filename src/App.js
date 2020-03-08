import React, { useState, useCallback } from "react";
import Training from "./Training";
import Paper from "./Paper";
import Grid from "@material-ui/core/Grid";
import ReactDOM from "react-dom";
import { lightgrey } from "color-name";
import Header from "./Header";
import Button from "@material-ui/core/Button";

const mainClassName = "App-link";
const App = () => {
  const [trainings, setTrainings] = useState([{
    id: 0,
    value: <Paper
      data={[{
        excecrise: 'bieganie',
        weight: 75,
        sets: 0,
        reps: 'nie wiem co to',
      }]}
    />,
  }]);

  const addTraining = useCallback(() => {
    setTrainings((currentTrainings) => [
      ...currentTrainings,
      {
        id: currentTrainings.length,
        value: <Paper
          data={[{
            excecrise: 'bieganie',
            weight: 75,
            sets: currentTrainings.length,
            reps: 'nie wiem co to',
          }]}
        />,
      },
    ]);
  }, [setTrainings]);

  return (
    <div className="App" style={{ }}>
          
      <header className="App-header">
         <Header />
        <Button variant="outlined" color="primary" onClick={addTraining}>
          Add new Train Session
        </Button>
      </header>
      <body
        className="App-body"
        style={{ backgroundColor: "lightGrey", wdith: "200px" }}
      >
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
