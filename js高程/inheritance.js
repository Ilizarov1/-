/**
 * 继承
 */

//1.借用构造函数
//存在与构造函数模式建立对象产生的相同问题，很少单独使用
function SuperType(name) {
  this.colors = ["red", "blue", "white"];
  this.name = name;
}

function SubType(name, age) {
  SuperType.call(this, name); //子对象this给父构造函数
  this.age = age;
}
var son = new SubType("jnz", 24);
console.log(son.name + "," + son.age);

//2.组合式继承
//最常用
//缺点：调用两次超类构造函数
function SuperType2(name) {
  this.name = name;
  this.colors = ["red"];
}
SuperType2.prototype.sayName = function () {
  console.log(this.name);
};
function SubType2(name, age) {
  //继承属性
  SuperType2.call(this, name); //借用构造函数
  this.age = age;
}
//继承方法
SubType2.prototype = new SuperType2(); //为什么要new?-防止修改超类原型
SubType2.prototype.constructor = SubType2;
SubType2.prototype.colors.push("black");
SubType2.prototype.sayAge = function () {
  console.log(this.age);
};

var instance = new SubType2("jnz", 18);
console.log(instance);

//3.原型式继承
//要求以一个对象为基础,进行一次浅复制
var person3 = {
  name: "jnz",
  friends: ["yjy", "zhq"],
};
var anotherPerson = Object.create(person3);
anotherPerson.friends.push("wz");
var yetPerson = Object.create(person3);
yetPerson.friends.push("wyt");
console.log(person3.friends);

//4.寄生组合式继承
//利用超类原型副本优化组合继承，最完美
function inheritPrototype(subType, superType) {
  var prototype = Object(superType.prototype); //创建原型副本而不是调用超类构造函数
  prototype.constructor = subType; //连接构造函数
  subType.prototype = prototype;
}

function SuperType4(name) {
  this.name = name;
  this.colors = ["red"];
}
SuperType4.prototype.sayName = function () {
  console.log(this.name);
};
function SubTyper4(name, age) {
  SuperType4.call(this, name);
  this.age = age;
}
inheritPrototype(SubTyper4, SuperType4);
SubTyper4.prototype.sayAge = function () {
  console.log(this.age);
};
