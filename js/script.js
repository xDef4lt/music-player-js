const popUp = document.querySelector('div.pop-up');
const btnClosePopUp = document.querySelector('button#fechar-popup');
const main = document.querySelector('main');

window.onload = () => {
    popUp.classList.add('show');
    main.style.filter = 'blur(60px)';
}
btnClosePopUp.onclick = () => {
    popUp.classList.remove('show');
    main.style.filter = 'none';
}