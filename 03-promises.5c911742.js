!function(){function t(t,e){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:t,delay:e}):i({position:t,delay:e})}),e)}))}document.querySelector("form").addEventListener("submit",(function(e){(e.preventDefault(),e.currentTarget.getAttribute("pending"))||function(e){e.position;var n=e.form,o=n.elements,i=parseInt(o.amount.value,10),r=parseInt(o.delay.value,10),a=parseInt(o.step.value,10),c=a;n.setAttribute("pending","true"),c=r;for(var u=0;u<i;u++){t(u+1,c).then((function(t){var e=t.position,n=t.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(t){var e=t.position,n=t.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),c+=a}}({position:1,form:e.currentTarget})}))}();
//# sourceMappingURL=03-promises.5c911742.js.map
