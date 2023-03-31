const popUp = document.querySelector('div.pop-up');
const btnClosePopUp = document.querySelector('button#fechar-popup');

window.onload = () => {
    popUp.classList.add('show');
    document.body.filter = 'blur(60px)';
}
btnClosePopUp.onclick = () => {
    popUp.classList.remove('show');
}