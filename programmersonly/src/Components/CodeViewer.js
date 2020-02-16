import React from "react";
import testImg from "../assets/CodePic.png";

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
