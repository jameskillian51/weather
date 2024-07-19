import { useRef, useState } from "react";
import { useFetch } from "./hooks/useFetch.js";
import "./App.css";
import { useGetLocation } from "./hooks/useGetLocation.js";
import MainWeather from "./components/MainWeather.jsx";
import ForecastBody from "./components/ForecastBody.jsx";
import ForecastTable from "./components/ForecastTable.jsx";
import WidgetBody from "./components/WidgetBody.jsx";
import DefaultWidget from "./components/DefaultWidget.jsx";
import { TempContext } from "./context/util-context.jsx";
import IconWidget from "./components/IconWidget.jsx";
import Loader from "./components/Loader.jsx";
import MsgWidget from "./components/MsgWidget.jsx";
import Theme from "./components/Theme.jsx";
import {
  Celsius,
  calculateDewPoint,
  getWindDirection,
  getTemperatureMessage,
  getDaylightStatus,
  convertEpochToDate,
} from "./util/util.js";

import humidityLogo from "./assets/icons/humidity.svg";
import feelLogo from "./assets/icons/thermometer.svg";
import windLogo from "./assets/icons/wind.svg";
import pressureLogo from "./assets/icons/pressure.svg";
import welcomeLogo from "./assets/weather.svg";
import errorLogo from "./assets/error.svg";


function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const enteredValue = input.current.value;
    console.log("value ", enteredValue.length);
    if (enteredValue === "" || enteredValue.length < 4) {
      alert("Please enter a city");
      setSendValue((prev) => {
        return {
          ...prev,
          value: "",
          state: false,
        };
      });
      return;
    }
    setSendValue((prev) => {
      return {
        ...prev,
        value: enteredValue,
        state: true,
      };
    });
  }

  const input = useRef();

  const [theme, setTheme] = useState(getDaylightStatus());
  const [sendValue, setSendValue] = useState({
    value: "",
    state: false,
  });

  const {
    data: location,
    loading,
    error,
  } = useGetLocation(sendValue, setSendValue);
  const isEmpty =
    typeof location === "undefined"
      ? undefined
      : Array.isArray(location)
      ? location.length === 0
      : false;

  let userLocation = null;

  if (Array.isArray(location) && location.length > 0 && typeof(location) !== 'undefined') {
    userLocation = {
      lat: location[0].lat,
      long: location[0].lon,
    };
  }

  const { data, list, errorMsg, isLoading, denied } = useFetch(  "", userLocation );
  console.log();
  const isValidData = data && data.cod == 200;

const country = isValidData ? data.city : "";
const weatherDetails = isValidData ? data.list[0].weather[0] : "";
const initDetails = isValidData ? data.list[0].main : "";
const windDetails = isValidData ? data.list[0].wind : "";
const mainDetails = isValidData ? data.list[0].main : "";
const mainTemp = isValidData ? Celsius(data.list[0].main.temp) : "";
const maxTemp = isValidData ? Celsius(data.list[0].main.temp_max) : "";
const minTemp = isValidData ? Celsius(data.list[0].main.temp_min) : "";


  const ctxValue = {
    maintemp: mainTemp,
    mintemp: minTemp,
    max: maxTemp,
    sunrise: country? convertEpochToDate(country.sunrise) : undefined,
    sunset: country? convertEpochToDate(country.sunset): undefined,
  };

  return (
    <TempContext.Provider value={ctxValue}>
      <section className={"weather-body " + theme}>
        <section className="weather-hold">
          <header>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>

              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Search for your country or city"
                  type="search"
                  className="input"
                  ref={input}
                />
              </form>
            </div>
          </header>

          <Theme theme={theme} onSubmit={setTheme} />

          {!data && denied && !isLoading && !loading && !isEmpty && (
            <MsgWidget
              icon={welcomeLogo}
              header="Explore the 3-Hour Weather Forecast"
              subtext=" Find your city or enable location services for accurate results"
            />
          )}
          {(isEmpty === true || error) && (
            <MsgWidget
              icon={errorLogo}
              header="Oops, we encountered an error"
              subtext="Sorry we couldn't find that location"
            />
          )}

          {(isLoading || loading) && <Loader />}
          {data && data.cod == 200 && !isLoading && !loading && !isEmpty && (
            <>
              <MainWeather
                country={country}
                main={weatherDetails.main}
                description={weatherDetails.description}
                iconCode={weatherDetails.icon}
                details={data.list[0]}
              />
              <ForecastBody list={list} />
              <ForecastTable list={list} />
              <WidgetBody>
                <IconWidget
                  title="Wind"
                  value1={Math.floor(windDetails.speed * 2.237)}
                  icon={windLogo}
                  type1="Wind"
                  unit="MPH"
                  value2={Math.floor(windDetails.gust * 2.237)}
                  type2="Gusts"
                  iconText={getWindDirection(windDetails.deg)}
                />

                <DefaultWidget
                  title="Humidity"
                  icon={humidityLogo}
                  value={mainDetails.humidity + "%"}
                  text={`The dew point is ${calculateDewPoint(
                    initDetails.temp,
                    mainDetails.humidity
                  )}°C right now`}
                />
              </WidgetBody>
              <WidgetBody>
                <DefaultWidget
                  title="Feels Like"
                  icon={feelLogo}
                  value={Math.round(Celsius(mainDetails.feels_like)) + "°C"}
                  text={getTemperatureMessage(
                    Math.round(Celsius(mainDetails.feels_like))
                  )}
                />

                <IconWidget
                  title="Pressure"
                  icon={pressureLogo}
                  value1={mainDetails.sea_level}
                  type1="Sea Level"
                  unit="hPa"
                  value2={mainDetails.grnd_level}
                  type2="Ground Level"
                />
              </WidgetBody>
            </>
          )}
        </section>
      </section>
    </TempContext.Provider>
  );
}

export default App;
