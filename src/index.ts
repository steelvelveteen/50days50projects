import './style.scss';

const panels = document.querySelectorAll('.panel');

panels?.forEach((pan: Element) => pan.addEventListener('click', () => {
    removeActiveClasses();
    pan.classList.add('active');
}));

const removeActiveClasses = () => {
    panels.forEach((pan: Element) => {
        pan.classList.remove('active');
    });
}