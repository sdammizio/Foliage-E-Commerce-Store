$(document).ready(function(){

//create namespace
let newsletterOperations ={};
       
//Newsletter Pop-Up
newsletterOperations.newsletterPopUp= function(){
    if($(window).width() >= 1024) {
        setTimeout(function(){
            $("#popup-box").show()
          }, 10000);
    }
    
    $("#popup-box").on("click", "#newsletterModal", function(){
        $("#popup-box").hide();
    });

    $("#newsletterSubmitButton").on("click", function(){
    const userName = $('#firstName').val();

    $('#firstName').val(userName);

    $(".popupFlexContainer").empty();

        const updatedNewsletterHTML = `
       
            <div class="popupFlexContainer">
                <i id="newsletterModal"class="fas fa-times"></i>
                <div class="popup-box-content">
                    <h1 class="headingType3 darkGreen">Thank You ${userName}!</h1>
                    <p class="bodyType2 darkGreen">We look forward to sending you updates and news on a monthly basis. You can subscribe any time by clicking on the link at the bottom of each newsletter email.</p>
                </div>
            </div>
       
        `
        $(".popupFlexContainer").append(updatedNewsletterHTML)
    });
}
newsletterOperations.newsletterPopUp();

});