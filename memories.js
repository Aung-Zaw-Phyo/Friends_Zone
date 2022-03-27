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


const showCommentTag = document.querySelector(".showComment");
const nameTag = document.querySelector(".name");
const commentTag = document.querySelector(".comment");
const postBtnTag = document.querySelector(".postBtn");

const profile = {
    aung: "friends/aung/profile.jpg",
    myo: "friends/myo/haha.jpg",
    hein: "friends/hein/tt2.jpg",
    su: "friends/su/haha.jpg",
    ei: "friends/ei/tt2.jpg",
    thu: "friends/thu/profile.jpg",
    phue: "friends/phue/tt5.jpg",
    mya: "friends/mya/profile.jpg",
    thazin: "friends/thazin/tt5.gif",
    kyawt: "friends/kyawt/profile.jpg",
}

let nameValue;
let commentValue;
postBtnTag.addEventListener("click", ()=>{
    nameValue = nameTag.value;
    commentValue = commentTag.value;
    console.log(commentValue.length)
    const isTrue = nameValue==="Aung Zaw Phyo" || nameValue==="Myo Pa Pa Lwin" || nameValue==="Khin Su Wai" ||
    nameValue==="Phue Myat Thwe" || nameValue==="Khin Kyawt Kyawt Hlaing" || nameValue==="Hein Htet Aung" ||
    nameValue==="Thiri Myint Myat Thu" || nameValue==="Ei Myat Noe Thu" || nameValue==="Mya Phue Ngon" || nameValue==="Mya Thazin Oo";

    if (isTrue) {

        if (nameValue==="Aung Zaw Phyo") {
            toShow(profile.aung)
        } else if (nameValue==="Myo Pa Pa Lwin") {
            toShow(profile.myo)
        } else if (nameValue==="Khin Su Wai") {
            toShow(profile.su)
        } else if (nameValue==="Phue Myat Thwe") {
            toShow(profile.phue)
        } else if (nameValue==="Khin Kyawt Kyawt Hlaing") {
            toShow(profile.kyawt)
        } else if (nameValue==="Hein Htet Aung") {
            toShow(profile.hein)
        } else if (nameValue==="Thiri Myint Myat Thu") {
            toShow(profile.thu)
        } else if (nameValue==="Ei Myat Noe Thu") {
            toShow(profile.ei)
        } else if (nameValue==="Mya Phue Ngon") {
            toShow(profile.mya)
        } else if (nameValue==="Mya Thazin Oo") {
            toShow(profile.thazin)
        }

    } else {
       alert("Please write your valid name!");
    }

});

let j = 0;

const toShow = (track) => {

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("text-light", "w-100", "mb-4")

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("mb-2", "fw-bold");
    const image = document.createElement("img");
    image.src=track;
    image.classList.add("rounded-circle", "me-2");
    image.style.width="28px";
    image.style.height="28px";
    const spanDiv = document.createElement("span");
    spanDiv.append(nameValue);
    nameDiv.append(image, spanDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("w-100")
    textDiv.append(commentValue);

    commentDiv.append(nameDiv, textDiv);
    showCommentTag.append(commentDiv);

    commentTag.value ="";

    const insertDiv = `
        <div class="text-light w-100 mb-4">
            <div class="mb-2 fw-bold">
                <img src="${track}" class="rounded-circle me-2" style="width: 28px;height: 28px;"/>
                <span>${nameValue}</span>
            </div>
            <div class="w-100">${commentValue}</div>
        </div>
    `;

    localStorage.setItem(j, insertDiv);

    j++
}

window.addEventListener("load", ()=>{
    for (j = 0; j < localStorage.length; j++) {
        const element = localStorage.getItem(j);

        showCommentTag.innerHTML += element;
    }
})

