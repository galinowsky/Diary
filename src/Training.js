import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "./Paper";
import { TableHead } from "@material-ui/core";
//import Table from "@material-ui/core/Table";
//import TableContainer from "@material-ui/core/TableContainer";
//import Paper from "@material-ui/core/Paper";

function createData(excecrise, weight, sets, reps) {
  return { excecrise, weight, sets, reps };
}

const Training = () => {
  const [rows, setRows] = useState([]);
  const addRow = () => {
    setRows([...rows, createData()]);
  };
  return (
    <table>
      <thead>
        <tr>
          <th colspan="4">{new Date().toISOString().slice(0, 10)}</th>
        </tr>
        <tr>
          <th colspan="4" contentEditable="True">
            Training Name{" "}
          </th>
        </tr>
        <tr>
          <th>Excecrise</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody contentEditable="True">
        {rows.map(row => (
          <tr>
            <td>{row.excecrise}</td>
            <td>{row.weight}</td>
            <td>{row.sets}</td>
            <td>{row.reps}</td>
          </tr>
        ))}
      </tbody>
      <td colspan="4">
        <Button variant="outlined" color="primary" onClick={addRow}>
          Add Excecrise
        </Button>
      </td>
    </table>
  );
};
export default Training;
