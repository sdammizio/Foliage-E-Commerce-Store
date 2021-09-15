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
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);



});