const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    startBtn.setAttribute('disabled', true);
    timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
}

function onStopClick() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
 }