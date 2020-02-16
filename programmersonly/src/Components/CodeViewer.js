import React from "react";
import testImg from "../assets/CodePic.png";

function CodeViewer(props) {
  return (
    <div
      style={{
        height: "750px",
        overflowY: "scroll",
        width: "100%",
        overflowX: "hidden"
      }}>
      <img src={props.img} alt="Img Not Found" />
    </div>
  );
}

export default CodeViewer;
