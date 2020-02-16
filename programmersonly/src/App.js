import React from "react";
import SideMenu from "./Components/SideMenu";
import CodeViewer from "./Components/CodeViewer";
import { makeStyles } from "@material-ui/core/styles";
import YesNoBar from "./Components/YesNoBar";
import Bio from "./Components/Bio";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideMenu />
      <Grid container direction="column" justify="center" alignItems="center">
        <CodeViewer />
        <YesNoBar />
        <Bio />
      </Grid>
    </div>
  );
}

export default App;
