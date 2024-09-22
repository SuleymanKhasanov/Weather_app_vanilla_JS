import historyRender from './historyRender';

const saveDataOnLocalStorage = (data) => {
  let arrayData =
    JSON.parse(localStorage.getItem('saveWeatherHistory')) || [];

  if (data) {
    arrayData.unshift(data);
  }

  localStorage.setItem(
    'saveWeatherHistory',
    JSON.stringify(arrayData),
  );

  const savedData = JSON.parse(
    localStorage.getItem('saveWeatherHistory'),
  );

  historyRender(savedData);
};

export default saveDataOnLocalStorage;
