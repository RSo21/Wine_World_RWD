let menu = document.querySelector(".page-nav-list");
let toggle = document.querySelector("#menu-trigger");

let mobile = window.matchMedia("screen and (max-width: 1000px)");
let isMenuShow = false;



if (mobile.matches) {
    menu.style.display = "none";
} else {
    menu.style.display = "flex";

}


if (mobile.matches) {
    toggle.style.display = "initial";
} else {
    toggle.style.display = "none";

}


mobile.addListener(function (mobile) {
    if (mobile.matches) {
        menu.style.display = "none";
        toggle.style.display = "initial";
    } else {
        menu.style.display = "flex";
        toggle.style.display = "none";

    }
});


toggle.addEventListener("click", function () {
    isMenuShow = !isMenuShow;

    if (isMenuShow) {
        menu.style.display = "initial";
    } else {

        menu.style.display = "none";
    }
})




let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');
let sliders = document.querySelectorAll('.bannerSlider');

let index = 0;

sliders[0].classList.add('bannerSliderVisible');

leftArrow.addEventListener('click', function(){
    sliders[index].classList.toggle('bannerSliderVisible');
    if(index == sliders.length -1){
        index = 0;
    }else{
    index++;
    }
    sliders[index].classList.toggle('bannerSliderVisible');
        
})

rightArrow.addEventListener('click', function(){
    sliders[index].classList.toggle('bannerSliderVisible');
    if(index <= 0){
        index = sliders.length -1;
    }else{
    index--;
    }
    sliders[index].classList.toggle('bannerSliderVisible');
})
