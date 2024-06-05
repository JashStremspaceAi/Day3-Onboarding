import React, { useState, useEffect } from "react";

const Effect = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);
  useEffect(() => {
    setEffectLogs((prev) => [...prev, "dependant render"]);
  }, [randomNumber]);
  useEffect(() => {
    window.alert("Effect One whlie Mounting");
  }, []);
  useEffect(() => {
    console.log("This will be called after every render!");
  });
  return (
    <>
      <h2>{randomNumber}</h2>
      <button
        className="btn btn-secondary"
        onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}
      >
        Generate Random Number
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{index + " " + effect}</div>
        ))}
      </div>
    </>
  );
};

export default Effect;
