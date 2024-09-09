function f() {
    var dat = document.querySelector('#date').value;
    var tim = document.querySelector('#Time').value;
    var numb = document.querySelector('#number').value;
    var numb1 =Number(numb);
    var err = document.querySelector('#err');
    document.querySelector('#err').innerHTML = ""
    if (dat == "" || tim == "" || numb == "") {
        err.innerHTML = "Data not completed; please re-enter";
        err.style.color = "red";
    }
    else if (numb1 < 0 || numb1 % 1 != 0) {
        err.innerHTML = "Please enter a valid number of people!";
        err.style.color = "red";
    }
    else {
        err.innerHTML = ""
        if (reserve(dat, tim, numb1)) {
            alert("Your reservation is successful!");
        }
        else {
            alert("Sorry, the reservation is full!");
        }
    }
}