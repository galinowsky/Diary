import React, { useState } from 'react';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './EditIcon.style';


const EditIcon = ({ onClick, editable }) => {
  const classes = useStyles();

  return (
  <IconButton onClick={onClick}  >
    <EditOutlinedIcon
      color={editable ? 'secondary' : 'primary'}
    />
  </IconButton>
);
};
export default EditIcon;
