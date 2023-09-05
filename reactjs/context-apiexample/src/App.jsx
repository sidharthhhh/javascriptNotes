import React, { useState } from "react";
import Parent from "./Components/Parent";

const App = () => {
    // const [data, setdata] = useState("Normal Information");
    return (
        <div>
            <h1>CONTEXT API EXAMPLE</h1>
            {/* <h3>{data}</h3> */}
            <hr />
            {/* <Parent data={data} /> */}
            <Parent />
        </div>
    );
};

export default App;
