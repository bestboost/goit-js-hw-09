function e(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(t=>{if(t.preventDefault(),t.currentTarget.getAttribute("pending"))return;!function(t){let{position:n,form:o}=t;const i=o.elements,r=parseInt(i.amount.value,10),s=parseInt(i.delay.value,10),l=parseInt(i.step.value,10);let a=l;o.setAttribute("pending","true"),a=s;for(let t=0;t<r;t++){e(t+1,a).then((e=>{const{position:t,delay:n}=e;console.log(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((e=>{const{position:t,delay:n}=e;console.log(`❌ Rejected promise ${t} in ${n}ms`)})),a+=l}}({position:1,form:t.currentTarget})}));
//# sourceMappingURL=03-promises.9ac9831a.js.map