const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const end = document.querySelector("#end");
const cai = document.querySelector("#cai");
const middleValue = 80;
let timer;
let count = 0;
setTimeout(() => {
  start.click();
}, 1000);

function initTimer() {
  timer = setInterval(() => {
    count = count + 0.1;
    cai.style.width = count + "%";
    if (count > middleValue) {
      cai.style.width = middleValue + "%";
      clearInterval(timer);
    }
  }, 10);
}

start.onclick = function() {
  timer && clearInterval(timer);
  initTimer();
};

stop.onclick = function() {
  timer && clearInterval(timer);
};

end.onclick = function() {
  timer = setInterval(() => {
    count = count + 0.1;
    cai.style.width = count + "%";
    if (count > 100) {
      cai.style.width = 100 + "%";
      timer && clearInterval(timer);
    }
  }, 10);
};

begin.onclick = function() {
  timer && clearInterval(timer);
  cai.style.width = 0 + "%";
  count = 0;
  initTimer();
};

window.onload = function() {
  end.click();
};
