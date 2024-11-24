
import { useState, useEffect, createContext } from "react"
import useFetch from "../Hooks/useFetch";


export const MyContext = createContext(null)

function GlobalState({ children }) {

    const [searchValue,setSearchValue] = useState("Beirut")

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=e5202c07d085c393c015de2366fd63ed`
    const {data,error,pending,setError} = useFetch(URL)

    return (

        <MyContext.Provider value={{
                searchValue,setSearchValue,data,error,pending,setError
        }}>
            {children}
        </MyContext.Provider>

    );

}


export default GlobalState