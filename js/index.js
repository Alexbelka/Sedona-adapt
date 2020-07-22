let nav = document.querySelector(".header-navigation");
let open = document.querySelector('.btn--open');
let close = document.querySelector('.btn--close');

close.addEventListener('click',function(){
    nav.classList.remove('header-navigation--opened');
    nav.classList.add('header-navigation--closed');
});

open.addEventListener('click',function(){
    nav.classList.remove('header-navigation--close');
    nav.classList.add('header-navigation--opened');
});