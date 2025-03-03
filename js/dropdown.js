'use strict';

console.log('Javascript is running successfully! Yay!');

var menu = document.querySelector('#menu');

menu.classList.add('hidden');

var menuFirstItem = document.querySelector('#menu a:first-of-type');
var header = document.querySelector('header');


var menuToggle = document.createElement('button');

menuToggle.setAttribute('id', 'menu-toggle');
menuToggle.innerHTML = 'Menu';

header.insertBefore(menuToggle, menu);


menuToggle.addEventListener('click', 
    function(){
        console.log('menuToggle has been clicked');

        if(menu.classList.contains('hidden')){
            console.log('Where is the menu!? Quick, open it!');
            menu.classList.remove('hidden');
        } 
        else{
            console.log('The menu is open. Quick! Hide the MENU!');
            menu.classList.add('hidden');
        }
    });