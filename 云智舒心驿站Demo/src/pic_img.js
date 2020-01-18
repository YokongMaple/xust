/*
teacher 轮播
 */
function my$(id) {
    return document.getElementById(id);
}
var time_t = 30;//调节移动像素的间隔时间

var _box=my$("pic_inner");
var _inner=_box.children[0];
var child_li=_inner.children.length;
// alert(child_li);
_inner.style.marginLeft = "0px";
// _inner.style.marginLeft = "-300px";
var time_jg= 0;//左移距离
var t_m=setInterval(teacher_move,time_t);
var flag_t = -1;
function teacher_move() {
    time_jg -=1;

    _inner.style.marginLeft = time_jg+"px";
    if (time_jg == -210 * (child_li/2))
    {
        // sleep(1000);
      time_jg = 0;

    }
}
_box.onmouseover=function () {

    clearInterval(t_m);
};
// 鼠标移到图片外
_box.onmouseout=function () {

     t_m = setInterval(teacher_move,time_t);
};

// function sleep(numberMillis) {
//     var now = new Date();
//     var exitTime = now.getTime() + numberMillis;
//     while (true) {
//     /*
//     使用死循环达到计时睡眠，有点low
//     后边进行修改
//      */
//         now = new Date();
//         if (now.getTime() > exitTime)
//             return;
//     }
// }
