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

function tOsExpand() {
    const footerGrid = document.getElementById('footer-grid');

    if (footerGrid.classList.value === "default-Grid") {
        document.getElementById("footerTOSbutton").innerHTML = "Click me!"
        footerGrid.classList.remove("default-Grid");
        footerGrid.classList.add("TOS-expanded-grid");

        // changing the text of the bottom button

        

    }
    else {
        document.getElementById("footerTOSbutton").innerHTML = "Hello"
        footerGrid.classList.remove("TOS-expanded-grid");
        footerGrid.classList.add("default-Grid");

        
    };

};