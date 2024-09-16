import { API_KEY } from '../api/apiKeys';

import render from './render';
import { content } from './render';
import weatherDailyRenderer from './weatherDailyInformation';

// Получаем элементы со страницы
const input = document.getElementById('input');
const form = document.getElementById('form');
const button = document.getElementById('button');

// Отключаем событие перехода на друние страницы
form.addEventListener('submit', (e) => {
  e.preventDefault();
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

      // Получаем прогноз погоды на 5 дней
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          weatherDailyRenderer(data);
        });

      // Получаем теущий прогноз погоды
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`,
      )
        .then((response) => {
          return response.json();
        })
        .then((weatherTodayData) => {
          // Производим рендеринг компонента
          render(weatherTodayData);
          console.log(weatherTodayData);
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
