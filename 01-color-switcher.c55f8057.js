!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.style.fontSize="25px",t.style.padding="10px 20px",t.style.margin="200px 8px 200px 500px",e.style.fontSize="25px",e.style.padding="10px 20px",e.disabled=!0;var n={intervalId:null,start:function(){t.disabled||(t.disabled=!0,e.disabled=!1,this.intervalId=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=n,t.style.backgroundColor=n,e.style.backgroundColor=n}),1e3))},stop:function(){e.disabled=!0,t.disabled=!1,clearInterval(this.intervalId)}};t.addEventListener("click",(function(){n.start()})),e.addEventListener("click",(function(){n.stop()}))}();
//# sourceMappingURL=01-color-switcher.c55f8057.js.map