import { createContext, useState } from "react"

export const Datacontext = createContext();

export const DataProvider=(props)=>{
    const [datas,setData]=useState([]);
    return (
        <>
    <Datacontext.Provider value={[datas,setData]}>
        {props.children}
    </Datacontext.Provider>
    </>
    )
    
}


