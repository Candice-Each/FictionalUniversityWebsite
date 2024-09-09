var titl = document.querySelectorAll('#forms p');
var prog = document.querySelectorAll('.programs');
for (var i = 0; i < titl.length; i++) {
    titl[i].setAttribute('index', i);
    titl[i].onclick = function () {
        for (var i = 0; i < titl.length; i++) {
            titl[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        for (var i = 0; i < prog.length; i++) {
            prog[i].style.display = 'none';
        }
        prog[index].style.display = 'block';
    }
}

var choice = document.querySelectorAll('form');
var tr = document.querySelectorAll('tr')
var trAll = tr.length;
var ranksNow = [];
var majorsNow = [];
function f(h) {
    var j = h - 1
    var rank = choice[j].querySelector('input').value;
    if (rank == "" || rank % 1 != 0) {
        alert("Please enter the rank of chosen major");
    }
    else if (rank < 1 || rank > 10) {
        alert("Please enter the rank of chosen between 1 and 10");
    }
    else {
        ;
        var line = tr[rank];
        var column1 = line.querySelectorAll('td')[0];
        var column2 = line.querySelectorAll('td')[1];
        var major = choice[j].querySelector('label').textContent;
        var x = Array.from(ranksNow).indexOf(rank);
        var y = Array.from(majorsNow).indexOf(major);
        if (y != -1) {
            alert("You have already chosen this major");
        }
        else if (x != -1) {
            alert("You have already chosen this rank");
        }
        else {
            if (j <= 4) {
                var college = titl[0].innerText;
            }
            else if (j > 7) {
                var college = titl[2].innerText;
            }
            else {
                var college = titl[1].innerText;
            }
            column1.innerHTML = college;
            column2.innerHTML = major;
            if (rank == 1) {
                alert('You have chosen ' + major + ' as your 1st chosen major in ' + college + ' successfully');
            }
            else if (rank == 2) {
                alert('You have chosen ' + major + ' as your 2nd chosen major in ' + college + ' successfully');
            }
            else if (rank == 3) {
                alert('You have chosen ' + major + ' as your 3rd chosen major in ' + college + ' successfully');
            }
            else {
                alert('You have chosen ' + major + ' as your ' + rank + 'th chosen major in ' + college + ' successfully');
            }
            ranksNow.push(rank);
            majorsNow.push(major);
            updateTable();
        }
    }
}


function updateTable() {
    var total = majorsNow.length;
    time = new Date();
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();

    document.querySelector('#tNumber').innerHTML = "Total Number of Major Applied: " + total;
    document.querySelector('#time').innerHTML = "Last Change Time: " + year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
}

function submit() {
    var gap = 0;
    var lost = [];
    var c = 0;
    for (var a = 1; a < trAll; a++) {
        var mIn = tr[a].querySelectorAll('td')[1].textContent;
        if (mIn != '') {
            c = a;
        }
    }
    if (total < 1) {
        var total = majorsNow.length;
        document.querySelector('#feedback').innerHTML = "You have not chosen any chosen.";
    }
    else {
        for (var b = 1; b < c + 1; b++) {
            var majorGap = tr[b].querySelectorAll('td')[1].textContent;
            if (majorGap == '') {
                gap++;
                if (b == 1) {
                    lost.push(" " + b + "st chosen majors");
                }
                else if (b == 2) {
                    lost.push(" " + b + "nd chosen majors");
                }
                else if (b == 3) {
                    lost.push(" " + b + "rd chosen majors");
                }
                else {
                    lost.push(" " + b + "th chosen majors");
                }
            }
        }
        if (gap > 0 || c == 0) {
            document.querySelector('#feedback').innerHTML = "You have not chosen your" + lost + ", you can not leave any gap between your chosen majors";
        }
        else {
            var time = new Date();
            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            document.querySelector('#feedback').innerHTML = "You have successfully submitted your application at time " + year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
        }

    }
    updateTable();
}

document.querySelector("#clear").onclick = function () {
    for (var d = 1; d < trAll; d++) {
        tr[d].querySelectorAll('td')[0].innerHTML = "";
        tr[d].querySelectorAll('td')[1].innerHTML = "";
        ranksNow = [];
        majorsNow = [];
        total = majorsNow.length;
        document.querySelector('#feedback').innerHTML = "";
    }
    updateTable();
}







// for (var i = 0; i < document.querySelectorAll('#forms p').lenFgth; i++) {
//     document.querySelectorAll('#forms p')[i].setAttribute('index', i);
//     document.querySelectorAll('#forms p')[i].onclick = function () {
//         for (var i = 0; i < document.querySelectorAll('#forms p').length; i++) {
//             document.querySelectorAll('#forms p')[i].className = '';
//         }
//         this.className = 'current';
//     }
// }
// var tAll = document.querySelectorAll('p')
// for (var i = 0; i < tAll.length; i++) {
//     function click() {
//         if (tAll[i].onclick) {
//             for (var i = 0; i < tAll.length; i++) {
//                 tAll[i].className = '';
//             }
//             this.className = 'current';
//         }
//     }
// }
// function f1() {
//     document.querySelector('#p1').setAttribute('style', 'background-color:rgba(255, 255, 255, 0.683)');
//     document.querySelector('#p1').style.color = "rgba(24, 22, 59, 0.689)";
//     document.querySelector('#p2').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p2').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#p3').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p3').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#form1').setAttribute('style', 'display:block;');
//     document.querySelector('#form2').setAttribute('style', 'display:none;');
//     document.querySelector('#form3').setAttribute('style', 'display:none;');
// }
// function f2() {
//     document.querySelector('#p2').setAttribute('style', 'background-color:rgba(255, 255, 255, 0.683)');
//     document.querySelector('#p2').style.color = "rgba(24, 22, 59, 0.689)";
//     document.querySelector('#p1').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p1').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#p3').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p3').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#form1').setAttribute('style', 'display:none;');
//     document.querySelector('#form2').setAttribute('style', 'display:block;');
//     document.querySelector('#form3').setAttribute('style', 'display:none;');
// }
// function f3() {
//     document.querySelector('#p3').setAttribute('style', 'background-color:rgba(255, 255, 255, 0.683)');
//     document.querySelector('#p3').style.color = "rgba(24, 22, 59, 0.689)";
//     document.querySelector('#p1').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p1').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#p2').setAttribute('style', 'background-color:rgba(45, 40, 131, 0.498)');
//     document.querySelector('#p2').style.color = "rgb(246, 248, 255)";
//     document.querySelector('#form1').setAttribute('style', 'display:none;');
//     document.querySelector('#form2').setAttribute('style', 'display:none;');
//     document.querySelector('#form3').setAttribute('style', 'display:block;');
// }



