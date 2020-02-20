'use strict';

// module2-task2
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
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

// POPUP SETUP
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
