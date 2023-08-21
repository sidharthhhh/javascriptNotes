import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(5)

// let counter = 15;
const addValue = () =>{
  // console.log("value added", Math.random())
  // console.log("clicked", counter);
  counter = counter+1;

  setCounter(counter)
}
const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
}

  return (
   <>
   <h1>chai or react</h1>
   <h2>counter value: {counter}</h2>

   <button
   onClick={addValue}
   >Add value {counter}</button>
   <br />
   <button  onClick={removeValue}>remove value {counter}</button>
   <p>fotter : {counter}</p>

   </>
  )
}

export default App
