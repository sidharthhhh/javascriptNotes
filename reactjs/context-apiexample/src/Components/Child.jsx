import React from "react";
import Grandchild from "./Grandchild";

const Child = () => {
    // const { data } = props;
    return (
        <div>
            <h1>Child</h1>
            {/* <h4>{data}</h4> */}
            <hr />
            {/* <Grandchild data={data} /> */}
            <Grandchild />
        </div>
    );
};

export default Child;
