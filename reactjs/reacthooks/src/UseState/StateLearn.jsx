import { useState } from "react";

const StateLearn = () => {
    let [n, setn] = useState(5);
    const changenumber = (n) => {
      setn(n)
    }

    const submithandler = (event) => {
      event.preventDefault();
      // console.log(event)
      console.log(username, skill)
    }
    const [username, setusername] = useState("");
    const [skill, setskill] = useState("");
    // console.log(username)
 
  return <>
    <h1>{n}</h1>
    <button onClick={()=> changenumber(13)}>change value</button>
    <form action="" onSubmit={submithandler}>
      <input onChange={(e)=>setusername(e.target.value)} value={username} type="text" placeholder="username" />
      <input onChange={(e)=> setskill(e.target.value)} value={skill} type="text" placeholder="skills" />
      <button>submit</button>
    </form>
  </>;
};

export default StateLearn;
