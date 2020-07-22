

let point = document.querySelectorAll('.point');
let form = document.querySelector('.introduction-form');
let popupFail = document.querySelector('.popup--fail');
let popupSuccess = document.querySelector('.popup--success');
let formBtn = document.querySelectorAll('.popup__btn');
let popup = document.querySelectorAll('.popup');


form.addEventListener('submit',function(e){
    e.preventDefault();
    for(let i= 0; i < point.length; i++){
        if(!point[i].value){
            point[i].style.border = '1px solid red';
            popupFail.classList.add('popup--appear');
        }
        else{
            point[i].style.border = '1px solid black';
            popupSuccess.classList.add('popup--appear');
        }
    }

    for(let i = 0; i < formBtn.length; i++){
        formBtn[i].addEventListener('click',function(){
            for(let e = 0; e < popup.length; e++){
                popup[e].classList.remove('popup--appear');
            }
        });
    }

});