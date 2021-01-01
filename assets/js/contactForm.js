const forSuccess = document.querySelector(".forSuccess");
const forError = document.querySelector(".forError");

//Check if they are robot
//if iamrobot checkbox selected then METHOD becomes EMPTY and form data will not submitted.
const checkbox = document.querySelector("#imRobot");
const submitBtn = document.querySelector(".submitBtn");
const contactForm = document.querySelector(".contactForm");

// ************************************************************
// For antispamming protection were used:
// METHOD in HTML file set to empty
// the method and the action URL will be set from the submit button ONLY as variable
// If the ROBOT checkbox is unchecked then method becomes POST and the action takes the URL of the web app server
// If checkbox is checked then method and action are empty.
// this will be passed to the fetched API.
// ************************************************************



// *****************************************
// SCRIPT TO TALK TO THE SERVER
// *****************************************
document.addEventListener('submit', e => {


  // ********************************* 
  // Antispam method
  if(checkbox.checked!==true){
    formMethod="POST";
    formAction="https://script.google.com/macros/s/AKfycbxZiO9RpgcltEwbFy9k89tA6PbbCp2PHofuZ1FpYK3awPwJBKq_/exec"
  } 
  else if(checkbox.checked===true){
    formMethod="POST";
    formAction="";
  } 
  // *********************************
   

  // Store reference to form to make later code easier to read
  const form = e.target;

  // Post data using the Fetch API
  fetch(formAction, {
    // forMethod variable is used for antispam purposes.
      method: formMethod,
      body: new FormData(form)
    })
       
    .then(res => res.text())

    .then(text => new DOMParser().parseFromString(text, 'text/html'))
    
    .then(doc => {
      let responseResult = doc.body.innerHTML;
      console.log(responseResult); //just to check the response.
      if(
        responseResult === "success"){
          forSuccess.hidden = false;
          form.reset();
          setTimeout(function() { forSuccess.hidden=true; }, 3000);
        } else {
          form.reset();
          forError.hidden = false;
          setTimeout(function() { forError.hidden=true; }, 3000);
        }       
    })

    .catch(err =>{
      forError.hidden = false;
          setTimeout(function() { forError.hidden=true; }, 3000);
    })
  

  // Prevent the default form submit
  e.preventDefault();

});

