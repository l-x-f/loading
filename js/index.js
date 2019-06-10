const loadingRestart = document.querySelector("#loadingRestart");
const loadingStart = document.querySelector("#loadingStart");
const loadingStop = document.querySelector("#loadingStop");
const loadingEnd = document.querySelector("#loadingEnd");
const after = document.querySelector("#after");
const middleValue = 80;
const step = 0.15;
const timeInterval = 15;
let timer;
let count = 0;
setTimeout(() => {
  loadingStart.click();
}, 1000);

function initTimer() {
  timer = setInterval(() => {
    count = count + step;
    after.style.width = count + "%";
    if (count > middleValue) {
      after.style.width = middleValue + "%";
      clearInterval(timer);
    }
  }, timeInterval);
}

loadingStart.onclick = function() {
  timer && clearInterval(timer);
  initTimer();
};

loadingStop.onclick = function() {
  timer && clearInterval(timer);
};

loadingEnd.onclick = function() {
  timer && clearInterval(timer);
  timer = setInterval(() => {
    count = count + 2 * step;
    after.style.width = count + "%";
    if (count > 100) {
      after.style.width = 100 + "%";
      timer && clearInterval(timer);
    }
  }, timeInterval / 2);
};

loadingRestart.onclick = function() {
  timer && clearInterval(timer);
  after.style.width = 0 + "%";
  count = 0;
  initTimer();
};
