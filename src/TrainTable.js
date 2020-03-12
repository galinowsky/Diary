import React, { useState } from "react";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
//import Paper from "./Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "./Checkbox";
import Delete from "@material-ui/icons/Delete";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Divider from "@material-ui/core/Divider";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DoneIcon from "@material-ui/icons/Done";
const useStyles = makeStyles({
  tableHeader: {
    color: "#dedede"
  }
});

const createData = (excecrise, weight, sets, reps) => ({
  excecrise,
  weight,
  sets,
  reps
});

const headerData = ["Excecrise", "Weight", "Sets", "Reps"];
//const [buttonKeys, setButtonKeys] = useState(0)

const TrainTable = ({ data }) => {
  const [rows, setRows] = useState(data);
  const addRow = () => {
    setRows([...rows, data]);
  };

  const deleteRow = i => {
    rows.splice(i, 1);
    setRows([...rows]);
  };

  const editRow = i => {
    console.log(rows[i]);
  };

  const classes = useStyles();
  console.log(rows.length);
  return (
    <>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHeader} color="#dedede">
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
          {rows.map((row, i) => (
            <TableRow contentEditable="True" id={i}>
              <TableCell>
                <Delete onClick={() => deleteRow(i)} />
              </TableCell>
              <TableCell>{row.excecrise}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.sets}</TableCell>
              <TableCell>{row.reps}</TableCell>
              <EditOutlinedIcon onClick={() => editRow(i)} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddBoxOutlinedIcon variant="outlined" color="black" onClick={addRow}>
        Add Excecrise
      </AddBoxOutlinedIcon>
    </>
  );
};

export default TrainTable;
