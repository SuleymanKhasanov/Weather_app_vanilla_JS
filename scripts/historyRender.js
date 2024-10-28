const historyContainer = document.getElementById(
  'history__container',
);

const historyRender = (savedData) => {
  const historyItems = savedData
    .map((element) => {
      return `
        <li class="history__item weather-${element.weatherIcon}">
          <span class='cityNameHistory'>${element.name}</span>
          <div class="cityTemperatureHistory">
          <img class="cityImgHistory" src="http://openweathermap.org/img/wn/${element.weatherIcon}@2x.png" alt="Weather Icon" />
          <span class="cityTextHistory">${element.temperature}°</span>
          </div>
        </li>
      `;
    })
    .join('');

  historyContainer.innerHTML = historyItems;
};

export default historyRender;
