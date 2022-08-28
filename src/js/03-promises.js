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
const promisesButton = document.querySelector('button');

// const firstDelay = document.querySelector('[name="delay"]');
// const delayStep = document.querySelector('[name="step"]');
// const amountInput = document.querySelector('[name="amount"]');

form.addEventListener("input", handleSubmit);
promisesButton.addEventListener('submit', createPromise);

let formData = {};

function handleSubmit(event) {
  event.preventDefault();
  
  const formElements = event.currentTarget;

  const delayInput = formElements.delay.value;
  const stepInput = formElements.step.value;
  const amountInput = formElements.amount.value;  

  const delay = Number(delayInput);
  const step = Number(stepInput);
  const amount = Number(amountInput)  

// console.log(delay)
// console.log(step)
// console.log(amount)

formData = {
    delay,
    step,
    amount,
  }
 
  console.log(formData)

  // event.currentTarget.reset();
 
}


// function takeValue () {
//   formData = {
//     delay,
//     step,
//     amount, 
//   }
//   console.log('!!', formData)
// }
// takeValue ()


function createPromise({position, delay}) {

  position += 1;
  console.log (position)
 
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
   }, delay)
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






// let delay = '';


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



