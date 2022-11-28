// ==UserScript==
// @name         Hyping
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       DeepThroat
// @match        https://hyping.fr/vote*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hyping.fr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let test = document.querySelector('[data-server="oneblock"]'); // Your code here...
    console.log(test);
    if(test.getAttribute('class')==("btn btn-primary btn-large disabled")) {
        let timer = test.getAttribute('data-vote-time');
        //console.log(timer);
         let wait = (Math.random()*(15000-5000)+5000);
        console.log("Attente de : "+(timer-Date.now()+wait)/1000);

        setTimeout(() => {
            location.reload();
        }, timer-Date.now()+wait)
    }
    else {
        let wait2 = (Math.random()*(15000-5000)+5000);
        setTimeout(() => {
            test.click();
        }, wait2)

        setTimeout(() => {
            location.reload();
        }, 120000+wait2)
    }

})();