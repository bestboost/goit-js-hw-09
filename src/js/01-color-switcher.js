// Задание 1 - переключатель цветов
// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на 
// случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно
//  останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение 
// темы запушено, кнопка «Start» была не активна (disabled).

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

// let debounce = _.debounce(onBodyColor, 1000, {
//     leading: true,
//   });

startBtn.addEventListener('click', debounce(() => {
    console.log("Scroll handler call after 300ms pause");
  }, 300));
stopBtn.addEventListener('click', () => console.log('stop click'));

// function onBodyColor() {
   
//    const colorChangerFunction = getRandomHexColor();  
//    document.body.style.backgroundColor = colorChangerFunction;     
   
// };


// function onStopBtnClick() {
    
// return onBodyColor();

// };

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
