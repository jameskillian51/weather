import { useState, useEffect, useRef } from "react";

export function useFetch(initial, location = null) {
    const [fetchData, setFetchData] = useState(initial);
    const [isLoading, setIsLoading] = useState(false);
    const ApiKey = "f810ca1cc126561b1d51aa0ed2021812";

    let errorMsg = useRef();
    const deniedLocation = useRef();

    useEffect(() => {
        async function getWeather() {
            setIsLoading(true);
            try {
                let latitude = "";
                let longitude = "";

                if (location && typeof location === "object") {
                    latitude = location.lat;
                    longitude = location.long;
                    console.log(location);
                } else {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    latitude = position.coords.latitude;                    
                    longitude = position.coords.longitude;
                }

                // Check if location properties have changed
                if (
                    latitude !== fetchData.latitude ||
                    longitude !== fetchData.longitude
                ) {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`
                    );

                    const data = await response.json();

                    setFetchData({
                        ...data,
                        latitude,
                        longitude,
                    });
                    
                }
            } catch (error) {
                /* console.log(error); */
                deniedLocation.current = error.code == 1 ? true : false;
                errorMsg.current = `Error getting geolocation: ${error.message}`;
            }

            setIsLoading(false);
        }

        getWeather();
    }, [location, fetchData.latitude, fetchData.longitude]);

    return {
        data: fetchData,
        list: fetchData.list,
        errorMsg,
        isLoading,
        denied: deniedLocation
    };
}
