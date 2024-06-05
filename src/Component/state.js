import React, { useState } from "react";

const State = () => {
  const [state, setState] = useState({ plus: 5, minus: 10 });
  const [fun] = useState(() => {
    let fun = window.localStorage.getItem("token");
    return fun || "Set using function";
  });
  const [count, setCount] = useState(100);
  const { plus, minus } = state;
  const handlePlus = () => {
    setState({ ...state, plus: plus + 5 });
  };
  const handleMinus = () => {
    setState({ ...state, minus: minus - 1 });
  };

  return (
    <>
      <h2>Use State Hook</h2>
      <h6>Plus Operation : {plus}</h6>
      <button className="btn btn-primary" onClick={handlePlus}>
        Plus 5!
      </button>
      <h6>Minus Operation : {minus}</h6>
      <button className="btn btn-primary" onClick={handleMinus}>
        Minus 1!
      </button>
      <h4>Use state using function: {fun}</h4>
      <h4>Multiple Effect with one State : {count}</h4>
      <button className="btn btn-primary" onClick={() => setCount(100)}>
        Reset
      </button>{" "}
      <span />
      <button
        className="btn btn-primary"
        onClick={() => setCount((p) => p * 2)}
      >
        Multiply By 2
      </button>{" "}
      <span />
      <button
        className="btn btn-primary"
        onClick={() => setCount((p) => p / 2)}
      >
        Divide By 2
      </button>
    </>
  );
};

export default State;
