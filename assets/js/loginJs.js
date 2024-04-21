import {showInput, showAlart, LowColor, scrollEvent, reviwcite} from "./main-func.js"

const boxsmsinput = document.querySelector('.box-smsinput');
const inputmobile = document.querySelector('.inputmobile');
const timersms = document.querySelector('.timersms');
const smsbot = document.querySelector('.smsbot');
const linkcreate = document.querySelectorAll('.linkcreate');
const sectionlogin = document.querySelectorAll('.section-login');
const smsinput = document.querySelectorAll('.smsinput');


let allow = false;
let login = true;
let count = 59;
let smsCount = 1;

//---------------------------func

function mouseHandler() {
    console.log(smsCount)
    smsinput[smsCount].focus()
    if (smsCount === 3) {
        smsCount = 0;
    } else {
        smsCount += 1;
    }
}

function numberphHandler() {
    if (inputmobile.value.length > 0) {
        inputmobile.style.display = "none";
        boxsmsinput.style.display = "block";
        smsbot.innerHTML = "Login"
        timersms.style.display = 'block'
        const setin = setInterval(function () {
            timersms.innerHTML = "00:" + count;
            count -= 1;
            if (count === 0) {
                clearInterval(setin)
            }
        }, 1000)
        console.log(smsbot)
    } else {
        alert("شماره وارد شود")
    }
    if (allow === true) {
        let url = 'index.html';
        url = url + '?name=angelina'
        console.log(window.location.search)
        window.open(url, '_blank')
    } else {
        allow = true;
    }
}

function CreateHandler() {
    if (login === true) {
        sectionlogin[0].classList.add('hidden');
        sectionlogin[1].classList.remove('hidden');
        login = false;
    } else {
        sectionlogin[1].classList.add('hidden');
        sectionlogin[0].classList.remove('hidden');
        login = true;
    }
}


///------------------------event
smsbot.addEventListener('click', numberphHandler);
linkcreate[0].addEventListener('click', CreateHandler);
linkcreate[1].addEventListener('click', CreateHandler);

smsinput.forEach((value) => {
    value.addEventListener('keyup', mouseHandler)
})