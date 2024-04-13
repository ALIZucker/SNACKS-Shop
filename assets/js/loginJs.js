import {showInput, showAlart, LowColor, scrollEvent, reviwcite} from "./main-func.js"

const boxsmsinput = document.querySelector('.box-smsinput');
const inputmobile = document.querySelector('.inputmobile');
const smsbot = document.querySelector('.smsbot');


//---------------------------func
function numberphHandler() {
    if (inputmobile.value.length > 0) {
        inputmobile.style.display="none";
        boxsmsinput.style.display="block";
        smsbot.innerHTML="Login"
    }else {alert("شماره وارد شود")}

}

///------------------------event
smsbot.addEventListener('click', numberphHandler);
console.log(smsbot)