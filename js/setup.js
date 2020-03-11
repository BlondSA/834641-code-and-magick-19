'use strict';

// Функция создания персонажей
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWisardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');
  var wisardsList = [];

  // На каждом цикле мы собираем и записываем в массив "wizardsList" произвольно выбранное Имя + Фамилия, цвет мантии, цвет глаз.
  var renderWizard = function () {
    for (var i = 0; i < window.utils.WIZARD_NUMBER; i++) {
      wisardsList.push({
        name: window.utils.getRandomArrayItem(window.utils.NAMES) + ' ' + window.utils.getRandomArrayItem(window.utils.LASTNAMES),
        coatColor: window.utils.getRandomArrayItem(window.utils.COAT_COLORS),
        eyesColor: window.utils.getRandomArrayItem(window.utils.EYES_COLORS)
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
    return wisardElement;
  };
  // Отменяем действие по-кмолчанию для слушателя, и отправляем форму без перезагрузки страницы
  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var successHandler = (function (wizards) {
    var fragment = document.createDocumentFragment();


    fragment.appendChild(renderWizard(wizards));

    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  });
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();
