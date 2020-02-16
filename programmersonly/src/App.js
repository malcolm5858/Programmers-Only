import React, { useEffect } from "react";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  useEffect(() => {
    fetch("").then(response =>
      response.json().then(data => {
        console.log(data);
      })
    );
  }, []);

  return <Signup />; //<MainPage />;
}

export default App;
