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
    'moderate rain': 'Умеренный дождь',
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

  weatherDailyContainer.innerHTML = `
  <table class="dailyWeatherInformation">
    <thead>
        <th colspan="4" class='dailyWeatherInformation__title'>Прогноз на пять дней</th>
    </thead>
    <tbody>
      ${dailyWeatherInformation
        .map(
          (element) => `
          <tr class="dailyWeatherInformation__item">
            <td class='dailyWeatherInformation__dayOfWeek'>${element.dayOfWeek}</td>
            <td>
              <img src="http://openweathermap.org/img/wn/${element.icon}.png" alt="${element.weatherInfo}" />
            </td>
            <td>${element.temp}°</td>
            <td>${element.weatherInfo}</td>
          </tr>
        `,
        )
        .join('')}
    </tbody>
  </table>
`;
};

export default weatherDailyRender;
