import React from "react";
import testImg from "/Users/malcolmmachesky/Documents/UncommonHacks/programmersonly/src/assets/Screen Shot 2020-02-15 at 5.14.23 PM.png";

function CodeViewer() {
  return (
    <div
      style={{
        height: "750px",
        overflowY: "scroll",
        width: "100%",
        overflowX: "hidden"
      }}>
      <img src={testImg} alt="Img Not Found" />
    </div>
  );
}

export default CodeViewer;
