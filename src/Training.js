import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TrainTable from "./TrainTable";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CancelPresentationOutlinedIcon from "@material-ui/icons/CancelPresentationOutlined";
import TrainHeader from "./TrainHeader";
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
        <TrainHeader />

        <TrainTable {...props} />
      </Paper>
    </div>
  );
};
export default Training;
