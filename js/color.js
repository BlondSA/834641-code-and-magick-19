'use strict';
// Функция изменения цвета мантии, глаз, фаербола по клику на соответсвуюие элементы персонажа
(function () {
  var changeColor = function () {
    var wizardCoatHandler = document.querySelector('.wizard-coat');
    var inputCoat = document.querySelector('.setup-wizard-appearance input');
    var wizardEyesHandler = document.querySelector('.wizard-eyes');
    var inputEyes = document.querySelector(
        '.setup-wizard-appearance input:last-child'
    );
    var wizardFireballHandler = document.querySelector('.setup-fireball-wrap');
    var inputFire = document.querySelector('.setup-fireball-wrap input');

    // Изменение цвета мантии персонажа по нажатию
    wizardCoatHandler.addEventListener('click', function () {
      var colorCoatRundom = window.utils.randomArrayItem(
          window.utils.COAT_COLORS
      );
      wizardCoatHandler.style.fill = colorCoatRundom;
      inputCoat.value = colorCoatRundom;
    });

    // Изменение цвета глаз персонажа по нажатию
    wizardEyesHandler.addEventListener('click', function () {
      var colorEyesRundom = window.utils.randomArrayItem(
          window.utils.EYES_COLORS
      );
      wizardEyesHandler.style.fill = colorEyesRundom;
      inputEyes.value = colorEyesRundom;
    });

    // Изменение цвета фаерболов по нажатию
    wizardFireballHandler.addEventListener('click', function () {
      var colorFireballRundom = window.utils.randomArrayItem(
          window.utils.FIREBALL_COLOR
      );
      wizardFireballHandler.style.backgroundColor = colorFireballRundom;
      inputFire.value = colorFireballRundom;
    });
  };
  window.color = {changeColor: changeColor};
})();
