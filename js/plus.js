let freedom = document.querySelector('.card-comment__item-like--freedom');
let flowers = document.querySelector('.card-comment__item-like--flowers');
let north = document.querySelector('.card-comment-item-like--north');
let devil = document.querySelector('.card-comment__item-like--devil');
let buttons = document.querySelectorAll('.button');



freedom.innerHTML = 345;
flowers.innerHTML = 567;
north.innerHTML = 605;
devil.innerHTML = 501;



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        if(buttons[i].classList.contains('freedom')){
            freedom.innerHTML++;

        }
    });
}