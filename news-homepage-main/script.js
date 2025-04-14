const btnOpen = document.querySelector('.icon-menu');
const btnClose = document.getElementById('btn-close');


btnOpen.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'flex';
})

btnClose.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
})