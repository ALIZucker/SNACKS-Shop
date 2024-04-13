export function showInput(strArr, rezultBox, inSearch) {
    rezultBox.innerHTML = ""
    for (let item of strArr) {
        rezultBox.innerHTML += ` <span class="spanSearch">${item}</span>`
        const spn = document.querySelectorAll('.spanSearch')
        spn.forEach((value) => {
            value.addEventListener('click', (event) => {
                inSearch.value = event.target.innerHTML;
                rezultBox.innerHTML = ""
            })
        })

    }
}
export function showAlart(){
    alert("Enter page Link")
}
export function LowColor(arrelem) {
    arrelem.forEach((elem)=>{
        elem.style.opacity="30%";
    })
}
export function scrollEvent(scrollY,titlesnack,titlesnack2,Try,Best) {
    if (scrollY >= 840) {
        $(document).ready(function () {
            $(titlesnack).css({"margin-top":"2vh","opacity":"100%"})
        })
    }
    if (scrollY >= 1300){
        $(titlesnack2).css({"margin-top":"2vh","opacity":"100%"})
    }

    if (scrollY >= 1900){
        $(Try).css({"opacity":"100%"})
    }
    if (scrollY >= 1900){
        $(Best).css({"opacity":"100%","transition-delay":"1.5s"})
    }
}
export function reviwcite(reviews,reviwindex,rewtext,rewtextname,reviwtext){

    reviews[reviwindex].classList.add("w-[60vw]","lg:w-[30vw]")
    console.log(reviews[reviwindex])
    rewtext.innerText=reviwtext[reviwindex].text;
    rewtextname.innerHTML=reviwtext[reviwindex].name;
}