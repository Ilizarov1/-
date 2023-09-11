function myInstanceof(left: Object, right: Function) {
    // 取到原型
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;

    // 判断是不是在原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = Object.getPrototypeOf(proto);
    }
}

function myNew(constructor: Function, ...args) {
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);

    return typeof result === 'object' ? result : obj;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const mycar = new Car('Honda', 'Accord', 1998);
// const a = mycar instanceof Car; // 返回 true
// const b = mycar instanceof Object; // 返回 true
console.log('prototype', Object.getPrototypeOf(mycar));
console.log('mycar', mycar);
console.log('instanceof', mycar instanceof Object);
console.log('myInstanceof', myInstanceof(mycar, Object));
