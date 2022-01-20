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

function showCall() {
    let call = document.querySelector('.call');

    if(call.classList.contains('tmpshka')) {
        call.style.left = '100vw';
        call.classList.remove('tmpshka');

        for(let sect of document.querySelectorAll('section')) {
            sect.style.filter = 'none';
        }
        document.querySelector('.showM').style.visibility = 'visible';
    } else {
        call.style.left = '0px';
        call.classList.add('tmpshka');
        for(let sect of document.querySelectorAll('section')) {
            sect.style.filter = 'blur(15px)';
        }
        document.querySelector('.showM').style.visibility = 'hidden';
    }
}