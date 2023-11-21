let container = document.querySelector(".container");
const nav = document.querySelector("nav")
window.onscroll = (e) =>{
    if(window.scrollY>=100){
        nav.style.backgroundColor="white";
    }else{
        nav.style.backgroundColor = "transparent";
    }
    // console.log(window.scrollY)
} 