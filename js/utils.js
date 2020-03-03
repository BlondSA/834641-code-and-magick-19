'use strict';
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
  var ENTER_BUTTON = 13;
  var ESC_BUTTON = 27;
  var NAMES = [
    'Иван',
    'Хуан',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var LASTNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var WIZARD_NUMBER = 4; // Кол-во персонажей.

  // Функция выбора произвольного элемента из массива.
  var randomArrayItem = function (arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  };
  window.utils = {
    randomArrayItem: randomArrayItem,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLOR: FIREBALL_COLOR,
    ENTER_BUTTON: ENTER_BUTTON,
    ESC_BUTTON: ESC_BUTTON,
    NAMES: NAMES,
    LASTNAMES: LASTNAMES,
    WIZARD_NUMBER: WIZARD_NUMBER,
  };
})();
