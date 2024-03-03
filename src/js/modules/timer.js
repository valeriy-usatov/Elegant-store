
function timer(){
    document.addEventListener('DOMContentLoaded', function() {
        // конечная дата, например 1 июля 2021
        // const deadline = new Date(2024, 2, 17);
        const deadline = new Date('August 01, 2024, 23:59:59');
        // id таймера
        let timerId = null;
        // склонение числительных
        function declensionNum(num, words) {
          return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }
        // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
        function countdownTimer() {
          const diff = deadline - new Date();
          if (diff <= 0) {
            clearInterval(timerId); /* подчищаем таймеры, если они больше не нужны */
          }
          const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
          const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
          const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
          const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
          $days.textContent = days < 10 ? '0' + days : days;
          $hours.textContent = hours < 10 ? '0' + hours : hours;
          $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
          $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
          $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
          $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
          $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
          $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
        }
        // получаем элементы, содержащие компоненты даты
        const $days = document.querySelector('#days');
        const $hours = document.querySelector('#hours');
        const $minutes = document.querySelector('#minutes');
        const $seconds = document.querySelector('#seconds');
        // вызываем функцию countdownTimer
        countdownTimer();
        // вызываем функцию countdownTimer каждую секунду
        timerId = setInterval(countdownTimer, 1000);
      });
      
      // конечная дата
      // const deadline = new Date(2024, 06, 01);
}
export default timer