// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в
//  миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов
//   которое необходимо создать.


// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay)
//  столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого
//   промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

const form = document.querySelector(".form");

// const firstDelay = document.querySelector('[name="delay"]');
// const delayStep = document.querySelector('[name="step"]');
// const amountInput = document.querySelector('[name="amount"]');
const promisesButton = document.querySelector('button');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {elements: {  delay, step }} = event.currentTarget;

  console.log(` delay: ${ delay.value}, step: ${step.value}`);
  event.currentTarget.reset();
}




// let delay = '';

// promisesButton.addEventListener('submit', onDelayInput )

// function onDelayInput (event) {
//     delay = event.currentTarget.value;
//     console.log('delay', delay);
   
// }


// let step = '';
// delayStep.addEventListener('input', onStepInput)
// function onStepInput (event) {
//     step = event.currentTarget.value;
//     console.log('step', step);
// } 
// onStepInput()


// let amount = '';
// amountInput.addEventListener('input', onAmountInput)
// function onAmountInput (event) {
//     amount = event.currentTarget.value;
//     console.log('amount', amount);
// } 
// onAmountInput()




function createPromise(position, delay) {

  return new Promise ((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  
   setTimeout(() => {
      if (shouldResolve) {
       
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // Fulfill 
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Reject
  }
   }, delay.value)
  })

}


// function funcBefore(){
//   intervalId = null;

//   intervalId = setInterval(function createPromise(){

 
//    clearInterval(intervalId);

//  funcBefore();
// }, amount);
// clearInterval(intervalId);
// }


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
