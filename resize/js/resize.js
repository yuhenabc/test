var flag = 0;

function doThings() {
    var now_time = +new Date;
    console.log(now_time);
    var colors = ['#33C733', '#55B633'];
    var box = document.getElementById('box');
    box.style.backgroundColor = colors[now_time % 2];
    box.innerText = ++flag;
}

function handleResize() {
    var timer = null,
        delay = 50,
        must_do = 200,
        last_time;
    return function () {
        clearTimeout(timer);
        var now_time = +new Date;
        if (!last_time) {
            console.log('init');
            last_time = now_time;
        } else if (now_time - last_time > must_do) {
            console.log('must do it');
            doThings();
            last_time = now_time;
        } else {
            timer = setTimeout(function () {
                console.log('just do it');
                doThings();
                last_time = +new Date;
            }, delay);
        }
    };
}
window.onresize = handleResize();

var a = +new Date;
var c = 1;

setTimeout(function () {
    var b = +new Date;
    console.log(b - a);
    c = 2;
}, 100);

setTimeout(function () {
    console.log(c);
}, 100);
