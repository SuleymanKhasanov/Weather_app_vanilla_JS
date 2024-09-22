import colorTheme from './colorTheme';
import { rainDropBg } from './rainDropBg';
import { clearRainDrops } from './rainDropBg';
import saveDataOnLocalStorage from './localStorage';

export const content = document.getElementById('content');

const currentWeatherRender = (weatherTodayData) => {
  const temperature = Math.floor(weatherTodayData.main.temp);
  const name = weatherTodayData.name;
  const feelsLike = Math.floor(weatherTodayData.main.feels_like);
  const weatherForecasts = weatherTodayData.weather[0].description;
  const weatherIcon = weatherTodayData.weather[0].icon;
  const wind = Math.floor(weatherTodayData.wind.speed);
  const humidity = weatherTodayData.main.humidity;
  const visibility = Math.floor(weatherTodayData.visibility / 1000);

  saveDataOnLocalStorage({ name, temperature, weatherIcon });

  colorTheme.setColorTheme(weatherIcon);

  if (
    weatherIcon === '09d' ||
    weatherIcon === '09n' ||
    weatherIcon === '10n' ||
    weatherIcon === '10d'
  ) {
    rainDropBg();
  } else {
    clearRainDrops();
  }

  const forecasts =
    weatherForecasts.charAt(0).toUpperCase() +
    weatherForecasts.slice(1);

  function formatDate(date) {
    const daysOfWeek = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}г`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  content.innerHTML = `
  <div class='weatherInfo'>
   <p class='cityName'>${name}</p>
   <p class='formatDate'>${formattedDate}</p>
    <p class='temperature'>${temperature}°</p>
     <div class='weatherOverview'> <img alt="weather icon" src="http://openweathermap.org/img/wn/${weatherIcon}.png" class='weatherOverviewIcon'/> <p>${forecasts}</p> </div>
    <p class='feelsLike'>Ощущается как ${feelsLike}°</p>
    <ul class='weatherCarasteristics'> 
    <li class='weatherCarasteristicsList'><i class="fas fa-wind weather-mini-icon"></i>  <br/> ${wind} м/с</li> 
    <li class='weatherCarasteristicsList'><i class="fas fa-tint weather-mini-icon"></i> <br/>${humidity} %</li> 
    <li class='weatherCarasteristicsList'><i class="fa-solid fa-eye  weather-mini-icon"></i> <br/>${visibility} км</li> 
    </ul>
  </div>
`;
};

export default currentWeatherRender;
