// 公告 轮播
function my$(id) {
    return document.getElementById(id);
}
var box=my$("box");
var inner=box.children[0];

var _ul=inner.children[0];

var list=_ul.children;
var olObj=inner.children[1];
var arr=my$("arr");
var imgWidth=inner.offsetWidth;
var right=my$("right");
var pic=0;
//根据li个数，创建小按钮
for(var i=0;i<list.length;i++){
    var liObj=document.createElement("li");
    olObj.appendChild(liObj);
    liObj.innerText=(i+1);
    liObj.setAttribute("index",i);
    liObj.onmouseover=function () {
        for (var j=0;j<olObj.children.length;j++){
            olObj.children[j].removeAttribute("class");
        }
        this.className="current";
        pic=this.getAttribute("index");
        animate(_ul,-pic*imgWidth);
    }

}
olObj.children[0].className = "current";

_ul.appendChild(_ul.children[0].cloneNode(true));

var timeId=setInterval(onmouseclickHandle,3000);

box.onmouseover=function () {
    arr.style.display="block";
    clearInterval(timeId);
};

box.onmouseout=function () {
    arr.style.display="none";
    timeId=setInterval(onmouseclickHandle,3000);
};


right.onclick=onmouseclickHandle;
function onmouseclickHandle() {

    if (pic == list.length - 1) {

        pic = 0;//先设置pic=0
        _ul.style.left = 0 + "px";
    }
    pic++;
    animate(_ul, -pic * imgWidth);

    if (pic == list.length - 1) {

        olObj.children[olObj.children.length - 1].className = "";

        olObj.children[0].className = "current";
    } else {

        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
}
// 单击左移动
left.onclick=function () {
    if (pic == 0){
        pic=list.length-1;
        _ul.style.left=-pic*imgWidth+"px";
    }
    pic--;
    animate(_ul,-pic*imgWidth);
    for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
    }

    olObj.children[pic].className = "current";
};


function animate(element, target) {
    clearInterval(element.timeId);

    element.timeId = setInterval(function () {

        var current = element.offsetLeft;

        var step = 10;
        step = current < target ? step : -step;

        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {

            clearInterval(element.timeId);

            element.style.left = target + "px";
        }
    }, 10);
}
