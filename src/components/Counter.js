const Counter = () => {
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
    <div>
      {openOrClosed ? <div>the secret message!</div> : null}

      <button onClick={onButtonClick}>{openOrClosed ? "Close" : "Open"}</button>
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default Counter;
