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


// clock face
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

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


// liba
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < timeNow) {
      
        alert("Please choose a date in the future");
    };

    if (selectedDates[0] > timeNow) {
      
        startButton.disabled = false;
    };
    
  
    },
    

};

flatpickr('input#datetime-picker', options)





// Timer code
const timeNow = new Date;
console.log('timeNow    ',timeNow)

// const inputTextarea = document.querySelector('input');
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

// inputTextarea.addEventListener('input', onUserDate);

// function onUserDate() {
    // console.log(onUserDate)
// }

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

    }

    start() {
        if(this.isActive) {
            return;
        }
        const startNow = Date.now();
        startButton.disabled = true;
        this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startNow;
      const countTime = this.convertMs(deltaTime);

      this.onTick(countTime)
    }, 1000);
   
  };

//   stop () {
    // конечная дата, то есть 00:00:00:00
    // clearInterval(this.intervalId);
    // this.isActive = false,
    // const countTime = this.convertMs(deltaTime);
    // this.onTick(countTime)
//   }

  //   Для подсчета значений
convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

}


const timer = new Timer({
onTick: updateClockface
});

startButton.addEventListener('click', timer.start.bind(timer));
startButton.disabled = true;

function updateClockface({ days, hours, minutes, seconds }) {
    day.textContent = `${days}`;
    hour.textContent  = `${hours}`;
    minute.textContent  = `${minutes}`;
    second.textContent  = `${seconds}`;
}








