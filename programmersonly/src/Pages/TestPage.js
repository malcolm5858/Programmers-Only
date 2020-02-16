import React from "react";
import { Button } from "@material-ui/core";

function TestPage() {
  return (
    <div>
      <Button
        onClick={async () => {
          const url =
            "https://github.com/malcolm5858/Lab-1-cs-430/blob/master/Gui.java";
          const response = await fetch("/getURl", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(url)
          });

          response.json().then(data => {
            console.log(data);
          })
          
        }}>
        Button
      </Button>
    </div>
  );
}

export default TestPage;
