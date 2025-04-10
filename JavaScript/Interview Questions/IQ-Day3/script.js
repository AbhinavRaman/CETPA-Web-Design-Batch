//Question.1

let btn = document.querySelector('button')
let body = document.querySelector('body')
function addH1(){
    const heading = document.createElement('h1');
    heading.innerText = "MERN STACK";
    body.prepend(heading);
}

//Question.2

// let el = document.querySelector('h1').innerText = 'hello';

//Question.3

function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    let time = `${h} : ${m} : ${s}`;
    // let time = h + " : " + m + " : " + s;
    setTimeout(() => {
        clock();
    }, 1000);
    document.getElementById('Myclock').innerText = time;
}
clock();

//Question.4

let content = document.querySelector('#content');
let btnn = document.querySelector('#btn');

function chngContent(){
    content.innerText = "Welcome to Elevation Academy."
}

// Question.5

function hide(){
    document.querySelector("#para").style.display = "none";
}
