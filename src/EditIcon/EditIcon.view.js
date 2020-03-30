import React from 'react';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
// import useStyles from './EditIcon.style';


const EditIcon = ({ onClick, editable }) => (
  <IconButton onClick={onClick}>
    {editable
      ? <DoneOutlinedIcon color="secondary" /> :  < EditOutlinedIcon />
      }
  </IconButton>
);
export default EditIcon;
