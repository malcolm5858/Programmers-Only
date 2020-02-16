import React from "react";
import SideMenu from "./Components/SideMenu";
import CodeViewer from "./Components/CodeViewer";
import { makeStyles } from "@material-ui/core/styles";
import YesNoBar from "./Components/YesNoBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <SideMenu />
      <CodeViewer /> */}
      <YesNoBar />
    </div>
  );
}

export default App;
