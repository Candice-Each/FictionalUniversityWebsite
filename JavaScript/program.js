setInterval(show, 3000);
window.onload = function () {
    show();
    f();
}

var content = [
    "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"];
i = Math.floor(Math.random() * 3);
function show() {
    document.querySelector('#i1').innerHTML = content[i];
    i = (i + 1) % 3;
}

var video = [
    '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4" type="video/mp4"> <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv" type="video/webm">',
    '<source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4" type="video/mp4"> <source src="https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv" type="video/webm">'];
var j = 0;
// document.querySelector('#video1 video').addEventListener("ended", f());
function f() {
    document.querySelector('#video1 video').innerHTML = video[j];
    j = (j + 1) % 2;
    document.querySelector('#video1 video').load();
    document.querySelector('#video1 video').play();
}