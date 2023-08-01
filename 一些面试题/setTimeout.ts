// setTimeout(() => {
//     console.log(1);
// }, 1000);
// const now = Date.now();
// console.log(now);
// while (true) {
//     if (Date.now() - now >= 1000) break;
// }
// console.log(Date.now());
// setTimeout(() => {
//     console.log(2);
// }, 2000);

function double(num: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2 * num);
        }, 1000);
    });
}

function test() {
    const nums = [1, 2, 3];
    console.log(new Date().toISOString());
    // const res = await double(1);
    // console.log(res, new Date().toISOString());
    nums.forEach(async (num, i) => {
        console.log(i);
        const res = await double(num);
        console.log(new Date().toISOString());
        console.log('print', i);
        console.log(res);
    });
}
test();
