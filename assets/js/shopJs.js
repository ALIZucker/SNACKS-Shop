const back = document.querySelector(".back");
const next = document.querySelector(".next");
const imgbox = document.querySelector(".img-box");
const adadkam = document.querySelector(".adadkam");
const showtext = document.querySelector(".showtext");
const adadezafe = document.querySelector(".adadezafe");
const selectsize = document.querySelectorAll(".select-size");
const login = document.querySelectorAll('.login');
const selectnav = document.querySelector('.selectnav');
const mobileMenu = document.querySelector('.mobileMenu');

////----------------------------------------attra
const urlImg = ["assets/img/Ollys-rebrand57697_1080x.webp", 'assets/img/shop2.jpg', 'assets/img/shop3.jpg', 'assets/img/shop4.jpg', 'assets/img/shop5.png']
let countImg = 1;
let adadshow=1;
let closeicon = false;
/////////////////---------------------------func
(function () {

    if(window.location.search ==="?name=angelina"){
        console.log(window.location.search )
        login[0].classList.add('hidden');

        login[1].classList.remove('hidden')
    }
})()
selectsize.forEach((value)=>{

    value.addEventListener('click',(event)=>{
        selectsize.forEach((value1)=>{   value1.style='0 #46039a solid'})
        event.currentTarget.style.border='2px #46039a solid';

    })
})

function nextHandler() {
    imgbox.src = urlImg[countImg];
    if (countImg > 3) {
        countImg = 0;
    }
    countImg+=1;

}

function backHandler() {
    imgbox.src = urlImg[countImg];
    if (countImg <= 0) {
        countImg = 4;
    }
    countImg-=1;
}
function adadkamHandler() {
    adadshow+=1;
    showtext.innerHTML=adadshow;
}



function adadezafeHandler() {
    adadshow-=1;
    if (adadshow <= 0) {
        adadshow = 0;
    }
    showtext.innerHTML=adadshow;
}
function navigationHandler() {
    if (closeicon === false) {
        selectnav.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sizemenu">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`;
        mobileMenu.style.display = "block";
        closeicon = true;
    } else {
        selectnav.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 class="sizemenu  "><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`;
        closeicon = false;
        mobileMenu.style.display = "none";
    }
}
////////////////-----------------------------------------event
back.addEventListener('click', backHandler);
next.addEventListener('click', nextHandler);
adadkam.addEventListener('click',adadkamHandler)
adadezafe.addEventListener('click',adadezafeHandler);
selectnav.addEventListener('click', navigationHandler);
