$(document).ready(function(){

//create namespace
let bannerPhotoSlideshow ={};

bannerPhotoSlideshow.rotatingImage= function(){

const imgArray = ["../Assets/slideshowImage1.jpg","../Assets/slideshowImage2.jpg","../Assets/slideshowImage3.jpg","../Assets/slideshowImage5.jpg" ]; 
const nextimage=0;


var nextBG = "url(" + imgArray[Math.floor(Math.random() * imgArray.length)] ;
$('.rotatingBannerImage').css("background", nextBG);              

setInterval(function(){
    nextBG = "url(" + imgArray[Math.floor(Math.random() * imgArray.length)] ;
    $('.rotatingBannerImage').fadeOut('fast', function() { 
        $(this).css("background", nextBG).fadeIn('fast'); })                   
}, 20000); 

}
bannerPhotoSlideshow.rotatingImage();

});