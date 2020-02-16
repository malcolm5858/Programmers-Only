import React from "react";
import { Typography } from "@material-ui/core";

function Bio(props) {
  return (
    <div>
      <Typography variant="body1" style={{ width: "100%", overflowX: "auto" }}>
        {props.text}
      </Typography>
    </div>
  );
}

export default Bio;
