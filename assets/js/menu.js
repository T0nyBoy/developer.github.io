let burger = document.querySelector(".forSmallScreenMenuIcon");
let menuItem = document.querySelectorAll(".menuItem");
let forSubmenu = document.querySelector(".forSubmenu");
let submenuContainer = document.querySelector(".submenuContainer");
let mainBody=document.querySelector(".mainBody");
let menuBar = document.querySelector(".menu");
let toTopButton = document.querySelector(".toTopButton");


//when in small screen tap burger to make menu appear
burger.addEventListener("click", ()=>{
    menuItem.forEach(item =>{
        item.classList.toggle("menuItemAppear");
    });
    burger.classList.toggle("forSmallScreenMenuIconOpen");
    // restarting the animation with addin/removing animation class and
    // reflowing the DOM
    burger.classList.remove("addAnimationIcons");
    //reflowing the DOM
    void burger.offsetWidth;
    burger.classList.add("addAnimationIcons");
});


//make submenu appear
// forSubmenu.addEventListener("click", ()=>{
//     submenuContainer.classList.toggle("subMenuContainerAppear");
// });
        

//Make scroll bar change class on scroll below 4.2em
//Adding to top functionality in the scroll 
window.onscroll = function (e) {
    if(window.scrollY>67){
        menuBar.classList.add("menuScrolled");
        toTopButton.classList.add("toTopButtonAppear");
        toTopButton.classList.remove("toTopButtonHide");
    } else if(window.scrollY<=67){
        menuBar.classList.remove("menuScrolled");
        toTopButton.classList.remove("toTopButtonAppear");
        toTopButton.classList.add("toTopButtonHide");
    };
};

toTopButton.addEventListener("click", ()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
