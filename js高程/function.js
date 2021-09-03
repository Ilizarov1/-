/**
 * function是个object,函数名是个指针
 */

 //作为值传递
function getName(name) {
    return "hello, " + name;
}
function callSomeFunc(someFunc, arg) {
    return someFunc(arg);
}
console.log(callSomeFunc(getName, "Jnz"));
//作为返回值
function createComparisonFunc(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        return value1 - value2;
    }
}

//arguements.callee()递归松耦合
function factorial(num) {
    if (nmu <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}//简单递归求阶乘,利用callee消除函数名耦合

//caller获取调用者信息
function outer() {
    inner();
}
function inner() {
    console.log(arguments.callee.caller);
    console.log(inner.caller);
}
outer();

//call()和apply(),在特定作用域中调用函数(=设置this的值)
//call(object,arg1,arg2```)
//apply(object,arguements)
//两函数效果一致，传入参数方式不同
window.color = "red";
var obj = {
    color: "blue"
};
function sayColor() {
    console.log(this.color+" "+this);
}
sayColor();
sayColor.call(obj);
sayColor.call(window);//转移作用域

//bind(obj),this的只会被绑定为传入对象
var bindResult = sayColor.bind(obj);
bindResult();


/**
 * 模仿块级作用域，私有变量
 */

//1.私有变量和特权方法
function MyObject() {
    //私有变量
    var privateVariable = 10;
    //私有函数
    function privateFunction() {
        return false;
    }
    //特权方法
    this.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
}
var o = new MyObject();
console.log(o.publicMethod());

//2.静态私有变量

(function () {
    var name = "";//静态变量
    Person = function (value) {//没有var关键字，声明为全局变量
        name = value;
    };
    Person.prototype.getName = function () {
        return name;
    };
    Person.prototype.setName = function (value) {
        name = value;
    };
})();

var person1 = new Person("jnz");
console.log(person1.getName());
person1.setName("wz");
console.log(person1.getName());
var person2 = new Person("zhq");
console.log(person2.getName());//所有实例都共享一个属性
console.log(person1.getName());

//3.模块模式
//为单例创建私有变量和特权方法
var singleton = function(){
    //私有变量和方法
    var privateVariable = 10;
    function privateFunction() {
        console.log("privatevariable" + privateVariable);
    }

    //特权/公有方法和属性
    return {//返回字面量创建的对象
        publicProperty: true,
        publicMethod: function () {
            privateVariable++;
            return privateFunction();
        }
    };
}();

//4.增强的模块模式
//适用于单例是某种特定类型
var singleton2 = function (val) {
    var privateVariable = 10;
    
    function privateFunc() {
        return false;
    }
    var arr = new Array();
    //添加公有方法
    arr.publicProperty = true;
    arr.getName = function () {
        console.log(val);
    };
    return arr;
}("jnz");

singleton2.getName();