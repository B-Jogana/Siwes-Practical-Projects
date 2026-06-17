const open = document.getElementById('open');
const close = document.getElementById('close');
const opened = document.getElementById('opened');
const closed = document.getElementById('closed');
const container = document.querySelector(".container");
const header = document.querySelector(".header");



open.addEventListener('click',() => container.classList.add('show-nav'));
close.addEventListener('click',() => container.classList.remove('show-nav'));


opened.addEventListener('click',() => {
    closed.style.display =" block";
    opened.style.display =" none";
    header.classList.add('show-down');
});

closed.addEventListener('click',() =>{
    closed.style.display =" none";
    opened.style.display =" block";
    header.classList.remove("show-down");
});
