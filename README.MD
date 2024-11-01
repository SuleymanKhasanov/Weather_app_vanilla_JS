# Weather App

Простое приложение погоды, отображающее текущие погодные условия, прогноз на 5 дней, а также погодные условия по часам. Приложение также включает различные цветовые темы для отображения погоды и позволяет пользователю искать погоду для конкретного местоположения.

## Структура проекта

```plaintext
WEATHER-APP-JS
│
├── constants/
│   └── apiKeys.js             # Файл с API-ключами - Для подключения API
|                                                     ключа необходимо зарегестрироваться на сервисе https://openweathermap.org/
|                                                     и ввести свой уникальный ключ в переменную API_KEY или же созадть в корне 
|                                                     проекта файл .env с указанием ключа внути VITE_API_KEY
│
├── public/
│   └── infinite-spinner.svg    # Спиннер для отображения загрузки
│
├── scripts/
│   ├── colorTheme.js           # Настройка цветовой темы в зависимости от погоды
│   ├── currentWeatherRender.js # Отображение текущей погоды
│   ├── findCurrentLocation.js  # Определение текущего местоположения пользователя
│   ├── findLocation.js         # Поиск местоположения по названию города
│   ├── getCurrentWeather.js    # Запрос текущей погоды
│   ├── getFiveDaysWeather.js   # Запрос прогноза на 5 дней
│   ├── historyRender.js        # Отображение истории поиска
│   ├── hoursWeatherRender.js   # Отображение погоды по часам
│   ├── localStorage.js         # Работа с локальным хранилищем для сохранения истории
│   ├── main.js                 # Основной скрипт для инициализации приложения
│   ├── rainDropBg.js           # Фон с анимацией дождя
│   └── weatherDailyInformation.js # Отображение ежедневной информации о погоде
│
├── styles/
│   ├── container.css           # Стили для контейнера приложения
│   ├── header.css              # Стили для заголовка приложения
│   ├── hoursWeather.css        # Стили для отображения погоды по часам
│   ├── mobile.css              # Стили для мобильной версии
│   ├── rain.css                # Стили для анимации дождя
│   ├── style.css               # Общие стили
│   ├── variables.css           # Переменные CSS для тем и цветов
│   ├── weatherColors.css       # Цвета, зависящие от погоды
│   ├── weatherDailyInformation.css # Стили для ежедневной информации о погоде
│   └── weatherInfo.css         # Стили для основного блока информации о погоде
│
├── .gitignore                  # Список файлов и папок, игнорируемых Git
├── index.html                  # Основной HTML файл приложения
├── package.json                # Описание зависимостей проекта
└── package-lock.json           # Версии зависимостей проекта
```
