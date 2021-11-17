var cover = document.querySelector('.cover');
var modal = document.querySelector('.modal');
var modalbox = document.querySelector('.modal-box');
var joinbutton = document.querySelector('.join');
var awesomebutton = document.querySelector('.awesome-button');
var inputemail = document.querySelector('.input-email');


/* cover.style.display = 'flex';
modalbox.style.display = 'flex';
modal.style.display = 'flex'; */

joinbutton.addEventListener("click", openModal);

awesomebutton.addEventListener("click", closeModal);

modal.addEventListener("click", closeModal);


function openModal() {
    cover.style.display = 'flex';
    modalbox.style.display = 'flex';
    modal.style.display = 'flex';
}

function closeModal() {
    cover.style.display = 'none';
    modalbox.style.display = 'none';
    modal.style.display = 'none';
}





