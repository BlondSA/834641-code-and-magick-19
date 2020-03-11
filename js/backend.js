'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;
  var save = function (data, sendSuccessHandler) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      sendSuccessHandler(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
  var load = function (sendSuccessHandler, sendErrorHandler) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        sendSuccessHandler(xhr.response);
      } else {
        sendErrorHandler('Статус ответа: ' + xhr.status + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      sendErrorHandler('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      sendErrorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT_IN_MS; // 10 секунд
    xhr.open('GET', URL);
    xhr.send();
  };
  window.backend = {
    save: save,
    load: load};
})();
