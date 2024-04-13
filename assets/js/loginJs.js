import {showInput, showAlart, LowColor, scrollEvent, reviwcite} from "./main-func.js"

const boxsmsinput = document.querySelector('.box-smsinput');
const inputmobile = document.querySelector('.inputmobile');
const smsbot = document.querySelector('.smsbot');
let allow = false;

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
        let url='index.html';
        url=url+'?name=angelina'
        console.log(window.location.search)
        window.open(url, '_blank')
    } else {
        allow = true;
    }

}

///------------------------event
smsbot.addEventListener('click', numberphHandler);
