import React from "react";
import { Button } from "@material-ui/core";

function TestPage() {
  return (
    <div>
      <Button
        onClick={async () => {
          const url =
            "https://github.com/malcolm5858/Lab-1-cs-430/blob/master/Gui.java";
          const response = await fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(url)
          });

          if (response.ok) {
            console.log("response worked");
          }
        }}>
        Button
      </Button>
    </div>
  );
}

export default TestPage;
