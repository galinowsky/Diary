import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//import Table from "@material-ui/core/Table";
//import TableContainer from "@material-ui/core/TableContainer";
//import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(excecrise, weight, sets, reps) {
  return { excecrise, weight, sets, reps };
}

const rows = [
  createData("Bench Press", 159, 6.0, 24, 4.0),
  createData("Pull up", 237, 9.0, 37, 4.3)
];

const Training = () => (
  <table contentEditable="true">
    <thead>
      <tr>
        <th colspan="4">Date</th>
      </tr>
      <tr>
        <th colspan="4">Training </th>
      </tr>
      <tr>
        <th>Excecrise</th>
        <th>Weight</th>
        <th>Sets</th>
        <th>Reps</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(row => (
        <tr key={row.excecrise}>
          <td component="th" scope="row">
            {row.excecrise}
          </td>
          <td align="right">{row.weight}</td>
          <td align="right">{row.sets}</td>
          <td align="right">{row.reps}</td>
        </tr>
      ))}
    </tbody>
    <td colspan="4">
      <Button variant="outlined" color="primary" onClick="addRow(this)">
        Add Excecrise
      </Button>
    </td>
  </table>
);
export default Training;
