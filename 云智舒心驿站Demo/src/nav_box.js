//首页大图片 轮播
var curIndex=0;
//时间间隔 单位毫秒
var timeInterval=5000;
var a=["../src/img/index1.png","../src/img/5.jpg","../src/img/6.jpg","../src/img/7.jpg"];
var obj=document.getElementById("nav_img");
setInterval(changeImg,timeInterval);
function changeImg()
{

    if (curIndex==a.length-1)
    {
        curIndex = 0;
    }
    else
    {
        curIndex += 1;
    }

    obj.src=a[curIndex];
} 