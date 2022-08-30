
const form = document.querySelector('form')

form.addEventListener("submit", (ev) => {
  ev.preventDefault()
  if(ev.currentTarget.getAttribute("pending")){
    return
  }
  
  const data = {
    position: 1,
    form: ev.currentTarget
  }
  doPromises(data)

})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position:position, delay:delay});
      } else {
        reject({position:position, delay:delay});
      }
    }, delay);
  });

  return promise;
}

function doPromises(data){
  let {position, form} = data
  const elems = form.elements
  const amount = parseInt(elems['amount'].value,10)
  const delay = parseInt(elems['delay'].value,10)
  const step = parseInt(elems['step'].value,10)
  let currDelay = step
  form.setAttribute("pending","true")
  currDelay = delay
  const unblocking = (position) =>{
    if(position === amount){
      form.removeAttribute("pending")
    }
  }
  for (let i = 0; i < amount; i++){
    const promise = createPromise(i+1, currDelay)
    promise.then((data) => {
      const {position, delay} = data
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    
    })
    .catch((data) => {
      const {position, delay} = data
      console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    
    })
    currDelay += step
  }


}
