'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

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
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4; // Кол-во персонажей.
var similarListElement = document.querySelector('.setup-similar-list');
var similarWisardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
var wisardsList = [];

// Функция выбора произвольного элемента из массива.
var randomArrayItem = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

// На каждом цикле мы собираем и записываем в массив "wizardsList" произвольно выбранное Имя + Фамилия, цвет мантии, цвет глаз.
for (var i = 0; i < WIZARD_NUMBER; i++) {
  wisardsList.push({
    name: randomArrayItem(NAMES) + ' ' + randomArrayItem(LASTNAMES),
    coatColor: randomArrayItem(COAT_COLORS),
    eyesColor: randomArrayItem(EYES_COLORS)
  });
}

// Цикл добавляющий Имя и Фамилию, цвет мантии, цвет глаз и добавляющий в DOM.
for (var j = 0; j < WIZARD_NUMBER; j++) {
  var wisardElement = similarWisardTemplate.cloneNode(true);
  wisardElement.querySelector('.setup-similar-label').textContent =
    wisardsList[j]['name'];
  wisardElement.querySelector('.wizard-coat').style.fill =
    wisardsList[j]['coatColor'];
  wisardElement.querySelector('.wizard-eyes').style.fill =
    wisardsList[j]['eyesColor'];
  similarListElement.appendChild(wisardElement);
}
