import React, { useState } from "react";
import Button from "@material-ui/core/Button";
//import Paper from "./Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  tableHeader: {
    color: "lightGrey"
  }
});

const createData = (excecrise, weight, sets, reps) => ({
  excecrise,
  weight,
  sets,
  reps
});

const headerData = ["Excecrise", "Weight", "Sets", "Reps"];

const TrainTable = ({ data }) => {
  const [rows, setRows] = useState(data);
  const addRow = () => {
    setRows([...rows, createData()]);
  };
  const classes = useStyles();
  return (
    <>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            {headerData.map(cell => (
              <TableCell>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow contentEditable>
              <TableCell>
                <Checkbox />
              </TableCell>
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

export default TrainTable;
