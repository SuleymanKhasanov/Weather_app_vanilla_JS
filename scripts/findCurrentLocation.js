import getCurrentWeather from './getCurrentWeather';
import getFiveDaysWeather from './getFiveDaysWeather';

const findCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getCurrentWeather(lat, lon);
      getFiveDaysWeather(lat, lon);
    },
    (error) => {
      console.error('Ошибка получения геолокации: ', error.message);
    },
  );
};

export default findCurrentLocation;
