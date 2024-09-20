import { API_KEY } from '../api/apiKeys';
import currentWeatherRender from './curentWeatherRender';

const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`,
    );

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const weatherTodayData = await response.json();
    console.log(weatherTodayData);

    // Рендерим компонент с данными о погоде
    currentWeatherRender(weatherTodayData);
  } catch (error) {
    console.error(
      'Ошибка получения данных о погоде: ',
      error.message,
    );
  }
};

export default getCurrentWeather;
