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

function throttle2(fn: Function, duration: number) {
    let timer: number;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, ...args);
                clearTimeout(timer);
            }, duration);
        }
    };
}

// 防抖
// 短时间内多次触发，只触发最后一次
function debounce(fn: Function, delay: number) {
    let timer: number;

    return function (...args) {
        if (!timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, ...args);
        }, delay);
    };
}
