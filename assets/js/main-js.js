import {showInput, showAlart} from "./main-func.js"

const inputSearch = document.getElementById('search')
const bannerText = document.getElementById('bannerText')
const rezultBox = document.querySelector('.bod')
const botbanner = document.querySelector('.botbanner')
const brandSize = document.querySelectorAll('.brand-size')

/////////////////---------------------------------list
const dic = ["snack", "OLIVES", "CHOCO PRETZELS", "delicious snacks", "PLANT POWERED", "ONION", "CHILD"];
const Banner_Text = ["“Olly's Pretzel Thins are a game-changer on the snacking scene. We're impretzed!”", "“Delicious healthier snacks. Full of flavour.”",
    "“Trust us, once opened, these snacks don't last long. Extremely moreish”", "“The cherry on top? Olly's donate a school meal to a child in need with every order.”"];

let setindex = 0;
///////////////-----------------------------------event
inputSearch.addEventListener('input', inputHandler)
botbanner.addEventListener('click', showAlart)


///////////---------------------------------------function
function inputHandler() {
    let rez = dic.filter((value) => {
        return value.toLowerCase().includes(inputSearch.value)
    })
    showInput(rez, rezultBox, inputSearch)
}

setInterval(BannnerHandler, 3000);

function BannnerHandler() {
    bannerText.innerText = Banner_Text[setindex]
    setindex += 1;
}