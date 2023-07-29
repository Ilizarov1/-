// 节流
// 一定时间内仅触发一次

function throttle(fn: Function, duration: number) {
    let prev = 0;

    return function (...args) {
        const now = Date.now();
        if (duration - (now - prev) <= 0) {
            fn.apply(this, ...args);
            prev = Date.now();
        }
    };
}

// 防抖
// 短时间内多次触发，只触发最后一次
function debounce(fn: Function, delay: number) {
    let timer = null;

    return function (...args) {
        if (!timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, ...args);
        }, delay);
    };
}
