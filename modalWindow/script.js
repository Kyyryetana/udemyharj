"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//avaa modal functio
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//lisää kaikkiin nappeihin event listenerin ja openModal
for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal)
}
//sulje modal functio
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//napista tai ulkopuolelta modalin sulkeminen
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//kuuntelee escape nappia
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})