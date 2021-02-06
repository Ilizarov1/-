/**
 * document object model
 */

/**
 * 选择符api
 */

 //1.document.querySelector()
var body = document.querySelector("body");//取body
var myDiv = document.querySelector("#myDiv");//id=myDiv
var selected = document.querySelector(".selected");//class=selected
var img = document.querySelector("img.selected");//img中class=selected

//2.document.querySelectorAll()
//return NodeList实例
//元素快照，不是动态的
var ems = document.getElementById("myDiv").querySelectorAll("em");
//取某div中的所以<em>
var selecteds = document.querySelectorAll(".selected");
//取所有className=selected的元素
var strongs = document.querySelectorAll("p strong");
//取<p>中所有的<strong>

/**
 * 元素遍历
 * 
 */
var i, len, child = document.firstElementChild;
while (child != document.lastElementChild) {
    processChile(child);//返回的是元素不必担心空白文本节点
    child = child.nextElementSibling;
}

/**
 * HTML5
 */

//1.getElementsByClassName()


//2.classList
//className是一个长字符串，直接替换其中某一个类比较复杂，classList解决这个问题
myDiv.classList.remove("user");
myDiv.classList.add("user");
myDiv.classList.toggle("user");//切换,有就删除，没就添加
myDiv.classList.contains("user");//是否有

