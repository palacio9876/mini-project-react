import { useState } from "react";
import "../../assets/css/MainCounter.css";

import React from "react";

export const MainCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container-counter">
      <div className="container-count">
        <h1>{counter}</h1>
        <div className="buttons">
          <button onClick={() => setCounter(counter + 1)}>Add</button>
          <button onClick={() => setCounter(0)}>Restart</button>
          <button onClick={() => setCounter(counter - 1)}>Substract</button>
        </div>
      </div>
    </div>
  );
};
