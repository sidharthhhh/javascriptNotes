import React from "react";
import Child from "./Child";

const Parent = () => {
    // const { data } = props;
    return (
        <div>
            <h1>Parent</h1>
            {/* <h3>{data}</h3> */}
            <hr />
            {/* <Child data={data} /> */}
            <Child />
        </div>
    );
};

export default Parent;
