var a;
var b;
var func;

// get operation

function getFunc() {
    func = this.innerHTML;
}

var plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", getFunc);

var minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", getFunc);

var divBtn = document.getElementById("divide");
divBtn.addEventListener("click", getFunc);

var multBtn = document.getElementById("multiply");
multBtn.addEventListener("click", getFunc);

// calculate result 

function count() {
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    var endRes;

    if (func == "+") {
        endRes = a + b;
    } else if (func == "-") {
        endRes = a - b;
    } else if (func == "/") {
        endRes = a / b;
    } else if (func == "*") {
        endRes = a * b;
    }

    var res = document.getElementById("result");
    res.innerHTML = a + func + b + "=" + endRes;
}

var calcBtn = document.getElementById("calc");
calcBtn.addEventListener("click", count);

// clear calculator

function clear() {
    var box1 = document.getElementById("a");
    box1.value = "";

    var box2 = document.getElementById("b");
    box2.value = "";

    var box3 = document.getElementById("result");
    box3.innerHTML = "";

    func = "";
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

// create list of old calculations
var calculations = [];

function addOld() {
    var res1 = document.getElementById("result").innerHTML;
    if (calculations.length < 10) {
        calculations.push(res1);
    } else {
        calculations.shift();
        calculations.push(res1);
    }

    let old = document.getElementById("old");
    old.innerHTML = calculations.join("<br/ >");
}

var calcBtn = document.getElementById("calc");
calcBtn.addEventListener("click", addOld);
