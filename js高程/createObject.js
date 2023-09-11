function createPerson(name, age) {
    const o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };

    return o;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    };
}

const a1 = new Person('a1', '20');

console.log(a1.constructor === Person);
console.log(a1 instanceof Person);

function Person2() {}

Person2.prototype.name = 'a2';
Person2.prototype.age = '20';
Person2.prototype.sayName = function () {
    console.log(this.name);
};

function Person3(name, age) {
    this.name = name;
    this.age = age;
}

Person3.prototype.sayName = function () {
    console.log(this.name);
};
