import React from 'react';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const DeleteIcon = ({ onClick }) => (
  <IconButton onClick={onClick}>
 
    <Delete />
  </IconButton>
);
export default DeleteIcon;
