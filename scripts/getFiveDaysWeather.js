import { API_KEY } from '../api/apiKeys';
import weatherDailyRenderer from './weatherDailyInformation';

const getFiveDaysWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weatherDailyRenderer(data);
    });
};

export default getFiveDaysWeather;
