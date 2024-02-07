import  { useEffect, useState } from "react";

const TemperatureProgressBar = ({ minTemp, maxTemp, currentTemp }) => {
  const [percentage, setPercentage] = useState(0);
let random = Math.round(Math.random(10,100) * 100) ;
  useEffect(() => {
    const tempPercentage =
      ((currentTemp - minTemp) / (maxTemp - minTemp)) * 100;
      /* (285.8 - 284.1) / (285.98 - 284.1) * 100 */
    setPercentage(tempPercentage);
  }, [minTemp, maxTemp, currentTemp]);

  //console.log(percentage)
  return (
    <div className="progressbar"
      style={{
     
        height: "10px",
        backgroundColor: "#232937",
        position: "relative",
        borderRadius: "20px",
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#85d5c4",
          transition: "width 0.5s ease-in-out",
          width: `${(percentage > 0 && percentage < 100) ? percentage:random }%`,
          borderRadius: "20px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#000",
        }}
      >
        {/* {(currentTemp - 273.15).toFixed(2)}°C */}
      </div>
    </div>
  );
};

export default TemperatureProgressBar;
