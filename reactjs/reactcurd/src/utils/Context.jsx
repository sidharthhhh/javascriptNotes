import { createContext, useState } from "react";

export const UserContext = createContext(null);
const Context = (props) => {
  const { children } = props;
  
  const [users, setusers] = useState([
    { username: "John Doe", skill: "Full Stack Developer" },
  ]);

  const [username, setusername] = useState("");
  const [skill, setskill] = useState("");

  const [active, setActive] = useState(null);
 
  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        username,
        setusername,
        skill,
        setskill,
        active,
        setActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
