Function.prototype['myApply'] = function (context, args) {
    if (typeof this !== 'function') {
        console.log('not function');
    }

    context = context || window;

    const fn = Symbol();

    context[fn] = this;

    const result = context[fn](...args);

    delete context[fn];

    return result;
};

Function.prototype['myBind'] = function (context, ...args) {
    const self = this;
    return function F(...newArgs) {
        if (this instanceof F) {
            return new self(...args, ...newArgs);
        }
        return self.apply(context, [...args, ...newArgs]);
    };
};

const myBind = function (fn, context, ...args) {
    return function tmpFn(...newArgs) {
        if (new.target === tmpFn) {
            return new fn(...args, ...newArgs);
        }
        return fn.apply(context, [...args, ...newArgs]);
    };
};

const test = function (a) {
    this.a = a;
};
