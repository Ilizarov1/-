setInterval(function () {
    let j = 0;
    while (j++ < 100000000);
}, 0);
// 倒计时纠偏
const interval = 1000;
// 从服务器获取到的，距离活动开始的时间
let ms = 50000;
let count = 0;
const start = Date.now();
let timeCounter;

if (ms >= 0) {
    timeCounter = setTimeout(countDownStart, interval);
}

function countDownStart() {
    count++;
    // 计算误差
    const offset = Date.now() - (start + count * interval);
    let next = interval - offset;

    next = next < 0 ? 0 : next;

    ms -= interval;

    console.log(`误差：${offset} ms，下一次执行：${next} ms 后，离活动开始还有：${ms} ms`);

    if (ms <= 0) {
        clearTimeout(timeCounter);
    }

    if (ms > 0) {
        timeCounter = setTimeout(countDownStart, next);
    }
}
