// ------------------------------------Main Screen Modals------------------------------------

// ------------------------------------Get the modal for service1------------------------------------
var service1Modal = document.getElementById("service1Modal");

// Get the button that opens the modal
var service1 = document.querySelector(".service1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if(service1){
  service1.onclick = function() {
    service1Modal.style.display = "block";
}
}


// When the user clicks on <span> (x), close the modal
if(span1){
  span1.onclick = function() {
    service1Modal.style.display = "none";
}
}


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == service1Modal) {
    service1Modal.style.display = "none";
  }
});


// ------------------------------------Get the modal for service2------------------------------------
var service2Modal = document.getElementById("service2Modal");

// Get the button that opens the modal
var service2 = document.querySelector(".service2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
if(service2){
  service2.onclick = function() {
    service2Modal.style.display = "block";
}
}


// When the user clicks on <span> (x), close the modal
if(span2){
  span2.onclick = function() {
    service2Modal.style.display = "none";
}
}


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == service2Modal) {
    service2Modal.style.display = "none";
  }
});


// ------------------------------------Get the modal for service3------------------------------------
var service3Modal = document.getElementById("service3Modal");

// Get the button that opens the modal
var service3 = document.querySelector(".service3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
if(service3){
  service3.onclick = function() {
    service3Modal.style.display = "block";
}
}


// When the user clicks on <span> (x), close the modal
if(span3){
  span3.onclick = function() {
    service3Modal.style.display = "none";
}
}


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == service3Modal) {
    service3Modal.style.display = "none";
  }
});


// ------------------------------------Contact Form Modal------------------------------------
var theContactForm = document.querySelector(".contactForm");

// Get the button that opens the modal
let getInTouch = document.querySelectorAll(".getInTouch");

// Get the <span> element that closes the modal
var closeContactForm = document.querySelector(".closeContactForm");

// When the user clicks the button, open the modal 
getInTouch.forEach((e)=>{
  e.addEventListener("click", ()=>{
    theContactForm.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
closeContactForm.onclick = function() {
    theContactForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == theContactForm) {
    theContactForm.style.display = "none";
  }
});