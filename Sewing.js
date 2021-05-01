const burger = document.getElementById('burger');




burger.addEventListener('click', (e) => {
   

    hamburgerAnimation();
    
});

function hamburgerAnimation() {

    document.getElementById('hamBAR1').classList.toggle("burger1Active");
    document.getElementById('hamBAR2').classList.toggle("burger2Active");
    document.getElementById('hamBAR3').classList.toggle("burger3Active");





    // if (document.getElementById('hamBAR1').classList !== "burger1Active"){

    //     document.getElementById('hamBAR1').classList.add("burger1Active");
    //     document.getElementById('hamBAR2').classList.add("burger2Active");
    //     document.getElementById('hamBAR3').classList.add("burger3Active");
    // }
    // else {
    //     document.getElementById('hamBAR1').classList.remove("burger1Active");
    //     document.getElementById('hamBAR2').classList.remove("burger2Active");
    //     document.getElementById('hamBAR3').classList.remove("burger3Active");
    // };



    // if (document.getElementById('hamBAR1').classList === "burger1Active"){

    //     document.getElementById('hamBAR1').classList.remove("burger1Active");
    //     document.getElementById('hamBAR2').classList.remove("burger2Active");
    //     document.getElementById('hamBAR3').classList.remove("burger3Active");
    // }
    // else {
    //     document.getElementById('hamBAR1').classList.add("burger1Active");
    //     document.getElementById('hamBAR2').classList.add("burger2Active");
    //     document.getElementById('hamBAR3').classList.add("burger3Active");
    // };

    document.getElementById('mobileNavSlider').classList.toggle("navHide");


};