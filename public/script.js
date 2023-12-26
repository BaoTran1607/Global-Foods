const activeLangEl = document.querySelectorAll(".lang-active");
const langListEl = document.querySelectorAll(".lang-list");



function displayLanguage(){
    for(let item of langListEl){
        item.classList.toggle("d-none");
    }
}

for(let item of activeLangEl){
    item.addEventListener("click", displayLanguage, false)
}