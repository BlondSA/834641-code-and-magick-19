'use strict';
// Функция изменения цвета мантии, глаз, фаербола по клику на соответсвуюие элементы персонажа
(function () {
  var wizardCoatHandler = document.querySelector('.wizard-coat');
  var inputCoat = document.querySelector('.setup-wizard-appearance input');
  var wizardEyesHandler = document.querySelector('.wizard-eyes');
  var inputEyes = document.querySelector(
      '.setup-wizard-appearance input:last-child'
  );
  var wizardFireballHandler = document.querySelector('.setup-fireball-wrap');
  var inputFire = document.querySelector('.setup-fireball-wrap input');

  var wizard = {
  };

  // Функция смены цвета мантии
  var changeColorCoat = function () {
    var colorCoatRundom = window.utils.getRandomArrayItem(
        window.utils.COAT_COLORS
    );
    wizardCoatHandler.style.fill = colorCoatRundom;
    inputCoat.value = colorCoatRundom;
    wizard.onCoatChange(colorCoatRundom);
  };

  // Функция смены цвета глаз
  var changeColorEyes = function () {
    var colorEyesRundom = window.utils.getRandomArrayItem(
        window.utils.EYES_COLORS
    );
    wizardEyesHandler.style.fill = colorEyesRundom;
    inputEyes.value = colorEyesRundom;
    wizard.onEyesChange(colorEyesRundom);
  };

  // Функция смены цвета огненного шара
  var changeColorFireball = function () {
    var colorFireballRundom = window.utils.getRandomArrayItem(
        window.utils.FIREBALL_COLOR
    );
    wizardFireballHandler.style.backgroundColor = colorFireballRundom;
    inputFire.value = colorFireballRundom;
  };

  var addChangeColorHandlers = function () {
    // Изменение цвета мантии персонажа по нажатию
    wizardCoatHandler.addEventListener('click', changeColorCoat);

    // Изменение цвета глаз персонажа по нажатию
    wizardEyesHandler.addEventListener('click', changeColorEyes);

    // Изменение цвета фаерболов по нажатию
    wizardFireballHandler.addEventListener('click', changeColorFireball);
  };
  var removeChangeColorHandlers = function () {
    // Убираем изменение цвета мантии персонажа по нажатию
    wizardCoatHandler.removeEventListener('click', changeColorCoat);

    // Убираем изменение цвета глаз персонажа по нажатию
    wizardEyesHandler.removeEventListener('click', changeColorEyes);

    // Убираем изменение цвета фаерболов по нажатию
    wizardFireballHandler.removeEventListener('click', changeColorFireball);
  };

  window.color = {
    addChangeColorHandlers: addChangeColorHandlers,
    removeChangeColorHandlers: removeChangeColorHandlers,
    wizard: wizard,
  };
})();
