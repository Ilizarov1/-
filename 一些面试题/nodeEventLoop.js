process.nextTick(() => {
    console.log(1);
});
setTimeout(() => {
    console.log(3);
}, 1);
Promise.resolve().then(() => {
    console.log(2);
});
setImmediate(() => {
    console.log(4);
});
