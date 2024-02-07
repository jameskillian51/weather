export function getWindDirection(degrees) {
    if (degrees >= 337.5 || degrees < 22.5) {
        return "North";
    } else if (degrees >= 22.5 && degrees < 67.5) {
        return "Northeast";
    } else if (degrees >= 67.5 && degrees < 112.5) {
        return "East";
    } else if (degrees >= 112.5 && degrees < 157.5) {
        return "Southeast";
    } else if (degrees >= 157.5 && degrees < 202.5) {
        return "South";
    } else if (degrees >= 202.5 && degrees < 247.5) {
        return "Southwest";
    } else if (degrees >= 247.5 && degrees < 292.5) {
        return "West";
    } else {
        return "Northwest";
    }
}

export function calculateDewPoint(temperature, humidity) {
    // Convert temperature to Celsius if needed
    const temp = temperature - 273.15;



    // Calculate dew point
    const dewPoint = temp - ((100 - humidity) / 5);

    return Math.floor(dewPoint);
}

export function groupByDate(weatherForecast) {
    const groupedByDate = {};

    weatherForecast.forEach(entry => {
        // Extract date from dt_txt
        const date = entry.dt_txt.split(' ')[0];

        // Check if date already exists in groupedByDate
        if (!groupedByDate[date]) {
            groupedByDate[date] = [];
        }

        // Add entry to corresponding date
        groupedByDate[date].push(entry);
    });

    return groupedByDate;
}


export function convertEpochToDate(epoch) {
    const date = new Date(epoch * 1000); // Convert seconds to milliseconds
    return date.toISOString().slice(0, 19).replace("T", " ");
}


export function convertEpochToDateTime(epoch) {
    const date = new Date(epoch * 1000); // Convert seconds to milliseconds
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function Celsius(temp) {

    return Math.round(temp - 273.15)
}


export function getTemperatureMessage(temperature) {
    if (temperature < 0) {
        return "It's freezing out there! Bundle up!";
    } else if (temperature < 10) {
        return "Stay warm out there. It's quite cold!";
    } else if (temperature < 20) {
        return "The weather is cool. Grab a jacket!";
    } else if (temperature < 30) {
        return "It's a pleasant day. Enjoy!";
    } else {
        return "Stay cool in the warmth!";
    }
}

export function findMinMaxTemperature(weather) {
    const temperatures = [weather.temp, weather.feels_like, weather.temp_min, weather.temp_max];

    const minTemperature = Math.min(...temperatures);
    const maxTemperature = Math.max(...temperatures);

    return {
        min: minTemperature,
        max: maxTemperature,
    };
}

export function animStyle(weather) {

    const weatherText = weather.trim();

    if (weatherText === 'Clear') {
        return 'rotate-move';
    } else if (weatherText === 'Rain' || weatherText === 'Drizzle' || weatherText === 'Snow') {

        return 'move-up-down';

    }else {
        return 'move-left-right'
    }


}

export function getDayFromDate(inputDate) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date(inputDate);
    const dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
}

export function convertTo12HourFormat(time) {
    // Extract hours, minutes, and seconds from the input time
    const hours = time.split(':')[0];

    // Convert hours to a number
    const numericHours = parseInt(hours, 10);

    // Determine AM or PM
    const period = numericHours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const twelveHourFormat = numericHours % 12 || 12;

    // Format the result
    const result = `${twelveHourFormat} ${period}`;

    return result;
}

export function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
}

export function getDaylightStatus() {
    const date = new Date()
    const hours = date.getHours();

    // Assuming daytime is from 6 AM to 6 PM (adjust as needed)
    const isDaytime = hours >= 6 && hours < 18;

    return isDaytime ? 'daylight-rgba' : 'night-rgba';
}