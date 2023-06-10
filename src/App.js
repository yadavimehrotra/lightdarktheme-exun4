import "./App.css";

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function printstate() {
    if (color === "white") {
      setColor("black");
    } else {
      setColor("white");
    }
  }

  return (
    <>
      <div className={color === "white" ? "white" : "black"}>
        <button className="btn-theme" onClick={printstate}>
          change theme
        </button>
      </div>
    </>
  );
}

export default App;
