"use strict";

function showMenu() {
    let menu = document.querySelector('menu');

    if(menu.classList.contains('tmpshka')) {
        menu.style.left = '100vw';
        menu.classList.remove('tmpshka');

        for(let sect of document.querySelectorAll('section')) {
            sect.style.filter = 'none';
        }
        document.querySelector('.showM').style.visibility = 'visible';
    } else {
        menu.style.left = '0px';
        menu.classList.add('tmpshka');
        for(let sect of document.querySelectorAll('section')) {
            sect.style.filter = 'blur(15px)';
        }
        document.querySelector('.showM').style.visibility = 'hidden';
    }
}