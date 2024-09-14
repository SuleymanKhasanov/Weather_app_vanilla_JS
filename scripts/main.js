import { API_KEY } from '../api/apiKeys';

// Получаем элементы со страницы
const input = document.getElementById('input');
const form = document.getElementById('form');
const button = document.getElementById('button');
const content = document.getElementById('content');
const body = document.getElementById('body');

// Отключаем событие перехода на друние страницы
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Производим рендеринг компонента
const render = (weatherTodayData) => {
  const temperature = Math.floor(weatherTodayData.main.temp);
  const name = weatherTodayData.name;
  const feelsLike = Math.floor(weatherTodayData.main.feels_like);
  const weatherForecasts = weatherTodayData.weather[0].description;
  const weatherIcon = weatherTodayData.weather[0].icon;

  if (weatherIcon === '01d') {
    body.className = '';
    body.classList.add('weather-01d');
  }

  if (weatherIcon === '02d') {
    body.className = '';
    body.classList.add('weather-02d');
  }

  if (weatherIcon === '03d') {
    body.className = '';
    body.classList.add('weather-03d');
  }
  if (weatherIcon === '04d') {
    body.className = '';
    body.classList.add('weather-04d');
  }

  if (weatherIcon === '09d') {
    body.className = '';
    body.classList.add('weather-09d');
  }

  if (weatherIcon === '10d') {
    body.className = '';
    body.classList.add('weather-10d');
  }

  if (weatherIcon === '11d') {
    body.className = '';
    body.classList.add('weather-11d');
  }

  if (weatherIcon === '13d') {
    body.className = '';
    body.classList.add('weather-13d');
  }
  if (weatherIcon === '50d') {
    body.className = '';
    body.classList.add('weather-50d');
  }

  if (weatherIcon === '01n') {
    body.className = '';
    body.classList.add('weather-01n');
  }

  if (weatherIcon === '02n') {
    body.className = '';
    body.classList.add('weather-02n');
  }

  if (weatherIcon === '03n') {
    body.className = '';
    body.classList.add('weather-03n');
  }
  if (weatherIcon === '04n') {
    body.className = '';
    body.classList.add('weather-04n');
  }

  if (weatherIcon === '09n') {
    body.className = '';
    body.classList.add('weather-09n');
  }

  if (weatherIcon === '10n') {
    body.className = '';
    body.classList.add('weather-10n');
  }

  if (weatherIcon === '11n') {
    body.className = '';
    body.classList.add('weather-11n');
  }

  if (weatherIcon === '13n') {
    body.className = '';
    body.classList.add('weather-13n');
  }
  if (weatherIcon === '50n') {
    body.className = '';
    body.classList.add('weather-50n');
  }
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
               <div class='weatherOverview'> <img alt="weather icon" src="../public/icons/${weatherIcon}.svg" class='weatherOverviewIcon'/> <p>${weatherForecasts}</p> </div>
              <p class='feelsLike'>Ощущается как ${feelsLike}°</p>
             
            </div>
          `;
};

// Обрабатываем событие по клику
button.addEventListener('click', () => {
  const cityName = input.value;

  // Получаем ширину и долготу введенной пользователем локации
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((locationData) => {
      const { lat, lon } = locationData[0];

      // Получаем прогноз погоды
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`,
      )
        .then((response) => {
          return response.json();
        })
        .then((weatherTodayData) => {
          render(weatherTodayData);
        });
      input.value = '';
    })
    .catch((reject) => {
      content.innerHTML = `
      <div>
        <p>Вы ввели не верное название города</p>
      </div>
    `;
    });
});
