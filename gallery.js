const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const hamburgerMenuTag = document.querySelector(".hamburgerMenu");

const downMenuTag = document.querySelector(".downMenu");

hamburgerMenuTag.addEventListener("click", () => {
    if (hamburgerMenuTag.classList.contains("clicked")) {
        line2Tag.classList.remove("remove");
        line1Tag.classList.remove("change1");
        line3Tag.classList.remove("change3");
        hamburgerMenuTag.classList.remove("clicked");
        downMenuTag.classList.remove("showMenu");
    } else {
        line2Tag.classList.add("remove");
        line1Tag.classList.add("change1");
        line3Tag.classList.add("change3");
        hamburgerMenuTag.classList.add("clicked");
        downMenuTag.classList.add("showMenu");
    }
});


const goTag=document.querySelector(".goTop");        
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset>100) {
        goTag.classList.remove("d-none")
    } else {
        goTag.classList.add("d-none")
    }
}); 

