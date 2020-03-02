'use strict';
// POPUP SETUP Функция открытия-закрытия окна настроки персонажа
(function () {
  var setup = document.querySelector('.setup');
  var ENTER_BUTTON = 13;
  var ESC_BUTTON = 27;
  var setupOpenHendler = document.querySelector('.setup-open');
  setupOpenHendler.addEventListener('click', function (evt) {
    evt.preventDefault();
    setup.classList.remove('hidden');
  });

  var setupCloseHandler = document.querySelector('.setup-close');
  setupCloseHandler.addEventListener('click', function () {
    setup.classList.add('hidden');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_BUTTON) {
      setup.classList.add('hidden');
    }
  });

  setupCloseHandler.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_BUTTON) {
      setup.classList.add('hidden');
    }
  });

  var setupOpenIconHendler = document.querySelector('.setup-open-icon');
  setupOpenIconHendler.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_BUTTON) {
      setup.classList.remove('hidden');
    }
  });
})();
