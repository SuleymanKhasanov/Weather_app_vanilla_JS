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
