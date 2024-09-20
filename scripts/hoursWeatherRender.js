const hoursWeatherContainer =
  document.getElementById('hours-weather');

const hoursWeatherRender = (data) => {
  const hoursWeatherData = data.list.slice(0, 23);

  // Рендерим данные о погоде за ближайшие часы
  hoursWeatherContainer.innerHTML = `
    <ul class='hours-weather'>
      ${hoursWeatherData
        .map(
          (element) => `
        <li class="hours-weather__list">
          <span class="hours-weather__time">
            ${element.dt_txt.slice(11, 16)}
          </span>
          <img src="http://openweathermap.org/img/wn/${
            element.weather[0].icon
          }.png" alt='weather-icon'/>
          <span class="hours-weather__temperature">
            ${Math.floor(element.main.temp - 273)}°
          </span>
        </li>
      `,
        )
        .join('')} 
    </ul>
  `;
};

export default hoursWeatherRender;
