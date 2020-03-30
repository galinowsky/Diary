import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Typography from '@material-ui/core/Typography';
import Checkbox from './Checkbox';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

const useStyles = makeStyles({
  tableHeader: {
    color: '#dedede',
  },
});
const createData = {
  excecrise: 'exc',
  weight: 0,
  sets: 0,
  reps: 0,
  editable: false,
};

const headerData = ['Excecrise', 'Weight', 'Sets', 'Reps'];
// const [buttonKeys, setButtonKeys] = useState(0)

const TrainTable = ({ data }) => {
  // console.log(data);

  const [rows, setRows] = useState(data);
  // const [rowEditable, setRowEditability] = useState(false);

  const addRow = () => {
    setRows([...rows, { ...createData }]);
  };

  const deleteRow = (i) => {
    rows.splice(i, 1);
    setRows([...rows]);
  };

  const EditRow = (i) => {
    rows[i].editable = !rows[i].editable;
    setRows([...rows]);
  };

  const classes = useStyles();
  return (
    <>

      <Table aria-label="simple table">
        <TableHead className={classes.tableHeader} color="#dedede">
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            {headerData.map((cell, id) => (
              <TableCell key={id.toString()}><Typography variant="h6" fontWeight="Bold">{cell}</Typography></TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              contentEditable={row.editable}
              key={i.toString()}
              id={i}
              style={{ textDecoration: 'underlinie' }}
            >
              <TableCell>
                <DeleteIcon onClick={() => deleteRow(i)} />
              </TableCell>
              <TableCell>{row.excecrise}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.sets}</TableCell>
              <TableCell>{row.reps}</TableCell>
              <TableCell>
                <EditIcon
                  onClick={() => EditRow(i)}
                  editable={row.editable}
                />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddBoxOutlinedIcon variant="outlined" color="primary" onClick={addRow}>
        Add Excecrise
      </AddBoxOutlinedIcon>
    </>
  );
};

export default TrainTable;
