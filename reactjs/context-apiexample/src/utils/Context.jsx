import { createContext, useState } from "react";

export const DataContext = createContext(null);
export const as = createContext(null);

const Context = (props) => {
    const [data, setdata] = useState("Normal Information");

    const { children } = props;
    return (
        <DataContext.Provider value={[data, setdata]}>
            {children}
        </DataContext.Provider>
    );
};

export default Context;
