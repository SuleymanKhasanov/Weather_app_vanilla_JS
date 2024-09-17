import { API_KEY } from '../api/apiKeys';
import currentWeatherRender from './curentWeatherRender';

const getCurrentWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`,
  )
    .then((response) => {
      return response.json();
    })
    .then((weatherTodayData) => {
      // Производим рендеринг компонента
      currentWeatherRender(weatherTodayData);
    });
};

export default getCurrentWeather;
