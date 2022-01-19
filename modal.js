let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.modal-btn');
let modalContainer = document.querySelector('.modal-container');
let modalBox = document.querySelector('.modal-box');

openBtn.addEventListener('click', (e) => {
    modalContainer.classList.add("show")
    modalBox.classList.add('modalScale');
    e.preventDefault();
})

closeBtn.addEventListener('click', (e) => {
    modalContainer.classList.remove("show")
    modalBox.classList.remove('modalScale');
    e.preventDefault();
})