/**
 * Array
 */

//创建数组;
var arr1 = new Array();
var arr2 = [];
//追加元素
arr1[arr1.length] = 1;
//检测数组
if (arr1 instanceof Array) {

}
//join()
var colors = ["green", "red", "yellow"];
console.log(colors.join("||"));//green||red||yellow

//栈方法
colors.push("grey");
console.log(colors.pop());
//队列方法
console.log(colors.shift());//从前端取得
colors.unshift("grey");//同push();

//重排序sort()
arr2 = [0, 1, 5, 10, 15];
console.log(arr2.sort().join(","));//无比较函数比较字符串
var values = arr2.sort(function (value1, value2) {
    return value1 - value2;
});
console.log(values.join(","));

//操作方法
//slice(i,j);[i,j)左闭右开
console.log(values.slice(1, 3).join(','));
//splice(i,删除项数,插入的项```)
var values2 = Array.from(values);//0,1,5,10,15
values.splice(0, 2);//删除,5,10,15
console.log(values.join(","));
values = Array.from(values2);
values.splice(0, 0, -1, -2, -3);//插入,-1,-2,-3,0,1,5,10,15
console.log(values.join(","));
values = Array.from(values2);
values.splice(0, 1, -1);//替换,-1,1,5,10,15
console.log(values.join(','));

//位置方法,indexOf(searchStr,position),laseIndexOf()
var str = "0111110";
//利用indexOf()完全遍历匹配字符串
let cnt = 0;
let i = 0;
while ((i = str.indexOf("1", i)) != -1) {
    cnt++; i++;
}
console.log(cnt);

//迭代方法every(),filter(),forEach(),map(),some()
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function (item, index, array) {
    return (item > 0);
});//任意一项都大于0
console.log(everyResult);
var someResult = numbers.some(function (item, index, array) {
    return (item > 6);
});//存在一项大于6
console.log(someResult);
var filterResult = numbers.filter(function (item, index, array) {
    return (item % 2 == 1);
});//返回奇数
console.log(filterResult);
numbers.forEach(function (item, index, array) {
    console.log(item);
});//对每一项都打印,forEach没有返回值
var mapResult = numbers.map(function (item, index, array) {
    return item * 2;
});//每一项都*2;
console.log(mapResult);

//归并方法reduce(),reduceRight()
var sum = values.reduce(function (prev, cur, index, array) {
    return prev + cur;
});
console.log(sum);//求和