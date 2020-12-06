import './style.scss';
const progress = document.querySelector('#progress') as HTMLElement;
const circles = document.querySelectorAll('.circle') as NodeListOf<Element>;
const next = document.querySelector('#next') as HTMLButtonElement;
const prev = document.querySelector('#prev') as HTMLButtonElement;
let currentActive = 1;

next?.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) currentActive = circles.length;
    update();
});

prev?.addEventListener('click', () => {
    console.log('Prev button was clicked');
    currentActive--;
    if (currentActive < 1) currentActive = 1;
    update();
});

const update = () => {
    circles.forEach((circle: Element, index: number) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active') as NodeListOf<Element>;
    progress.style.width = (((actives.length - 1) / (circles.length - 1)) * 100).toString() + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }


}