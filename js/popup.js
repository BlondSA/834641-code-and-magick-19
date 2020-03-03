'use strict';
// POPUP SETUP Функция открытия-закрытия окна настроки персонажа
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.utils.ESC_BUTTON) {
      closePopupHandler();
    }
  };

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    setup.classList.remove('hidden');
    window.color.changeColor();
  });

  var openPopupHandler = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopupHandler = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupClose.addEventListener('click', function () {
    closePopupHandler();
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ESC_BUTTON) {
      closePopupHandler();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_BUTTON) {
      closePopupHandler();
    }
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_BUTTON) {
      openPopupHandler();
    }
  });
})();
