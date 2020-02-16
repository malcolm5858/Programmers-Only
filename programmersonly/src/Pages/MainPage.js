import React from "react";
import SideMenu from "../Components/SideMenu";
import { Grid, makeStyles } from "@material-ui/core";
import CodeViewer from "../Components/CodeViewer";
import YesNoBar from "../Components/YesNoBar";
import Bio from "../Components/Bio";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  }
}));

function MainPage({ match, location }) {
  const {
    params: { userId }
  } = match;
  const dataUserName = null;
  const dataOtherUser = null;
  React.useEffect(() => {
    fetch("/getUserName").then(response =>
      response.json().then(data => {
        dataUserName = data;
      })
    );
  });
  React.useEffect(() => {
    fetch("/findUser").then(response =>
      response.json().then(data => {
        dataOtherUser = data;
      })
    );
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideMenu />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ width: "100%", overflowX: "auto" }}>
        <CodeViewer />
        <YesNoBar />
        <Bio />
      </Grid>
    </div>
  );
}

export default MainPage;
