const mainButton = document.querySelector('.main--button');
const btnIn = document.querySelector('.btn--in');
const popub = document.querySelector('.popub');

mainButton.addEventListener('click', ()=> {
    popub.style.cssText = ` 
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
    `
})

btnIn.addEventListener('click', ()=> {
    popub.style.cssText = ` 
    top: 0%;
    transform: translate(-50%, -50%) scale(0);
    visibility: hidden;
    `
})