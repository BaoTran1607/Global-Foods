const activeLangEl = document.querySelector(".lang-active");
const langListEl = document.querySelector(".lang-list");



function displayLanguage(){
    langListEl.classList.toggle("d-none")
}

activeLangEl.addEventListener("click", displayLanguage, false)