import {showInput, showAlart, LowColor, scrollEvent,reviwcite} from "./main-func.js"


const inputSearch = document.getElementById('search')
const bannerText = document.getElementById('bannerText')
const rezultBox = document.querySelector('.bod')
const botbanner = document.querySelector('.botbanner')
const titlesnack = document.querySelector('.titlesnack')
const titlesnack2 = document.querySelector('.titlesnack2')
const TRYSOME = document.querySelector('.TRY-SOME')
const BESTSELLERS = document.querySelector('.BESTSELLERS')
const rewtext = document.querySelector('.rewtext');
const rewtextname = document.querySelector('.rewtextname');
const brandSize = document.querySelectorAll('.brand-size');
const reviews = document.querySelectorAll('.reviews');
const btns = document.querySelectorAll('.btn');


/////////////////---------------------------------list
const dic = ["snack", "OLIVES", "CHOCO PRETZELS", "delicious snacks", "PLANT POWERED", "ONION", "CHILD"];
const Banner_Text = ["“Olly's Pretzel Thins are a game-changer on the snacking scene. We're impretzed!”", "“Delicious healthier snacks. Full of flavour.”",
    "“Trust us, once opened, these snacks don't last long. Extremely moreish”", "“The cherry on top? Olly's donate a school meal to a child in need with every order.”"];
const reviwtext = [{
    text: "\"Pretzels reinvented! Crunch crunch yum!\"",
    name: "Selena - Verified Customer"
}, {
    text: "\"Best thing I've ever put in my mouth. Fact.\"",
    name: "Emmanuel - Verified Customer"
}, {
    text: "“I had to fight my children for these.\"",
    name: "Shirley - Verified Customer"
}, {
    text: "\"Taste good, feels good, does good.\"",
    name: "Benji - Verified Customer"
}];

let setindex = 0;
let reviwindex = 0;
///////////////-----------------------------------event
inputSearch.addEventListener('input', inputHandler)
botbanner.addEventListener('click', showAlart)
document.addEventListener('scroll', scrollEventHandler)
btns[1].addEventListener('click', NextHandler);
btns[0].addEventListener('click', pervHandler);


///////////---------------------------------------function
function inputHandler() {
    let rez = dic.filter((value) => {
        return value.toLowerCase().includes(inputSearch.value)
    })
    showInput(rez, rezultBox, inputSearch)
}

setInterval(BannnerHandler, 3000 - 20);

function BannnerHandler() {
    bannerText.innerText = Banner_Text[setindex]
    LowColor(brandSize)
    brandSize[setindex].style.opacity = "100%";

    setindex += 1;
    if (setindex === Banner_Text.length) {
        console.log(setindex)
        setindex = 0
    }
}

function scrollEventHandler() {
    scrollEvent(window.scrollY, titlesnack, titlesnack2, TRYSOME, BESTSELLERS);
}

function NextHandler(event) {
    reviwindex += 1;
    reviews.forEach((value) => {
        try {value.classList.remove("w-[60vw]","lg:w-[30vw]") }catch (e) {}
    });
    if (reviwindex >= reviews.length) {
        reviwindex = 0
    }
    reviwcite(reviews,reviwindex,rewtext,rewtextname,reviwtext)
}

function pervHandler() {
    reviwindex -= 1;
    reviews.forEach((value) => {
        try {value.classList.remove("w-[60vw]","lg:w-[30vw]")}catch (e) {}
    });

    if (reviwindex < 0) {reviwindex = 3
    }
    console.log(reviwindex)
    reviwcite(reviews,reviwindex,rewtext,rewtextname,reviwtext)
}
