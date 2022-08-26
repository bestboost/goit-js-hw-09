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

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const promisesButton = document.querySelector('button');

delay = '';
delayInput.addEventListener('input', onDalayInput)
function onDalayInput (event) {
    delay = event.currentTarget.value;
    console.log('delay', delay);
} 
// onDalayInput()


step = '';
stepInput.addEventListener('input', onStepInput)
function onStepInput (event) {
    step = event.currentTarget.value;
    console.log('step', step);
} 
// onStepInput()


amount = '';
amountInput.addEventListener('input', onAmountInput)
function onAmountInput (event) {
    amount = event.currentTarget.value;
    console.log('amount', amount);
} 
// onAmountInput()



// const shouldResolve = Math.random() > 0.3;
const promise = new Promise ((resolve, reject) => {
  
//   setTimeout(() => {
   
//     if (shouldResolve) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//     console.log('создался промис')
//   }, 3000);
 
});
console.log(promise)

// promise.then(value => { console.log(value); // "Success! Value passed to resolve function"
// },).catch(error => {  console.log(error); // "Error! Error passed to reject function"
// })

promisesButton.addEventListener('submit', createPromise)

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // Fulfill 
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
