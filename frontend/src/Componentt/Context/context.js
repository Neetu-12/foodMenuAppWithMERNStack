import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [multiple, setmultiple] = useState({})
    const [status, setstatus] = useState(false)
    // const [foodValidator, setfoodValidator] = useState("")
    useEffect(() => {
        if (localStorage.getItem("SetData")) {
            axios.get("http://localhost:8000/user/auth", {
                headers: {
                    signtoken: localStorage.getItem("SetData")
                }
            }).then((result) => {
                let { createAt, email, id, password, userName } = result.data[0]

                setmultiple({ createAt, email, id, password, userName });
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [status])

    return (
        <AppContext.Provider value={{ multiple, setmultiple, status, setstatus }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
