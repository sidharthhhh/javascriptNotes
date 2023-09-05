import React, { useContext } from "react";
import { DataContext } from "../utils/Context";

const Grandchild = (props) => {
    const [data, setdata] = useContext(DataContext);
    return (
        <div>
            <h1>Grandchild</h1>
            <h4>{data}</h4>
        </div>
    );
};

export default Grandchild;
