'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHIFT = 10;
var GAP = 50;
var MARGIN = 40; // Отступ для первого столбца гистограммы слева
var barHeight = 150;
var BAR_WIDTH = 40;
var BAR_TOP = 90;
var TEXT_LINE = 250;
var FONT_GAP = 20;
var TITLE_X = 120;
var TITLE_Y = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.strokeStyle = 'black';
  renderCloud(ctx, CLOUD_X + SHIFT, CLOUD_Y + SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', TITLE_X, TITLE_Y);
  ctx.fillStyle = '#000000';
  ctx.fillText('Список результатов: ', TITLE_X, TITLE_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(
        Math.floor(times[i]),
        CLOUD_X + MARGIN + (BAR_WIDTH + GAP) * i,
        (TITLE_Y + (FONT_GAP * 2)) + (barHeight - (barHeight * times[i]) / maxTime));
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    if (players[i] !== 'Вы') {
      var saturation = Math.floor(101 * Math.random());
      ctx.fillStyle = 'hsl(235,' + saturation + '%, 27%)';
    }
    ctx.fillRect(
        CLOUD_X + MARGIN + (BAR_WIDTH + GAP) * i,
        BAR_TOP + (barHeight - (barHeight * times[i]) / maxTime),
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );
    ctx.fillStyle = '#000000';
    ctx.fillText(
        players[i],
        CLOUD_X + MARGIN + (BAR_WIDTH + GAP) * i,
        TEXT_LINE
    );
  }
};
