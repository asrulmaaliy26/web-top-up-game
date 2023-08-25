// Script for navigation bar
const bar = document.getElementById('bar'),
    close = document.getElementById('close'),
    nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}