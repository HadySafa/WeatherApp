
import { useState,useEffect } from "react";


function useFetch(URL){

    const [data,setData] = useState();
    const [error,setError] = useState("");
    const [pending,setPending] = useState();


    async function fetchData(URL){

        setPending(true)

        try{
            const response = await fetch(URL);
            if(!response.ok) throw new Error("Invalid or Unfound City Name");
            const dataReturned = await response.json();
            if(dataReturned){
                setData(dataReturned);
                setPending(false)
            }
        }
        catch(e){
            setError(e.message);
            setPending(false)
        }
    }

    useEffect( () => {
        fetchData(URL)
    },[URL])

    useEffect( () => {
        console.log(error)
    },[error])


    return { data, error, pending, setError}
}

export default useFetch