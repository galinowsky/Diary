import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';


const DeleteTrainingIcon = ({onClick}) => (
  <IconButton onClick={onClick}>
    <HighlightOffIcon />
  </IconButton>
);
export default DeleteTrainingIcon;
