$(document).ready(function(){

//create namespace
let buttonOperations ={};

buttonOperations.init = function(){

//Add to Cart Buttons on Hover

    $(".navDropdownOverlayPlant").hide();
    $(".navDropdownOverlayGifts").hide();
    $(".navDropdownOverlayLearn").hide();
    $(".navDropdownOverlayAbout").hide();

    $(".cardFlexContainer").on("mouseover", ".plantCardItem", function(){
        $(this).find("button.hoverAddToCart").css("display", "unset")
    });
    
    $(".cardFlexContainer").on("mouseout", ".plantCardItem", function(){
        $(this).find("button.hoverAddToCart").css("display", "none")
    });

    $(".clickableDropDownSize").hide();
    $(".clickableDropDownSunlight").hide();
    $(".clickableDropDownMaintenance").hide();

    $(".hiddenLinks").hide()

};



buttonOperations.init();

//NavBar Box Shadow on Scroll

buttonOperations.navbarBoxShadow=function(){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 50) {
            $("header").css("box-shadow", "rgba(99, 99, 99, 0.2) 0 4px 2px -2px")
        } else {
            $("header").css("box-shadow", "none")
        }
    })
}
buttonOperations.navbarBoxShadow();

//Mobile Navbar Hamburger Menu

buttonOperations.mobileNavHamburgerMenu=function(){
    $(".navbar2").on("click", "svg", function(){
        $(".hiddenLinks").toggle()
    })
}

buttonOperations.mobileNavHamburgerMenu();

//Button Connections

buttonOperations.buttonRedirections=function(){
    $("button.heroButton").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("img.heroButton").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("#beginnerFriendly").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("#beginnerPlantButton").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("#checkoutButton").on("click", function(){
        window.location.href = '../HTML/shoppingCart.html';
    })

    $("#shoppingCartPopOut").on("click","#checkoutButton", function(){
        console.log("hi")
        window.location.href = '../HTML/shoppingCart.html';
    })

}

buttonOperations.buttonRedirections();



//NavBar Dropdowns Desktop

buttonOperations.navDropdowns=function(button, hideDropdown1, hideDropdown2, hideDropdown3, dropdownShow){
    $(button).on("click", function(event){
        event.preventDefault();
        $(hideDropdown1).hide();
        $(hideDropdown2).hide();
        $(hideDropdown3).hide();
        $(dropdownShow).toggle();
    });
}
    buttonOperations.navDropdowns("#plantsLink", ".navDropdownOverlayLearn",".navDropdownOverlayAbout",".navDropdownOverlayGifts",".navDropdownOverlayPlant");
    buttonOperations.navDropdowns("#giftsLink", ".navDropdownOverlayLearn",".navDropdownOverlayAbout",".navDropdownOverlayPlant",".navDropdownOverlayGifts");
    buttonOperations.navDropdowns("#learnLink", ".navDropdownOverlayPlant",".navDropdownOverlayAbout",".navDropdownOverlayGifts",".navDropdownOverlayLearn");
    buttonOperations.navDropdowns("#aboutLink", ".navDropdownOverlayLearn",".navDropdownOverlayPlant",".navDropdownOverlayGifts",".navDropdownOverlayAbout");



});
