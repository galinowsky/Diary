import React, { useState } from "react";
import Training from "./Training";
import Paper from "./Paper";
import ReactDOM from "react-dom";
import { lightgrey } from "color-name";
import Header from "./Header";
const mainClassName = "App-link";
import Button from "@material-ui/core/Button";
import Card from "./Card";

const App = () => {
  const [trainings, setTrainings] = useState([]);
  const addTraining = () => {
    setTrainings([
      ...trainings,
      {
        id: trainings.length,
        value: <Paper />
      }
    ]);
  };

  return (
    <div className="App" style={{ backgroundColor: "#999", width: "300px" }}>
          
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
        <Paper />
        {trainings.map(train => (
          <div>{train.value}</div>
        ))}
      </body>
    </div>
  );
};
export default App;
