const body = document.getElementById('body');

class ChangeColorTheme {
  constructor(bodyElement) {
    this.body = bodyElement;
  }

  setColorTheme(weatherIcon) {
    this.body.className = '';
    this.body.classList.add(`weather-${weatherIcon}`);
  }
}

const colorTheme = new ChangeColorTheme(body);
export default colorTheme;

//   if (weatherIcon === '01d') {
//     body.className = '';
//     body.classList.add('weather-01d');
//   }

//   if (weatherIcon === '02d') {
//     body.className = '';
//     body.classList.add('weather-02d');
//   }

//   if (weatherIcon === '03d') {
//     body.className = '';
//     body.classList.add('weather-03d');
//   }
//   if (weatherIcon === '04d') {
//     body.className = '';
//     body.classList.add('weather-04d');
//   }

//   if (weatherIcon === '09d') {
//     body.className = '';
//     body.classList.add('weather-09d');
//   }

//   if (weatherIcon === '10d') {
//     body.className = '';
//     body.classList.add('weather-10d');
//   }

//   if (weatherIcon === '11d') {
//     body.className = '';
//     body.classList.add('weather-11d');
//   }

//   if (weatherIcon === '13d') {
//     body.className = '';
//     body.classList.add('weather-13d');
//   }
//   if (weatherIcon === '50d') {
//     body.className = '';
//     body.classList.add('weather-50d');
//   }

//   if (weatherIcon === '01n') {
//     body.className = '';
//     body.classList.add('weather-01n');
//   }

//   if (weatherIcon === '02n') {
//     body.className = '';
//     body.classList.add('weather-02n');
//   }

//   if (weatherIcon === '03n') {
//     body.className = '';
//     body.classList.add('weather-03n');
//   }
//   if (weatherIcon === '04n') {
//     body.className = '';
//     body.classList.add('weather-04n');
//   }

//   if (weatherIcon === '09n') {
//     body.className = '';
//     body.classList.add('weather-09n');
//   }

//   if (weatherIcon === '10n') {
//     body.className = '';
//     body.classList.add('weather-10n');
//   }

//   if (weatherIcon === '11n') {
//     body.className = '';
//     body.classList.add('weather-11n');
//   }

//   if (weatherIcon === '13n') {
//     body.className = '';
//     body.classList.add('weather-13n');
//   }
//   if (weatherIcon === '50n') {
//     body.className = '';
//     body.classList.add('weather-50n');
//   }
// };
