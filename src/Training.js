import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TrainTable from "./TrainTable";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3)
    }
  },
  title: {
    margin: 10,
    //  padding: 20
    fontWeight: 545
  }
}));

const Training = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography className={classes.title} id="tableTitle">
          <div>{new Date().toISOString().slice(0, 10)}</div>
          <div>Training Name</div>
        </Typography>
        <TrainTable {...props} />
      </Paper>
    </div>
  );
};
export default Training;
