const burger = document.getElementById('burger');
const TOSbutton = document.getElementById('footerTOSbutton');

burger.addEventListener('click', (e) => {
   
    hamburgerAnimation();
    
});

TOSbutton.addEventListener('click', (e) => {
   
    tOsExpand();
    
});





function hamburgerAnimation() {

    document.getElementById('hamBAR1').classList.toggle("burger1Active");
    document.getElementById('hamBAR2').classList.toggle("burger2Active");
    document.getElementById('hamBAR3').classList.toggle("burger3Active");

    

    if (document.getElementById('mobileNavSlider').classList.value === "navHide") {

        document.getElementById('mobileNavSlider').classList.remove("navHide");
    }
    else if (document.getElementById('mobileNavSlider').classList.value  !== "navHide"){

        document.getElementById('mobileNavSlider').classList.add("navHide");
    }



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

//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION
//FORM VALIDATIION

const form = document.getElementById('form');
const username = document.getElementById('username');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const formItem = document.getElementsByClassName('grid-form-item-position');
const usernameCheckmark = document.getElementById('usernameCheckmark');
const emailCheckmark = document.getElementById('emailCheckmark');
const usernameErrorMessage = document.getElementById('usernameErrorMessage');
const emailErrorMessage =  document.getElementById('emailErrorMessage');

const password1message = document.getElementById('password1message');
const password2message = document.getElementById('password2message');

let usernameCheck = null;
let emailCheck = null;
let password1Check = null;
let password2Check = null;



form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    FormChecker();
});

function checkInputs() {
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

     const password1Value = password1.value.trim();
     const password2Value = password2.value.trim();
    

    
    // USERNAME
    if (usernameValue.length > 3){
        successForm(username, usernameCheckmark, usernameExclamation, usernameErrorMessage);
        usernameCheck = true;
        
    }
    else if (usernameValue.length <= 3){
        errorForm(username, "Your username must be longer than 3 letters", usernameErrorMessage, usernameExclamation, usernameCheckmark);
        usernameCheck = false;
    }
    
    // EMAIL

    if (emailValue === '') {
        errorForm(email, "Your email cannot be blank.", emailErrorMessage, emailExclamation, emailCheckmark);
        emailCheck = false;
    }
    else if (!validateEmail(emailValue)){
        errorForm(email, "Email is not valid", emailErrorMessage, emailExclamation, emailCheckmark);
        emailCheck = false;
    }
    else {
        successForm(email, emailCheckmark, emailExclamation, emailErrorMessage)
        emailCheck = true;
    };

    //PASSWORDS
    

    for (let i = 0; i < password1Value.length; i++) {
        let password1splitted = password1Value.split('');
        let password2splitted = password2Value.split('');

        
        if (password1splitted[i] !== password2splitted[i]) {
            errorForm(password1, "The passwords must match", password1message, password1Exclamation, password1Checkmark);
            errorForm(password2,"The passwords must match", password2message, password2Exclamation, password2Checkmark);

            password1Check = false;
            password2Check = false;

            
        }
        else if (password1splitted.length !== password2splitted.length) {
            errorForm(password1,"The passwords must match", password1message, password1Exclamation, password1Checkmark);
            errorForm(password2,"The passwords must match", password2message, password2Exclamation, password2Checkmark);

            password1Check = false;
            password2Check = false;
        }
        else {
            successForm(password1, password1Checkmark, password1Exclamation, password1message);
            successForm(password2, password2Checkmark, password2Exclamation, password2message);

            password1Check = true;
            password2Check = true;
        }
    };


// End of function
};


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function successForm(inputID, checkmarkParent, removeIcon, messageContainer) {
    //adds the green border 
    //then if the error class was added before this instant, the error class is removed
    //removeIcon is there to remove the prior exclamation mark

    inputID.classList.remove("grid-form-item-position-error");
    inputID.classList.add("grid-form-item-position-success");

    checkmarkParent.classList.remove("hidingToggle");
    removeIcon.classList.add("hidingToggle");

    (messageContainer).innerHTML = " ";
    
    
};



function errorForm(inputID, message, messageContainer, exclamationParent, removeIcon) {
    //adds the red border
    //removeIcon is there to remove the prior check mark
    inputID.classList.add("grid-form-item-position-error");
    inputID.classList.remove("grid-form-item-position-success");

    exclamationParent.classList.remove("hidingToggle");
    removeIcon.classList.add("hidingToggle");

    (messageContainer).textContent = message;

};




function showPassword(x, button) {

//this toggles the EYE
if (button.className === 'far fa-eye-slash togglePasswordCheckbox') {
    
    button.className = 'far fa-eye togglePasswordCheckbox';
}
else if (button.className === 'far fa-eye togglePasswordCheckbox') {

    button.className = 'far fa-eye-slash togglePasswordCheckbox';
}
else {
    button.className = 'far fa-eye-slash togglePasswordCheckbox'
}



//this shows the password text on the input element
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }

};

//This function will test to see if all the fields have been successful and will send the user to the completed page once the form has been filled out correctly

function FormChecker() {
    if (usernameCheck === true && emailCheck === true && password1Check === true && password2Check === true) {
        document.getElementById('successIsHidden').classList.remove("hideMe");
    }
};


// let usernameCheck = null;
// let emailCheck = null;
// let password1Check = null;
// let password2Check = null;
