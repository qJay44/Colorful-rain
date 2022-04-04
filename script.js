const amount = 50;
const body = document.querySelector('body');

for (let i = 0; i < amount; i++) {
    const drop = document.createElement('i');
    const size = Math.random() * 5 + 0.2;
    const posX = Math.floor(Math.random() * window.innerWidth);
    const delay = Math.random() * -20;
    const duration = Math.random() * (5 - 3 + 1) + 3;

    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    body.appendChild(drop);
}