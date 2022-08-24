// Задание 2 - таймер обратного отсчета
// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться 
//  в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Элементы интефрейса
// В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки, 
// при клике по которой таймер должен запускаться. Добавь минимальное оформление элементов интерфейса.

// <input type="text" id="datetime-picker" />
// <button type="button" data-start>Start</button>

// <div class="timer">
//   <div class="field">
//     <span class="value" data-days>00</span>
//     <span class="label">Days</span>
//   </div>
//   <div class="field">
//     <span class="value" data-hours>00</span>
//     <span class="label">Hours</span>
//   </div>
//   <div class="field">
//     <span class="value" data-minutes>00</span>
//     <span class="label">Minutes</span>
//   </div>
//   <div class="field">
//     <span class="value" data-seconds>00</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const inputTextarea = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('[data-start]');

// Style
const timerArea = document.querySelector('.timer');
const timerItems = document.querySelectorAll('.field')
const timerValues = document.querySelectorAll('.value')
const timerLabels = document.querySelectorAll('.label')

timerArea.style.display = "flex";

const timerItemsStyle = () => {
    timerItems.forEach(timerItem => {
        timerItem.style.display = "flex";
        timerItem.style.flexDirection = "column";
        timerItem.style.padding = "5px 10px"
   
    })
    
}

const timerValuesStyle = () => {
    timerValues.forEach(timerValue => {
        timerValue.style.fontSize = "30px";
       
    })
 
}
const timerLabelsStyle = () => {
    timerLabels.forEach(timerLabel => {
        timerLabel.style.textTransform = "uppercase";
        timerLabel.style.fontSize = "12px";
       
    })
 
}

timerItemsStyle();
timerValuesStyle();
timerLabelsStyle();


// Timer code
const date = new Date;
console.log(date);

function flatpickr(inputTextarea, options) {

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
}

  };
  flatpickr();