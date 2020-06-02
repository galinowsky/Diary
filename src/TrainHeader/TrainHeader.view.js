import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './TrainHeader.style';
import DeleteTrainingIcon from '../DeleteTrainingIcon';
import TrainDate from '../TrainDate'

export default function TrainHeader({ onClick }) {
  const classes = useStyles();
  return (
    <>
      <Typography
        id="tableTitle"
        display="block"
        variant="h6"
        align="left"
        nowrap="true"
      >
        <div className={classes.title}>
          <div>
          <div className={classes.HeaderElem}> Training Name</div>
            <div className={classes.HeaderElem}>
              {/* {new Date().toISOString().slice(0, 10)} */}
              <TrainDate />
            </div>
            
          </div>
          <div>
            <DeleteTrainingIcon className={classes.button} onClick={onClick} />
          </div>
        </div>
      </Typography>
      <Divider variant="fullWidth" />
    </>
  );
}
