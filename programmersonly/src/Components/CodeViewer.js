import React from "react";
import { Container } from "@material-ui/core";
import testImg from "/Users/malcolmmachesky/Documents/UncommonHacks/programmersonly/src/assets/Screen Shot 2020-02-15 at 5.14.23 PM.png";

function CodeViewer() {
  return (
    <Container fixed>
      <div>
        <img
          src={testImg}
          alt="Img Not Found"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Container>
  );
}

export default CodeViewer;
