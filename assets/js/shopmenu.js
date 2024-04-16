import {showInput, showAlart, LowColor, scrollEvent, reviwcite, postshow} from "./main-func.js"

const productshop = [{
    titr: "Oll-timate Pretzel Thins Bundle",
    degree: "2.7",
    model: "PRETZEL THINS",
    srcImg: "assets/img/o3.webp",
    coverImg: "assets/img/over1.webp"
}, {
    titr: "Multi-Seed Sesame Pretzel Thins",
    degree: "3.7",
    model: "PRETZEL THINS",
    srcImg: "assets/img/o2.webp",
    coverImg: "assets/img/over2.webp"
}, {
    titr: "Sweet Chilli Pretzel Thins",
    degree: "5",
    model: "PRETZEL THINS",
    srcImg: "assets/img/o1.webp",
    coverImg: "assets/img/over3.webp"
}, {
    titr: "Oll-timate Pretzel Thins Bundle",
    degree: "2.7",
    model: "PRETZEL THINS",

    srcImg: "assets/img/o3.webp",
    coverImg: "assets/img/over1.webp"
}, {
    titr: "Multi-Seed Sesame Pretzel Thins",
    degree: "5",
    model: "OLIVES",
    srcImg: "assets/img/Olives-Chilli_450x.png",
    coverImg: "assets/img/Olives-Chilli-Case_450x.jpg"
}, {
    titr: "Sweet Chilli Pretzel Thins",
    degree: "3.7",
    model: "OLIVES",
    srcImg: "assets/img/Olives-Garlic_450x.png",
    coverImg: "assets/img/Olives-Garlic-Case_450x.jpg"
}, {
    titr: "Oll-timate Pretzel Thins Bundle",
    degree: "1.7",
    model: "OLIVES",

    srcImg: "assets/img/Olives-Lemon_450x.png",
    coverImg: "assets/img/Olives-Lemon-Case_450x.jpg"
}, {
    titr: "Sweet Chilli Pretzel Thins",
    degree: "2.7",
    model: "CHOCO PRETZELS",
    srcImg: "assets/img/DarkChoc_360x.png",
    coverImg: "assets/img/DarkChoc-Case_360x.jpg"
}, {
    titr: "Oll-timate Pretzel Thins Bundle",
    degree: "5",
    model: "CHOCO PRETZELS",

    srcImg: "assets/img/MilkChoc_360x.png",
    coverImg: "assets/img/Olives-Lemon-Case_450x.jpg"
}, {
    titr: "Sweet Chilli Pretzel Thins",
    degree: "1.7",
    model: "BUNDLES",
    srcImg: "assets/img/Hat_450x.jpg",
    coverImg: "assets/img/Ollys-Hat_450xx.jpg"
}, {
    titr: "Oll-timate Pretzel Thins Bundle",
    degree: "5",
    model: "BUNDLES",
    srcImg: "assets/img/Socks_450x.jpg",
    coverImg: "assets/img/OllySocks_450x.jpg"
}];

function selectHandler(event) {

    let arr = productshop.filter((value) => {
        return value.model === event.target.innerHTML
    })
    if (event.target.innerHTML === "ALL") {
        postshow(productshop, section)
    } else {
        postshow(arr, section)
    }


}

function selectHandler2() {


    let arr = productshop.filter((value) => {
        return value.model === event.target.value
    })
    if (event.target.value === "ALL") {
        postshow(productshop, section)
    } else {
        postshow(arr, section)
    }
}

const section = document.querySelector('.box-shop');
const selection = document.querySelector('.selection');
const lgselection = document.querySelector('.Lgselection');


lgselection.addEventListener('click', selectHandler)


selection.addEventListener('change', selectHandler2)
postshow(productshop, section)