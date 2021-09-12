$(document).ready(function(){


//Google Map API 

    // Create the script tag, set the appropriate attributes
    const script = document.createElement('script');  
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyABMNO4WBePgQWjvYvF4U9DFgiHjmKv1Jc&callback=initMap';
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = function() {
        //location want to show
        const location = {lat: 43.65639296941359, lng:-79.45356737504656};
        //map centered at that location
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location
        });
        //marker positioned at location
        const marker = new google.maps.Marker ({
            position: location,
            map: map
        });
    // JS API is loaded and available
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);







//Instagram Feed API

$.ajax({
    url: 'http://proxy.hackeryou.com',
	dataType: 'json',
	type: 'GET',
	data: {
        reqUrl:'https://api.instagram.com/v1/users/49485932360/media/recent',
        access_token: "IGQVJWOS1weU1OekxUWXlPOVJOSGw2TDJRTHh4dFRad3BNV2Q2Y0hRTlI4WjFCMTE4YzdnU2VRRm9QaTNFNFh3SGJtck9uREsxOV9UZA1ExVFhwRHl5ZAE1uR1F1VzM4ZAzRqdDJFcFZAEbF9tb01zcXJhaAZDZD", 
        params: {
            method:"GET",
            dataType:"json"
        }
    }
}).then((params)=>{
console.log(params);

});


// success: function(data){
//     console.log(data);
//    for( x in data.data ){
//        $('ul.instaImageContainer').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
//    }
// }

});