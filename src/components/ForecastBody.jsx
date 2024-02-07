import { groupByDate,getDayFromDate,Celsius,animStyle, convertTo12HourFormat } from "../util/util";

export default function ForecastBody({ list }) {
  const groupedList = Object.values(groupByDate(list)).slice(1, 5);
  


  return (
    <section className="forecast-body">
      
      {groupedList.map((weather) => {
        const singleWeather = weather[0];
        const iconCode = singleWeather.weather[0].icon
        return (
          <div key={singleWeather.dt} className="forecast">
            <p className="forecast-day">
              <span>{getDayFromDate(singleWeather.dt_txt.split(" ")[0])}</span>
              <span>
                {convertTo12HourFormat(singleWeather.dt_txt.split(" ")[1])}
              </span>
            </p>
            <img
              className={animStyle(singleWeather.weather[0].main)}
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt=""
            />
            <p className="forecast-temp">
              {Celsius(singleWeather.main.temp)}°C
            </p>
          </div>
        );
      })}

    
    </section>
  );
}
