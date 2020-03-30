import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TrainDaysForm = (data) => {
  const classes = useStyles();
  const [days, setDays] = useState({
    days: data.data,
  });
  const functionDays = data.changeDaysPerWeek;
  const handleChange = (event) => {
    const { name } = event.target;
    setDays({
      ...days,
      [name]: event.target.value,
    });
    data.changeDaysPerWeek(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} value={days.days}>
        <InputLabel htmlFor="days-native-helper">Trainings</InputLabel>
        <NativeSelect
          value={days.days}
          onChange={handleChange}
          inputProps={{
            name: 'days',
            id: 'days-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
          <option value={6}>Six</option>
        </NativeSelect>
        <FormHelperText>Trainings per Week</FormHelperText>
      </FormControl>
    </div>
  );
};
export default TrainDaysForm;
