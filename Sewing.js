
const burger = document.getElementById('burger');
const TOSbutton = document.getElementById('footerTOSbutton');

burger.addEventListener('click', (e) => {
   
    hamburgerAnimation();
    
});

TOSbutton.addEventListener('click', (e) => {
   
    tOsExpand();
    
});



//this toggles the hamburger menu❤💚💚💛

function hamburgerAnimation() {

    document.getElementById('hamBAR1').classList.toggle("burger1Active");
    document.getElementById('hamBAR2').classList.toggle("burger2Active");
    document.getElementById('hamBAR3').classList.toggle("burger3Active");

    //grey background div
    const greyBG = document.getElementById('mobile-grey-hamburger-clickToClose');

    

    if (document.getElementById('mobileNavSlider').classList.value === "navHide") {

        document.getElementById('mobileNavSlider').classList.remove("navHide");
        greyBG.classList.remove("navHide");
    }
    else if (document.getElementById('mobileNavSlider').classList.value  !== "navHide"){

        document.getElementById('mobileNavSlider').classList.add("navHide");
        greyBG.classList.add("navHide");
    }



};

//click the grey bg on mobile then it closes the mobile nav.
function clickTheGreyBackgroundToCloseMobile() {
    hamburgerAnimation();
};

// This is the TOS button for mobile footer

function tOsExpand() {
    const footerGrid = document.getElementById('footer-grid');
    const tosBANNER = document.getElementById('TOS-banner');
    const lineHeightVar = document.getElementById('footer-item');

    if (footerGrid.classList.value === "default-Grid") {
        // changing the text of the bottom button
        document.getElementById("footerTOSbutton").innerHTML = "Click Here For Terms of Service"
        // changing the grid layout
        footerGrid.classList.remove("default-Grid");
        footerGrid.classList.add("TOS-expanded-grid");

        //hiding the tos menu
        tosBANNER.classList.add("TOShide");

        //changing the color of the button
        document.getElementById('footerTOSbutton').classList.add('footerButtonColorHidden');
        document.getElementById('footerTOSbutton').classList.remove('footerButtonColorActive');

      

      

    }
    else {
        // changing the text of the bottom button
        document.getElementById("footerTOSbutton").innerHTML = "Close"
        // changing the grid layout
        footerGrid.classList.remove("TOS-expanded-grid");
        footerGrid.classList.add("default-Grid");

        //hiding the tos menu
        tosBANNER.classList.remove("TOShide");

        //changing the color of the button
        document.getElementById('footerTOSbutton').classList.add('footerButtonColorActive');
        document.getElementById('footerTOSbutton').classList.add('footerButtonColorHidden');

        //Changing the line height to center the text

            document.getElementById('footer-gallery').style.lineHeight = '3.5';
            document.getElementById('footer-services').style.lineHeight = '3.5';
            document.getElementById('footer-aboutUs').style.lineHeight = '3.5';
            document.getElementById('footer-contact').style.lineHeight = '3.5';
            // document.getElementById('').style.lineHeight = '5';
            // document.getElementById('').style.lineHeight = '5';
            // document.getElementById('').style.lineHeight = '5';
    };

};

//Contact Form JS

const ContactUs = document.getElementById("contact-form-Submit-button");

// ContactUs.addEventListener('click', (e) => {
   
//     sendEmail();
    
// });


function sendEmail() {

    let UserContactMessageContent = {

            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            userEmail: document.getElementById("userEmail").value,
            subject: document.getElementById("userSelectedSubject").value,
            userMessage: document.getElementById("userMessage").value,
            fullName: firstName + " " + lastName
    };

        function ContactUsSuccess() {
            document.getElementById("successMessageParent").classList.remove("closed-message-class");
        };

    emailjs.send('service_bm94n3m', 'template_grhu6vv', UserContactMessageContent).then(function(res){
    });

    ContactUsSuccess();

   
};


function updateOrderAmount() {

    //as a # not the element
    let price = parseInt(document.getElementById("price").innerHTML);
    let total = parseInt(document.getElementById("total").innerHTML);


    if (price < 250) {
        
        document.getElementById("price").innerHTML = ((document.getElementById("number-input").value) * 50);
        document.getElementById("total").innerHTML = ((document.getElementById("number-input").value) * 50);
        console.log(typeof ((document.getElementById("number-input").value) * 50))


    }
    else if (price <= 250 && price >= 100) {
        
         document.getElementById("price").innerHTML = ((document.getElementById("number-input").value) * 50);
         document.getElementById("total").innerHTML = ((document.getElementById("number-input").value) * 50);


    }
    else if (price > 250) {
        
        document.getElementById("price").innerHTML = 250;
        document.getElementById("total").innerHTML = 250;
        throw new Error("Please enter a quantity between 1 and 5. Thank you.")
        
    }
    else if (price < 50) {
        
        document.getElementById("price").innerHTML = 50;
        document.getElementById("total").innerHTML = 50;
        throw new Error("Please enter a quantity between 1 and 5. Thank you.")
        
    }
    
};

//pattern page
//pattern page
//pattern page
//pattern page

const block1 = document.querySelector(".patterns-grey-hover-effect-DIV1");
const image1 = document.getElementById("grid-item1");

console.log("it worked")
image1.addEventListener("mouseover" , () => {

});


// const image1 = document.querySelector(".new-services-grid-IMAGE-1");
// const image2 = document.querySelector(".new-services-grid-IMAGE-2");
// const image3 = document.querySelector(".new-services-grid-IMAGE-3");
// const image4 = document.querySelector(".new-services-grid-IMAGE-4");
// const image5 = document.querySelector(".new-services-grid-IMAGE-5");
// const image6 = document.querySelector(".new-services-grid-IMAGE-6");

// const block1 = document.querySelector(".first-position");
// const block2 = document.querySelector(".second-position");
// const block3 = document.querySelector(".third-position");

// const landingButtons = document.querySelector(".landing-buttons");
// const icon = document.querySelector(".icon");
// //for some reason I was unable to reuse the front page link animations on hover. I had to duplicate it for the two links
// const landingButtons2 = document.querySelector(".landing-button2");
// const icon2 = document.querySelector(".icon2");








// // 
// block1.addEventListener("mouseover" , () => {
//     image1.classList.add("add-opacity-just-for-first-block");
//     block1.classList.add("services-background-color-ADD");

// });
// block1.addEventListener("mouseleave" , () => {  
//     image1.classList.remove("add-opacity-just-for-first-block");
//     block1.classList.remove("services-background-color-ADD");
// });
// // 
// block2.addEventListener("mouseover" , () => {
//     image2.classList.add("add-opacity");
//     block2.classList.add("services-background-color-ADD");   
// });
// block2.addEventListener("mouseleave" , () => {  
//     image2.classList.remove("add-opacity");
//     block2.classList.remove("services-background-color-ADD"); 
// });
// // 
// block3.addEventListener("mouseover" , () => {
//     image3.classList.add("add-opacity");  
//     block3.classList.add("services-background-color-ADD");   
// });
// block3.addEventListener("mouseleave" , () => {  
//     image3.classList.remove("add-opacity"); 
//     block3.classList.remove("services-background-color-ADD"); 
// });