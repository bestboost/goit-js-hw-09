const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const changeColor = {
  intervalId: null,
  isActive: false,

  start() {

    if(this.isActive) {
      return;
    }
     this.isActive = true,

  this.intervalId = setInterval(() => {

       const colorChangerFunction = getRandomHexColor();  
   document.body.style.backgroundColor = colorChangerFunction;  

  }, 1000)
 
},

  stop() {
      this.isActive = false;
         clearInterval(this.intervalId);
  },
};

startBtn.addEventListener('click',(() => { changeColor.start(); 
  }));
stopBtn.addEventListener('click', (() => { changeColor.stop();
  }));


// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
