import React, { useState } from "react";
import Training from "./Training";
import ReactDOM from "react-dom";

const mainClassName = "App-link";
const HelloWorld = ({ firstName, lastName }) => (
  <p>
    {lastName} {firstName}
  </p>
);
const App = () => {
  const [name, setName] = useState("Jakub");
  const [number, setNumber] = useState(3);

  return (
    <div className="App">
            
      <header className="App-header">
                       
        <HelloWorld firstName={name} lastName="Galiński" />
        <Training />
              
      </header>
          
    </div>
  );
};
export default App;
