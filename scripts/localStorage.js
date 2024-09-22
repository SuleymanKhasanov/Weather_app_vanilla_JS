import historyRender from './historyRender';
const historyContainer = document.getElementById(
  'history__container',
);

const clearHistoryBtn = document.getElementById('clear-history');

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

clearHistoryBtn.addEventListener('click', () => {
  localStorage.clear();
  historyContainer.innerHTML = `<span class="empty-text">Нет данных о городах</span>`;
});
