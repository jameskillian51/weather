import { useState, useEffect } from "react";

export function useGetLocation(sendValue, setState) {
    const [fetchData, setFetchData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(undefined)
    const ApiKey = import.meta.env.VITE_API_KEY;
    const GeoUrl = import.meta.env.VITE_GEO_URL;


    useEffect(() => {



        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(`${GeoUrl}?q=${sendValue.value}&limit=1&appid=${ApiKey}`);
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