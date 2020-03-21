import React, { useState } from "react";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const EditIcon = props => {
  const condition = [{ ...props }];
  console.log(condition.color);

  return <EditOutlinedIcon hiden="True" />;
};
export default EditIcon;
