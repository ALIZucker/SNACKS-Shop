const back = document.querySelector(".back");
const next = document.querySelector(".next");
const imgbox = document.querySelector(".img-box");


////----------------------------------------attra
const urlImg = ["assets/img/Ollys-rebrand57697_1080x.webp", 'assets/img/shop2.jpg', 'assets/img/shop3.jpg', 'assets/img/shop4.jpg', 'assets/img/shop5.png']
let countImg = 1;

/////////////////---------------------------func
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

////////////////-----------------------------------------event
back.addEventListener('click', backHandler);
next.addEventListener('click', nextHandler);