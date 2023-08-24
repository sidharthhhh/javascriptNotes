import { useState } from "react";


const StateTutorial = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
      
      }

      const [inputValue, setInputValue] = useState("sidharth");

      let onChange = (e) => {
           const newValue = e.target.value;
           setInputValue(newValue)
      }



  return (
    <>
    <div>
        {counter}
        <button onClick={increment}>Increment</button>
    </div>
    <div>
      <input type="text" placeholder="enter something" onChange={onChange} />
      {inputValue}
    </div>
    </>

  )
}

export default StateTutorial