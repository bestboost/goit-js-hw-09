const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');


startBtn.style.fontSize = "25px";
startBtn.style.padding = "10px 20px";
startBtn.style.margin = "200px 8px 200px 500px";

stopBtn.style.fontSize = "25px";
stopBtn.style.padding = "10px 20px";
stopBtn.disabled = true;

const changeColor = {
  intervalId: null,
  
  start() {

    if(startBtn.disabled) {
      
      return;
    }
   
     startBtn.disabled = true,
     stopBtn.disabled = false;

  this.intervalId = setInterval(() => {

       const colorChangerFunction = getRandomHexColor();  
   document.body.style.backgroundColor = colorChangerFunction;  

   startBtn.style.backgroundColor = colorChangerFunction;
   
   stopBtn.style.backgroundColor = colorChangerFunction;

  }, 1000)
 
},

  stop() {
    
      stopBtn.disabled = true;
      startBtn.disabled = false,
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
