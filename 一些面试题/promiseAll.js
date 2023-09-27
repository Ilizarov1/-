function myPromiseAll(arr = []) {
    const result = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        arr.forEach((item, index) => {
            const timer = setTimeout(() => {
                reject('timeout 2000');
            }, 2000);

            Promise.resolve(item)
                .then((res) => {
                    clearTimeout(timer);
                    result[index] = res;
                    count++;
                    if (count === arr.length) {
                        resolve(result);
                    }
                })
                .catch((err) => reject(err));
        });
    });
}

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

myPromiseAll([delay(3000), delay(2), delay(3)]).then((res) => {
    console.log(res);
});
