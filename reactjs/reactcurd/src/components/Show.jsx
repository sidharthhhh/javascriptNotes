import{ useContext } from "react";
import { UserContext } from "../utils/Context";

const Show = () => {
    const { active, users, setusers,setActive,setusername,setskill } = useContext(UserContext);

    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);

        // setusers(users.filter((e, idx) => idx !== i));
    };

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
    };

    return (
        <ul>
            {users.map((e, i) => {
                return (
                    <li key={i}>
                        {e.username} | {e.skill}
                        {active === null && (
                            <span>
                                <span onClick={() => ActiveHandler(i)}>✏️</span>
                                <span onClick={() => DeleteHandler(i)}>❌</span>
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Show;