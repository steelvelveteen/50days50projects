import './style.scss';
const next = document.querySelector('#next');
next?.addEventListener('click', () => {
    console.log('Next button was clicked');
});

const prev = document.querySelector('#prev');
prev?.addEventListener('click', () => {
    console.log('Prev button was clicked');
});