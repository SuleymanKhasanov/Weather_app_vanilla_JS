const weatherDailyContainer =
  document.getElementById('weather-daily');

const weatherDailyRender = (data) => {
  const translations = {
    'clear sky': 'Ясное небо',
    'few clouds': 'Малооблачно',
    'scattered clouds': 'Рассеянные облака',
    'broken clouds': 'Переменная облачность',
    'shower rain': 'Ливень',
    rain: 'Дождь',
    thunderstorm: 'Гроза',
    snow: 'Снег',
    mist: 'Туман',
    'overcast clouds': 'Пасмурные облака',
    'heavy intensity rain': 'Cильный дождь',
    'light rain': 'Небольшой дождь',
  };

  const filteredData = data.list.filter(
    (_, index) => index % 8 === 5,
  );

  const dailyWeatherInformation = filteredData.map((element) => {
    const date = new Date(element.dt_txt);
    let dayOfWeek = date.toLocaleDateString('ru-RU', {
      weekday: 'short',
    });

    dayOfWeek =
      dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

    const weatherDescription =
      translations[element.weather[0].description] ||
      element.weather[0].description;

    return {
      dayOfWeek,
      temp: Math.floor(element.main.temp - 273),
      weatherInfo: weatherDescription,
      icon: element.weather[0].icon,
    };
  });

  console.log(dailyWeatherInformation);

  weatherDailyContainer.innerHTML = `
    <ul class="dailyWeatherInformation">
    <h3 class='dailyWeatherInformation__title'>Прогноз на пять дней</h3>
      ${dailyWeatherInformation
        .map(
          (element) => `
          <li class="dailyWeatherInformation__item">
            <span class='dailyWeatherInformation__dayOfWeek'>${element.dayOfWeek}</span>
            <img src="http://openweathermap.org/img/wn/${element.icon}.png" alt="${element.weatherInfo}" />
            <span>${element.temp}°</span>
            <span>${element.weatherInfo}</span>
            
          </li>
        `,
        )
        .join('')}
    </ul>
  `;
};

export default weatherDailyRender;
