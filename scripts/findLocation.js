fetch(
  `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
)
  .then((response) => {
    return response.json();
  })
  .then((locationData) => {
    const { lat, lon } = locationData[0];
  });
