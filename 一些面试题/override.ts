function Car(name: string) {
    this.name = name;
}

Car.prototype.getName = function () {
    return this.name;
};

const mycar = new Car('car1');

function MyCar(name: string) {
    const obj = Object.create(Car.prototype);
    obj.getName = function () {
        return 'override';
    };

    return obj;
}
