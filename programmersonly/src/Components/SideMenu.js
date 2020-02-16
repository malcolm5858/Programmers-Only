import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../assets/profilePic.png";
import { Grid, Avatar, Typography } from "@material-ui/core";
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: "grey"
  },
  bigAvatar: {
    margin: 20,
    width: 50,
    height: 50
  },
  name: {
    margin: 20
  }
}));

function SideMenu(props) {
  const classes = useStyles();
  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Avatar src={ProfilePic} className={classes.bigAvatar}></Avatar>
        <Typography variant="h5" className={classes.name}>
          {props.Name}
        </Typography>
      </Grid>
    </Drawer>
  );
}

export default SideMenu;
