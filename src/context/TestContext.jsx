import { createContext } from "react";
import { useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({children})=>{

    const [count, setCount]= useState([]);
    const [newCount, setNewCount] = useState()
    const [newCountLength, setNewCountLength] = useState()
    const [ordenDeCompra, setOrdenDeCompra]= useState("")


    return(
        <TestContext.Provider value={{ordenDeCompra, setOrdenDeCompra,count, setCount, newCount, setNewCount, newCountLength, setNewCountLength}}>
            {children}
        </TestContext.Provider>
    )
}