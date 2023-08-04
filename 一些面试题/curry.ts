function curry(fn: Function) {
    let rest = fn.length;
    let allArgs: any[] = [];
    return function tmp(...args) {
        if (args.length === rest) {
            return fn(...allArgs, ...args);
        }

        if (args.length !== rest) {
            allArgs = [...allArgs, ...args];
            rest = rest - args.length;
            return tmp;
        }
    };
}

function add(a: number, b: number, c: number) {
    return a + b + c;
}

const curryIt = curry(add);
console.log(curry(add)(1, 2, 3));
