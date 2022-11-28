// ==UserScript==
// @name         Serveur_privé
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       DeepThroat
// @match        https://serveur-prive.net/minecraft/mc-hyping-fr-oneblock-farm2win-n1-en-france-1-18-8316/vote
// @icon         https://www.google.com/s2/favicons?sz=64&domain=serveur-prive.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let button = document.getElementById("btnvote");
    console.log(button);

    let timer = (Math.random()*(120000-5000)+5000);
    console.log("Vote dans : "+timer/1000);
    setTimeout(() => {
        button.click();
    }, timer)

setTimeout(() => {
       close();
    }, timer+2000)

    // Your code here...
})();