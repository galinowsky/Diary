import React from 'react';
import Typography from '@material-ui/core/Typography';

import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import useStyles from './TrainHeader.style';
import DeleteTrainingIcon from '../DeleteTrainingIcon';

export default function TrainHeader({onClick}) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <Typography
          id="tableTitle"
          display="block"
          variant="h6"
          align="left"
          nowrap="true"
        >
          <div className={classes.HeaderElem}>
            {new Date().toISOString().slice(0, 10)}
          </div>
          <div className={classes.HeaderElem}> Training Name</div>
          <div className={classes.HeaderElem}>'
          {console.log(onClick)}
            <DeleteTrainingIcon className={classes.button} onClick={onClick}/>
          </div>
        </Typography>
      </div>
      <Divider variant="fullWidth" />
    </>
  );
}
