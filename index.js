const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timer = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.background = colors[randomColor];
      refs.startBtn.classList.add("disabled");
      refs.stopBtn.classList.remove("disabled");
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.timer);
    refs.startBtn.classList.remove("disabled");
    refs.stopBtn.classList.add("disabled");
  },
};

refs.startBtn.addEventListener("click", bodyColor.start.bind(bodyColor));
refs.stopBtn.addEventListener("click", bodyColor.stop.bind(bodyColor));
