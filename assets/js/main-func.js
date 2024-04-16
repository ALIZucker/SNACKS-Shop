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

export function showAlart() {
    alert("Enter page Link")
}

export function LowColor(arrelem) {
    arrelem.forEach((elem) => {
        elem.style.opacity = "30%";
    })
}

export function scrollEvent(scrollY, titlesnack, titlesnack2, Try, Best) {
    if (scrollY >= 840) {
        $(document).ready(function () {
            $(titlesnack).css({"margin-top": "2vh", "opacity": "100%"})
        })
    }
    if (scrollY >= 1300) {
        $(titlesnack2).css({"margin-top": "2vh", "opacity": "100%"})
    }

    if (scrollY >= 1900) {
        $(Try).css({"opacity": "100%"})
    }
    if (scrollY >= 1900) {
        $(Best).css({"opacity": "100%", "transition-delay": "1.5s"})
    }
}

export function reviwcite(reviews, reviwindex, rewtext, rewtextname, reviwtext) {

    reviews[reviwindex].classList.add("w-[60vw]", "lg:w-[30vw]")
    console.log(reviews[reviwindex])
    rewtext.innerText = reviwtext[reviwindex].text;
    rewtextname.innerHTML = reviwtext[reviwindex].name;
}

export function postshow(prod, sec) {
    sec.innerHTML = "";
    for (let item of prod) {
        const postbox = document.createElement('article');
        const divImage = document.createElement('div');
        const imgCover = document.createElement('img');
        const imgMain = document.createElement('img');
        const h3post = document.createElement('h3');
        const buttonpost = document.createElement('button');

        postbox.setAttribute('class', 'box-post');
        h3post.setAttribute('class', 'lg:text-lg text-title-big1 GroteskCompressed h-[10vh] mt-[3vh] text-semiDarkPer font-bold ');
        divImage.setAttribute('class', 'rounded-2xl relative');
        buttonpost.setAttribute('class', 'btn-snack border-violet-900 text-lightPer Grotesk font-bold');
        $(imgMain).css({
            'width': '100%',

        })
        imgCover.style.position = "absolute";
        imgCover.style.top = "0";
        imgCover.style.opacity = '0';
        imgCover.style.width = '100%'
        imgCover.style.transition = 'opacity 0.6s ease-in-out'
        imgCover.onmouseover = function () {
            imgCover.style.opacity = '100';
        }
        imgCover.onmouseleave = function () {
            imgCover.style.opacity = '0';
        }
        imgMain.src = item.srcImg;
        imgCover.src = item.coverImg
        h3post.innerHTML = item.titr
        buttonpost.innerHTML = "View product"
        divImage.append(imgMain, imgCover)
        postbox.append(divImage, h3post, buttonpost)
        sec.append(postbox)
    }
}
