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
    //close popup on click of "x" on window
    $("#popup-box").on("click", "#newsletterModal", function(){
        $("#popup-box").hide();
    });

    $("#popup-box").on("click", "#newsletterSubmitButton",function(){

    $(function(){
        $("input").prop('required',true);
    });

    if ($("input").prop('required')===false){
        $(".popupFlexContainer").empty();
        const errorNewsletterHTML = `
        <div class="popupFlexContainer">
        <i id="newsletterModal"class="fas fa-times"></i>
        <div class="popup-box-content">
            <h1 class="headingType3 darkGreen">Get Your Green Thumb!</h1>
            <p class="bodyType2 darkGreen">Receive shop updates, essential tips, new plant & product alerts, sales access and much more!</p>
            <form id="popup-form" action="">
                    <input type="hidden" name="list" value="key_list_etc" />
                    <input id="firstName" type="text" name="firstname" placeholder="First Name" aria-label="enter first name" />
                    <input type="hidden" name="list" value="key_list_etc" />
                    <input id="lastName"type="text" name="lastame" placeholder="Last Name" aria-label="enter last name" />
                    <input id="emailAddress" type="text" name="email" placeholder="Email Address" aria-label="enter email address"/>
                    <p class="formRequiredInputs">Please fill out all fields</p>
                    <button id="newsletterSubmitButton" class="standard coral doubleMarginTop darkGreen headingType4"type="button" name="subscribe">SIGN UP</button>
            </form>
        </div>
    </div>
       
        `
        $(".popupFlexContainer").append(errorNewsletterHTML)
    }else {
    //get first name entered in form
    const userName = $('#firstName').val();
    //change first letter of name to uppercase
    function capitalizeFirstLetter(userName) {
        return userName.charAt(0).toUpperCase() + userName.slice(1);
    }
    console.log(capitalizeFirstLetter(userName))
    const upperCaseUserName= capitalizeFirstLetter(userName);

    $('#firstName').val(upperCaseUserName);
        $(".popupFlexContainer").empty();

            const updatedNewsletterHTML = `
           
                <div class="popupFlexContainer">
                    <i id="newsletterModal"class="fas fa-times"></i>
                    <div class="popup-box-content">
                        <h1 class="headingType3 darkGreen">Thank You ${upperCaseUserName}!</h1>
                        <p class="bodyType2 darkGreen">We look forward to sending you updates and news on a monthly basis. You can unsubscribe any time by clicking on the link at the bottom of each newsletter email.</p>
                    </div>
                </div>
           
            `
            $(".popupFlexContainer").append(updatedNewsletterHTML)
    }
    });
}
newsletterOperations.newsletterPopUp();


//About Page Form Submit 

newsletterOperations.aboutFormResponse = function (){
    
    $(".storeInfoContainer").on("click", "#aboutFormSubmitButton", function(){

        $(function(){
            $("input").prop('required',true);
        });

        if ($("input").prop('required')===false){
            $(".storeInfoContainer").empty();
            
            const errorAboutForm = `
            <div class="storeInfoContainer">
                <div class="storeInfoLeftCol">
                            <h2 class="darkGreen headingType3">Drop Us a Line</h2>
                            <form id="aboutForm" action="">
                                <div class="aboutFormFields">
                                    <label class="darkGreen headingType4"for="name">YOUR NAME</label><br>
                                    <input type="text" id="name" name="name"><br>
                                    <label class="darkGreen headingType4"for="phoneNum">YOUR PHONE</label><br>
                                    <input type="number" id="phone" name="phone"><br>
                                    <label class="darkGreen headingType4"for="email">YOUR EMAIL</label><br>
                                    <input type="text" id="email" name="email"><br>
                                    <label class="darkGreen headingType4"for="comment">YOUR COMMENT</label><br>
                                    <textarea type="text" id="comment" rows = "5" cols = "60" name = "comment"></textarea>
                                </div>
                            </form>
                            <p class="formRequiredInputs">Please fill out all fields</p>
                            <button id="aboutFormSubmitButton" class="noMarginLeftRight marginTop standard offWhite green">SUBMIT</button>
                        </div>
                </div>
            `
            $(".storeInfoContainer").append(errorAboutForm);
        }else{
            $(".storeInfoContainer").empty();
    
        const updatedAboutForm=`
        <div class="storeInfoContainer">
            <div class="storeInfoLeftCol">
                    <h2 class="darkGreen headingType3">Drop Us a Line</h2>
                    <form id="aboutForm" action="">
                        <div class="aboutFormFields">
                            <label class="darkGreen headingType4"for="name">YOUR NAME</label><br>
                            <input type="text" id="name" name="name"><br>
                            <label class="darkGreen headingType4"for="phoneNum">YOUR PHONE</label><br>
                            <input type="number" id="phone" name="phone"><br>
                            <label class="darkGreen headingType4"for="email">YOUR EMAIL</label><br>
                            <input type="text" id="email" name="email"><br>
                            <label class="darkGreen headingType4"for="comment">YOUR COMMENT</label><br>
                            <textarea type="text" id="comment" rows = "5" cols = "60" name = "comment"></textarea>
                        </div>
                    </form>
                    <p class="darkGreen" "bodyType3"> Thank you for submitting your comments. We will get back to you soon!</p>
                    <button id="aboutFormSubmitButton" class="noMarginLeftRight marginTop standard offWhite green">SUBMIT</button>
                </div>
            </div>
        
        
        
        `
        $(".storeInfoContainer").append(updatedAboutForm);
    }
    });
}

newsletterOperations.aboutFormResponse();

});