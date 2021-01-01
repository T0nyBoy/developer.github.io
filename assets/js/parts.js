// REUSING MENU BAR AND FOOTER 
let head = document.querySelector("head");
let menu = document.querySelector(".menu");
let footer = document.querySelector(".footerContainer");
let contactFormHTML = document.querySelector(".contactForm");



// ---------------------------HEAD------------------------------------------------------------------------------------------
head.innerHTML = 
`
<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Services Web Site</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/assets/css/menu.css">
        <link rel="stylesheet" href="/assets/css/main.css">
        <link rel="stylesheet" href="/assets/css/footer.css">
        <link rel="stylesheet" href="/assets/css/modal.css">
        <link rel="stylesheet" href="/assets/css/contactForm.css">
        <link rel="stylesheet" href="/assets/css/blog.css">
        <link rel="stylesheet" href="/assets/css/portfolio.css">
        <link rel="stylesheet" href="/assets/css/about.css">
        <link rel="stylesheet" href="/assets/css/slider.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
        <link rel="icon" href="/assets/photos/rubik_logo_AR.png">
`
// ---------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------MENU BAR-------------------------------------------------------------------------
menu.innerHTML = 
`
<span class="forSmallScreenMenuIcon"></span>
            <div class="menuItem logo"><a href="/index.html"><img src="/assets/photos/rubik_logo_AR.png"></a></div>
            <div class="menuItem button"><a href="/index.html">Home</a></div>
            <div class="menuItem button"><a href="/blog.html">Blog</a></div>
            <div class="menuItem button"><a href="/portfolio.html">Portfolio</a></div>
            <div class="menuItem button"><a href="/about.html">About</a></div>
            <div class="menuItem button getInTouch"><a href="#">Get in touch</a></div>
`
// ---------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------FOOTER--------------------------------------------------------------------
footer.innerHTML = 
`
<div class="footerItem">
                <span><a href="https://github.com/T0nyBoy" target="_blank"><i class="fab fa-github-square"></i></a></span>
                <span><a href="https://twitter.com/T0ny_Boy" target="_blank"><i class="fab fa-twitter-square"></i></a></span>
                <span><a href="https://www.linkedin.com/in/antonisraftopoulos/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
            </div>
            <div class="footerItem getInTouch"><a href="#">Get in touch</a></div>
`
// ---------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------CONTACT FORM---------------------------------------------------------------------
contactFormHTML.innerHTML = 
`
<span class="closeContactForm"><i class="fas fa-window-close"></i></span>
            <div class="mainBox">
                <div class="leftColumn">
                    <div class="logoBox">
                        <img src="/assets/photos/rubik_logo_AR.png">
                    </div>
                    <div class="otherContactWays">
                        <span><a href="https://github.com/T0nyBoy" target="_blank"><i class="fab fa-github-square"></i></a></span>
                        <span><a href="https://twitter.com/T0ny_Boy" target="_blank"><i class="fab fa-twitter-square"></i></a></span>
                        <span><a href="https://www.linkedin.com/in/antonisraftopoulos/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
                    </div>
                </div>
    
    
                <div class="mainContactFrame">
                    <h1>Contact Us</h1>
                    <form id="contactForm" method="" data-email="from_email@example.com"
                    action="">
                      <p>
                        <input type="text" name="name" id="userName" placeholder="Your Name." required>
                      </p>
                      
                      <p>
                        <input type="email" name="email" id="email" placeholder="Your eMail." required>
                      </p>
                      <p>
                        <input type="text" name="phone" id="phone" placeholder="Phone Number (optional).">
                      </p>
                      <p class="full">
                        <textarea name="message" rows="5" id="message" placeholder="Your message..." maxlength="300" required></textarea>
                      </p>
    
                      <p class="robot">
                        <label>I Am A Robot!</label>
                        <input type="checkbox" id="imRobot" name="imRobot" value="iamRobot">
                      </p>
    
    
                      <p class="full">
    
                          <button type="submit" class="submitBtn">Submit</button>
    
                      </p>
                      </form>
    
                      <div class="forError" id="snackbar" hidden>Something went wrong. Please try again in a while.</div>
                        <div class="forSuccess" id="snackbar" hidden>Message Sent</div>
                          
                </div>
            </div>
`
// ---------------------------------------------------------------------------------------------------------------------------