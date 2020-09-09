const hamburger_menu = document.querySelector(".hamburger-menu");
const container1 = document.querySelector(".container1");

hamburger_menu.addEventListener("click" , () =>{
    container1.classList.toggle("active");
})


gsap.to(".fa-home",{x:300});



