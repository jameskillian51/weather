import { useState, useEffect } from "react";

export function useGetLocation(sendValue, setState) {
    const [fetchData, setFetchData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(undefined)
    const ApiKey = "f810ca1cc126561b1d51aa0ed2021812";


    useEffect(() => {



        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${sendValue.value}&limit=1&appid=${ApiKey}`);
                const data = await response.json();
                setFetchData(data);
            } catch (error) {
                setIsError(error)
            }
            setIsLoading(false)

        }

        if (sendValue.value !== '' && sendValue.state && sendValue.value.length > 3) {

            fetchData();
        }else{
            setFetchData(undefined);
            setIsError(undefined);
            setIsLoading(false)
        }


        
      
    }, [sendValue])
 
    return {
        data: fetchData,
        loading: isLoading,
        error: isError
    }
}