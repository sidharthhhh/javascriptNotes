import { useState } from "react";

const ReducerTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        click here
      </button>
      {showText && <p>This is text</p>}
    </div>
  );
};

export default ReducerTutorial;
