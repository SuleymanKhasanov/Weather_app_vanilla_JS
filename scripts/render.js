import colorTheme from './colorTheme';

export const content = document.getElementById('content');

const render = (weatherTodayData) => {
  const temperature = Math.floor(weatherTodayData.main.temp);
  const name = weatherTodayData.name;
  const feelsLike = Math.floor(weatherTodayData.main.feels_like);
  const weatherForecasts = weatherTodayData.weather[0].description;
  const weatherIcon = weatherTodayData.weather[0].icon;
  const wind = weatherTodayData.wind.speed;

  console.log(wind);

  colorTheme.setColorTheme(weatherIcon);

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
               <div class='weatherOverview'> <img alt="weather icon" src="../icons/${weatherIcon}.svg" class='weatherOverviewIcon'/> <p>${weatherForecasts}</p> </div>
              <p class='feelsLike'>Ощущается как ${feelsLike}°</p>
              <div class='weatherInfo__characteristics characteristics'>
            </div>
          `;
};

export default render;
