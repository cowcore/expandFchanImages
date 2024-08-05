// ==UserScript==
// @name         Expand Fchan Images
// @namespace    expandFchan
// @version      2024-08-05
// @description  expand fchan images
// @author       You
// @match        http://fchan.us/*
// @match        https://fchan.us/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fchan.us
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('content').innerHTML += '<button id="expandAll"  style="background-color:black;color:white;font-size:10px;padding:1px;">Expand Images</button>'
})();
document.getElementById('expandAll').addEventListener("click",function(){
            var images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++) {
            if(images[i].src=="http://fchan.us/fcp/zoom.png"){
                images[i].click()
            }
        }
});
