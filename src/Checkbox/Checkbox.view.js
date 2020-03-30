import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './Checkbox.styles';

export default function SimpleCheckbox() {
  const classes = useStyles();

  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
  };

  return <Checkbox className={classes.root} onChange={handleChange} />;
}
