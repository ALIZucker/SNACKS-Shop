import {showInput, showAlart, LowColor, scrollEvent, reviwcite} from "./main-func.js"

const boxsmsinput = document.querySelector('.box-smsinput');
const inputmobile = document.querySelector('.inputmobile');
const smsbot = document.querySelector('.smsbot');
const linkcreate = document.querySelectorAll('.linkcreate');
const sectionlogin = document.querySelectorAll('.section-login');

let allow = false;
let login = true;

//---------------------------func
function numberphHandler() {
    if (inputmobile.value.length > 0) {
        inputmobile.style.display = "none";
        boxsmsinput.style.display = "block";
        smsbot.innerHTML = "Login"
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
