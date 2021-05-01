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
    };

};