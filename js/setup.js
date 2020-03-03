'use strict';

// Функция создания персонажей
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWisardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
  var wisardsList = [];

  // На каждом цикле мы собираем и записываем в массив "wizardsList" произвольно выбранное Имя + Фамилия, цвет мантии, цвет глаз.
  for (var i = 0; i < window.utils.WIZARD_NUMBER; i++) {
    wisardsList.push({
      name: window.utils.randomArrayItem(window.utils.NAMES) + ' ' + window.utils.randomArrayItem(window.utils.LASTNAMES),
      coatColor: window.utils.randomArrayItem(window.utils.COAT_COLORS),
      eyesColor: window.utils.randomArrayItem(window.utils.EYES_COLORS)
    });
  }

  // Цикл добавляющий Имя и Фамилию, цвет мантии, цвет глаз и добавляющий в DOM.
  for (var j = 0; j < window.utils.WIZARD_NUMBER; j++) {
    var wisardElement = similarWisardTemplate.cloneNode(true);
    wisardElement.querySelector('.setup-similar-label').textContent =
    wisardsList[j]['name'];
    wisardElement.querySelector('.wizard-coat').style.fill =
    wisardsList[j]['coatColor'];
    wisardElement.querySelector('.wizard-eyes').style.fill =
    wisardsList[j]['eyesColor'];
    similarListElement.appendChild(wisardElement);
  }
})();
