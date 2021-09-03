/**
 * 面向对象
 */

//修改属性特性Object.defineProperty(object,propertyName)
var person = {
    name: "Jnz"
};
Object.defineProperty(person, "name", {
    configurable: false,//表示能否通过delete删除该属性
    enumerable: false,//表示能否通过for-in循环返回属性
    writable: false,//表示是否可以修改该属性
    value: "大胖子"//值
});
console.log(person.name);

//访问器属性,和数据属性是两个玩意儿，不是定义数据属性的访问方式！
var Jnz = {
    year: 2021,
    _weight: 60
};
Object.defineProperties(Jnz, {
    weight: {
        get: function () {
            return this._weight;
        },

        set: function (newValue) {
            if (newValue > 0) {
                this.year = (newValue - this._weight) / 10 + 2021;
                this._weight = newValue;
            }
        }
    }
});
Jnz.weight = 100;
console.log(Jnz.year + "," + Jnz._weight);

/**
 * 创建对象
 */

//1.工厂模式
//优点：解决创建多个相似对象问题
//缺点：无法解决对象类型识别问题
function Person(name, weight) {
    var o = new Object();
    o.name = name;
    o.weight = weight;
    o.isFat = function () {
        if (this.weight >= 100)
            return true;
        else
            return false;
    }
    return o;
}
var zhq = Person(zhq, 100);
console.log(zhq.isFat());

//2.构造函数模式,工厂模式的发展，解决工厂模式的缺点
//步骤：创建对象->构造函数作用域给赋给新对象->执行构造函数代码->返回新对象
//缺点：每个函数都在每个实例上创建一边，且它们不一样
//改进措施：把方法放在外面
function Person2(name, weight) {
    this.name = name;
    this.weight = weight;
    this.isFat = function () {
        if (this.weight >= 100)
            console.log("fat");
        else console.log("thin");
    }
}
var zjn = new Person2(zjn, 60);
zjn.isFat();
console.log(zjn instanceof Person2);
console.log(zjn.constructor == Person2);//构造函数属性

function Person2_1(name, weight) {//工厂模式改进
    this.name = name;
    this.weight = weight;
    this.isFat = isFat;
}
function isFat() {
    if (this.weight >= 100)
        console.log("fat");
    else console.log("thin");
}

//3.原型模式
//原型链：Person3 -> Person3 Prototype -> Object
//                      ^
//                      |
//                   jnz.__proto__
//缺点：不能在创建时写入值
function Person3() { }
Person3.prototype.name = "Jnz";
Person3.prototype.weight = 100;
Person3.prototype.sayWeight = function () {
    console.log(this.weight);
}
var jnz = new Person3();
jnz.sayWeight();
console.log(jnz.__proto__);
console.log(Person3.prototype.isPrototypeOf(jnz));//原型判断
console.log(Object.getPrototypeOf(jnz));//获取原型

jnz.weight = 60;
console.log(jnz.weight);//属性沿原型链搜索
console.log(jnz.hasOwnProperty("weight"));//检查属性是否来自实例对象本身
delete jnz.weight;//delete操作符
console.log(jnz.weight);
console.log("weight" in jnz);//in操作符,是否能访问该属性

var keys = Object.keys(Person3.prototype);
//Object.keys()获取所有可枚举enumerable:ture属性
console.log(keys);
var keys = Object.getOwnPropertyNames(Person3.prototype);
//获取所有属性
console.log(keys);

//更简化原型模式(字面量创建原型)
function Person4() { }
var oldproto = new Person4();
Person4.prototype = {//等于新建原型
    //constructor:Person4,
    //如果构造函数重要的话，否则原型构造函数不再指向Person4
    name: "jnz",
    weight: 100,
    sayWeight: function () {
        console.log(this.weight);
    }
}
//oldproto.sayWeight();//error,新建了原型对象，原来的原型里面没有这个函数

//4.组合使用
//最常用,省内存，集两种模式之长
function Person5(name,weight) {
    this.name = name;
    this.weight = weight;
}
Person5.prototype = {
    constructor: Person5,
    sayWeight: function () {
        console.log(this.weight);
    }
}

//5.动态原型模式
//完美，但不能用字面量重写原型，会断开原型链
function Person6(name, weight) {
    this.name = name;
    this.weight = weight;

    if (typeof this.sayWeight != "function") {//只有第一次会创建一个方法
        Person6.prototype.sayWeight = function () {
            console.log(this.weight);
        }
    }
}

//6.寄生构造函数
//用于增强某种类型
function SpecialArray() {
    var values = new Array();
    values.push.apply(values,arguments);//添加值
   /*
   for (let i = 0; i < arguments.length; i++){
        values.push(arguments[i])
    }
   */ 
    values.toPipedString = function () {//添加方法
        return this.join(",");
    };
    return values; 
}
var arr = new SpecialArray(1, 2, 3, 4);
var arr2 = new SpecialArray(2, 3);
console.log(arr.toPipedString());
console.log(arr2);

//7.稳妥构造函数模式
//适用于安全环境(禁用this和new)或防止数据被其他应用篡改
function Person7(name) {
    var o = new Object();
    o.sayName = function () {//仅此方法(稳妥方法)能够访问name
        console.log(name);
    }

}