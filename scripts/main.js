import { API_KEY } from '../constants/apiKeys';
import getCurrentWeather from './getCurrentWeather';
import getFiveDaysWeather from './getFiveDaysWeather';

import { content } from './curentWeatherRender';
import findCurrentLocation from './findCurrentLocation';

// Получаем элементы со страницы
const input = document.getElementById('input');
const form = document.getElementById('form');
const button = document.getElementById('button');
const histotyMenuBtn = document.getElementById('hamburger-menu');
const historyMenu = document.getElementById('history');
const historyMenuCloseBtn = document.getElementById('close-btn');
const body = document.getElementById('body');

// Отключаем событие перехода на друние страницы
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Получаем прогноз погоды по текущему местоположению
findCurrentLocation();

histotyMenuBtn.addEventListener('click', () => {
  historyMenu.style.top = 0;
  body.style.overflowY = 'hidden';
});

historyMenuCloseBtn.addEventListener('click', () => {
  historyMenu.style.top = '-100vh';
  body.style.overflowY = 'auto';
});

// Обрабатываем событие по клику
button.addEventListener('click', () => {
  const cityName = input.value;

  // Получаем ширину и долготу введенной пользователем локации
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
  )
    .then((response) => {
      return response.json();
    })
    .then((locationData) => {
      const { lat, lon } = locationData[0];

      // Получаем теущий прогноз погоды
      getCurrentWeather(lat, lon);
      input.value = '';

      // Получаем прогноз погоды на 5 дней
      getFiveDaysWeather(lat, lon);
    })
    .catch((reject) => {
      content.innerHTML = `
      <div>
        <p>Вы ввели не верное название города</p>
      </div>
    `;
    });
});
