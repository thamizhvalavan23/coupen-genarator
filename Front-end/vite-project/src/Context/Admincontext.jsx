import React from "react";
import { createContext, useState } from "react";

export const Addmincontext = createContext();


const AddmincontextProvider = (props) => {


    const [token, setToken] = useState(localStorage.getItem("atoken") ? localStorage.getItem('atoken') : "");




    const value = {
        token, setToken

    }


    return (
        <div>
            <Addmincontext.Provider value={value} >
                {props.children}
            </Addmincontext.Provider>
        </div>

    )
}


export default AddmincontextProvider;