function deldiv1() {
    document.getElementById("hr1").remove();
    document.getElementById("box1").remove();
}

function deldiv2() {
    document.getElementById("hr2").remove();
    document.getElementById("box2").remove();
}

function deldiv3() {
    document.getElementById("hr3").remove();
    document.getElementById("box3").remove();
}

let salesnumber = document.getElementById("salesnumber");
let btnplus = document.getElementById("salesplus");
let btnminus = document.getElementById("salesminus");
let prise = document.getElementById("price");
let number = 0;
let priseValue = 100;
btnplus.onclick = function () {
    if (number <= 9) {
        number++;
        salesnumber.innerHTML = number;
        prise.innerHTML = `${priseValue * number}$`;
    }
};

btnminus.onclick = function () {
    if (number >= 1) {
        number--;
        salesnumber.innerHTML = number;
        prise.innerHTML = `${priseValue * number}$`;
    }
};

let salesnumber2 = document.getElementById("salesnumber2");
let btnplus2 = document.getElementById("salesplus2");
let btnminus2 = document.getElementById("salesminus2");
let prise2 = document.getElementById("price2");

let number2 = 0;
let priceValue2 = 170;

btnplus2.onclick = function () {
    if (number2 <= 9) {
        number2++;
        salesnumber2.innerHTML = number2;
        prise2.innerHTML = `${priceValue2 * number2} $`;
    }
};
btnminus2.onclick = function () {
    if (number2 >= 1) {
        number2--;
        salesnumber2.innerHTML = number2;
        prise2.innerHTML = `${priceValue2 * number2} $`;
    }
};

let salesnumber3 = document.getElementById("salesnumber3");
let btnplus3 = document.getElementById("salesplus3");
let btnminus3 = document.getElementById("salesminus3");
let prise3 = document.getElementById("price3");

let number3 = 0;
let priceValue3 = 200;

btnplus3.onclick = function () {
    if (number3 <= 9) {
        number3++;
        salesnumber3.innerHTML = number3;
        prise3.innerHTML = `${priceValue3 * number3} $`;
    }
};
btnminus3.onclick = function () {
    if (number3 >= 1) {
        number3--;
        salesnumber3.innerHTML = number3;
        prise3.innerHTML = `${priceValue3 * number3} $`;
    }
};

let btntrue = true;
let like = document.getElementById("heartimg1");

function btnchange() {
    if (btntrue == true) {
        btntrue = false;
        like.src = "./images/like.png";
    }
    else if (btntrue == false) {
        btntrue = true;
        like.src = "hearts-icot.png";
    }
}

let btntrue2 = true;
let like2 = document.getElementById("heartimg2");

function btnchange2() {
    if (btntrue2 == true) {
        btntrue2 = false;
        like2.src = "./images/like.png";
    }
    else if (btntrue2 == false) {
        btntrue2 = true;
        like2.src = "hearts-icot.png";
    }
}

let btntrue3 = true;
let like3 = document.getElementById("heartimg3");

function btnchange3() {
    if (btntrue3 == true) {
        btntrue3 = false;
        like3.src = "./images/like.png";
    }
    else if (btntrue3 == false) {
        btntrue3 = true;
        like3.src = "hearts-icot.png";
    }
}