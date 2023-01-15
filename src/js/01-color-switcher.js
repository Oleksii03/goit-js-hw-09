const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let intervalId = null;

const onChangeColor = (event) => {
  onBtnDisabled()
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = `${color}`;
  }, 1000)
};

const onStopChangeColor = (event) => {
  clearInterval(intervalId);
  onBtnDisabled()
};

function onBtnDisabled() {
  if (!btnStart.disabled) {
    btnStart.disabled = true;
    btnStop.disabled = false
  } else {
    btnStart.disabled = false;
    btnStop.disabled = true
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnStart.addEventListener("click", onChangeColor);
btnStop.addEventListener("click", onStopChangeColor);