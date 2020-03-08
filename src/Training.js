import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "./Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const createData = (excecrise, weight, sets, reps) => (
  { excecrise, weight, sets, reps }
)

const headerData = ['Excecrise', 'Weight', 'Sets', 'Reps']

const Training = ({data}) => {
  const [rows, setRows] = useState(data);
  const addRow = () => {
    setRows([...rows, createData()]);
  };

  return (
    <>
      <div>{new Date().toISOString().slice(0, 10)}</div>
      <div>Training Name</div>
      <Table>
        <TableHead>
          <TableRow>
            {headerData.map((cell) => <TableCell>{cell}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow contentEditable>
              <TableCell>{row.excecrise}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.sets}</TableCell>
              <TableCell>{row.reps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="outlined" color="primary" onClick={addRow}>
        Add Excecrise
      </Button>
    </>
  );
};
export default Training;
