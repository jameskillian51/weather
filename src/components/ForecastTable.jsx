import {
  Celsius,
  findMinMaxTemperature,
  groupByDate,
  animStyle,
  formatDate,
  convertTo12HourFormat,
} from "../util/util.js";
import TemperatureProgressBar from "./Progressbar.jsx";
import logo from "../assets/icons/calendar.svg";
export default function ForecastTable({ list }) {
  /* const mainTemp = data ? Celsius(data.list[0].main.temp) : "";
  const mainDetails = data ? data.list[0].main : "";
  const windDetails = data ? data.list[0].wind : "";
  const initDetails = data ? data.list[0].main : "";
  const weatherDetails = data ? data.list[0].weather[0] : ""; */
  
  const groupedList = Object.values(groupByDate(list))[0];
  //console.log(groupedList);
  return (
    <section className="forecast-table">
      <div className="section-heading">
        {logo && (
          <span className="heading-icon">
            <img src={logo} />
          </span>
        )}
        <span className="heading-text"> 3-Hour Forecast</span>
      </div>

      {groupedList.map((weather) => {
        const iconCode = weather.weather[0].icon;
        const temperature = {
          temp: weather.main.temp,
          feels_like: weather.main.feels_like,
          temp_max: weather.main.temp_max,
          temp_min: weather.main.temp_min,
        };

        const calcTemperature = findMinMaxTemperature(temperature);
        const [date, time] = weather.dt_txt.split(" ");
        
        return (
          <div key={weather.dt} className="forecast-row">
            <p>
              <span className="time-text">{convertTo12HourFormat(time)}</span>
              <span className="date-text">{formatDate(date)}</span>
            </p>
            <div className="row-icon-body">
              <img
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt=""
                className={"row-icon " + animStyle(weather.weather[0].main)}
              />
            </div>
            <div className="temp-text">
              <span className="min-temp">{Celsius(calcTemperature.min)}°C</span>

              <TemperatureProgressBar
                maxTemp={weather.main.temp_max}
                minTemp={weather.main.temp_min}
                currentTemp={weather.main.temp}
              />
              <span className="max-temp">{Celsius(calcTemperature.max)}°C</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
