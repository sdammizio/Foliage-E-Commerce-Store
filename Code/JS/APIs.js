$(document).ready(function(){


//Google Map API (used on about.html pg)

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


//Pixabay API (used on plantinspiration.html pg)

const app= {};

      app.appendImages= (images)=>{
        
        images.hits.forEach((image)=>{
          const item = image.largeImageURL
          const altText= image.tags
          const htmlToAppend = `
            <div class="plantCard">
              <div class="imageContainer">
                <img class="plantImage" src="${item}" alt="${altText}">
              </div>
            </div>`;
          $(".photoContainer").append(htmlToAppend);
          console.log(images)
        });
      };

      app.getPhotos =(input)=>{
        $.ajax({
          url:"http://proxy.hackeryou.com",
          method:"GET",
          dataType:"json",
          data: {
            reqUrl:"https://pixabay.com/api/",
              params: {
                key:"23422245-e413e42831ec9f7a5c9a38ee7",
                method:"GET",
                dataType:"json",
                q:`${input}`,
                lang:"en",
                image_type:"photo",
                orientation:"horizontal",
                safesearch:true,
                page:1,
                per_page:24,
                min_height:4500
          }
        } 
        }).then(res =>{
          app.appendImages(res);
        });
      }

      app.getSelectValue=()=> {
        //add event listener when change dropdown option selected
        $("select").change(()=>{
          const selection = $("option:selected").val()
          $(".photoContainer").empty();
          app.getPhotos(selection);
        })
      }

      app.init =()=>{
        app.getPhotos("flower pot");
        app.getSelectValue();
      }


      $(function(){
        app.init();
      });

});