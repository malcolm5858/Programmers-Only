import React from "react";
import { Button } from "@material-ui/core";

function YesNoBar() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", textAlign: "center" }}>
      <Button>Yes</Button>
      <span></span>
      <Button>No</Button>
    </div>
  );
}

export default YesNoBar;
