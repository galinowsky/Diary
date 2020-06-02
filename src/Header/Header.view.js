import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Header.styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > 
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Training Diary
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
