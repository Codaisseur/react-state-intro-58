import { useState } from "react";

import "./App.css";

function App() {
  //    actual Value || setter =>
  const [openOrClosed, setOpenClosed] = useState(false);

  const [counter, setCounter] = useState(0);

  const onButtonClick = () => {
    setOpenClosed(!openOrClosed);
  };

  const increase = () => {
    console.log("is this clicking");
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello class 58!</h1>

        {openOrClosed ? <div>the secret message!</div> : null}

        <button onClick={onButtonClick}>
          {openOrClosed ? "Close" : "Open"}
        </button>
        <div>
          <h3>Counter: {counter}</h3>
          <button onClick={increase}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
