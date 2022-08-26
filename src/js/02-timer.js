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

         
    },
  
};

flatpickr('input#datetime-picker', options)



// Timer code
const timeNow = Date.now();

const inputTextarea = document.querySelector('input');
const startButton = document.querySelector('[data-start]');

startButton.disabled = false;

inputTextarea.addEventListener('input', takeTargetDate)
let targetDate = '';
function takeTargetDate (event) {
    userDate = event.currentTarget.value;
    targetDate = (Date.parse(userDate))

  if (targetDate <= timeNow) {
      
    alert("Please choose a date in the future");
};

if (targetDate > timeNow) {
  
    startButton.disabled = false;
};
    };
    

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
      
        startButton.disabled = true;
        this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      console.log(deltaTime)
      const countTime = this.convertMs(deltaTime);

      this.onTick(countTime)

      if(deltaTime <= 1000){  
        clearInterval(this.intervalId);
        this.isActive = false;
        
        startButton.disabled = false;
      
      };  
    }, 1000);

   
  }

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

function updateClockface({ days, hours, minutes, seconds }) {
    day.textContent = `${days}`;
    hour.textContent  = `${hours}`;
    minute.textContent  = `${minutes}`;
    second.textContent  = `${seconds}`;
}








