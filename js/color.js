'use strict';
// Функция изменения цвета мантии, глаз, фаербола по клику на соответсвуюие элементы персонажа
(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // Функция выбора произвольного элемента из массива.
  var randomArrayItem = function (arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  };
  // Изменение цвета мантии персонажа по нажатию
  var wizardCoatHandler = document.querySelector('.wizard-coat');
  wizardCoatHandler.addEventListener('click', function () {
    var colorCoatRundom = randomArrayItem(COAT_COLORS);
    wizardCoatHandler.style.fill = colorCoatRundom;
    var inputCoat = document.querySelector('.setup-wizard-appearance input');
    inputCoat.value = colorCoatRundom;
  });
  // Изменение цвета глаз персонажа по нажатию
  var wizardEyesHandler = document.querySelector('.wizard-eyes');
  wizardEyesHandler.addEventListener('click', function () {
    var colorEyesRundom = randomArrayItem(EYES_COLORS);
    wizardEyesHandler.style.fill = colorEyesRundom;
    var inputEyes = document.querySelector('.setup-wizard-appearance input:last-child');
    inputEyes.value = colorEyesRundom;
  });
  // Изменение цвета фаерболов по нажатию
  var wizardFireballHandler = document.querySelector('.setup-fireball-wrap');
  wizardFireballHandler.addEventListener('click', function () {
    var colorFireballRundom = randomArrayItem(FIREBALL_COLOR);
    wizardFireballHandler.style.backgroundColor = colorFireballRundom;
    var inputFire = document.querySelector('.setup-fireball-wrap input');
    inputFire.value = colorFireballRundom;
  });
})();
