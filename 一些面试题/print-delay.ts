function printDelay() {
    // 一秒打印一次
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(new Date().toISOString(), i);
        }, i * 1000);
    }
}

// printDelay();

function printDelay2(arr: number[]) {
    // 奇数一秒打印，偶数两秒打印
    let prev = 0;
    arr.forEach((val, i) => {
        setTimeout(
            () => {
                console.log(new Date().toISOString(), val);
            },
            val % 2 ? prev + 1000 : prev + 2000
        );
        prev = val % 2 ? prev + 1000 : prev + 2000;
    });
}

printDelay2([1, 2, 3, 4, 5]);
