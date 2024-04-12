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