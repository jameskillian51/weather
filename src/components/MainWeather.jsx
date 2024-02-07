import { useContext } from "react";
import { TempContext } from "../context/util-context.jsx";
import { animStyle, formatDate, convertTo12HourFormat, } from "../util/util.js";

export default function MainWeather({
  country,
  main,
  description,
  iconCode,
  details,
}) {
  const maintemp = useContext(TempContext);
  const [date, time] = details.dt_txt.split(" ");


  
  return (
    <section className="weather">
      <div>
        <div className="weather-main-icon">
          <img
            className={animStyle(main)}
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt="weather icon"
          />
        </div>
        <h2 className="weather-main-text">{main}</h2>
      </div>
      <div className="weather-main-stat">
        <span className="weather-date">{`${convertTo12HourFormat(time)}, ${formatDate(date)}`}</span>
        <span className="location-name">{country}</span>
        <h1 className="main-temp">{maintemp.maintemp}°C</h1>
        <span className="weather-desc">{description}</span>
      </div>
    </section>
  );
}
