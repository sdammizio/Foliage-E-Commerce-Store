//Plant Array
const plants = [
    {name: "Snake Plant",className: "snakePlant", size: "MEDIUM",sunlight: "low",maintenance: "low",petFriendly: true,airPurifying: false,price:16, imgSRC:"../Images/Plant images:Beginner/medium-plant-snake-white-pot.webp", date: 30},

    {name: "ZZ Plant",className:"zzPlant",size:"LARGE",sunlight: "medium",maintenance: "medium",petFriendly: true,airPurifying: false,price:26, imgSRC:"../Images/Plant images:Beginner/large-plant-zz-white-pot_2_1.webp", date: 25},

    {name: "Dragon Tree",className:"dragonTree",size: "LARGE", sunlight: "high",maintenance: "medium",petFriendly: false,airPurifying: false,price:20, imgSRC:"../Images/Plant images:Beginner/medium-plant-dragon-tree-black-pot_1080x.jpeg", date: 10},
    
    {name: "Sago Palm",className:"sagoPalm",size: "SMALL",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: true,price:10, imgSRC:"../Images/Plant images:Beginner/medium-plant-sago-palm-seafoam-pot_1080x.jpeg", date: 12},

    {name: "Devil's Ivy",className:"devilsIvy",size: "LARGE",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: true,price:30, imgSRC:"../Images/Plant images:Beginner/medium-plant-devils-ivy-seafoam-pot_39bb26a2-cfa4-4a5d-aa6f-608cc41d2956_1080x.jpeg", date: 3},
    
    {name: "Blue Star Fern",className:"blueStarFern",size: "MEDIUM",sunlight: "low",maintenance: "medium",petFriendly: false,airPurifying: false,price:15, imgSRC:"../Images/Plant images:Beginner/large-plant-blue-star-fern-seafoam-pot_1080x.jpeg", date: 9},

    {name: "Jade Succulent",className:"jadeSucculent",size: "LARGE",sunlight: "low",maintenance: "high",petFriendly: true,airPurifying: true,price:25, imgSRC:"../Images/Plant images:Beginner/small-succulent-jade-periwinkle-pot_1080x.jpeg", date: 21},

    {name: "Pilea",className:"pilea",size: "SMALL",sunlight: "medium",maintenance: "high",petFriendly: false,airPurifying: false,price:15, imgSRC:"../Images/Plant images:Beginner/small-plant-pilea-rosewood-pot_1080x.jpeg", date: 30},

    {name: "Rubber Plant",className:"rubberPlant",size: "MEDIUM",sunlight: "low",maintenance: "high",petFriendly: true,airPurifying: true,price:25, imgSRC:"../Images/Plant images:Beginner/medium-plant-ficus-black-pot_1080x.jpeg",date: 15},

    {name: "Watermellon Pepperomelia",className:"watermellonPeperomelia",size: "MEDIUM",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: false,price:22, imgSRC:"../Images/Plant images:Beginner/small-plant-watermelon-peperomia-rosewood-pot_1080x.jpeg", date: 2},
]


$(document).ready(function(){

//create namespace
let plantFilterApp ={};


//Add to Cart Buttons on Hover

    plantFilterApp.init = function(){
        $(".cardFlexContainer").on("mouseover", ".plantCardItem", function(){
            $(this).find("button.hoverAddToCart").css("display", "unset")
        });
        
        $(".cardFlexContainer").on("mouseout", ".plantCardItem", function(){
            $(this).find("button.hoverAddToCart").css("display", "none")
        });

        $(".clickableDropDownSize").hide();
        $(".clickableDropDownSunlight").hide();
        $(".clickableDropDownMaintenance").hide();

        $('.sortBox').on('click', function(){ 
            $(".dropdown-content").toggle(); 
        });

        $("#shoppingCartPopOut").hide();

        $(".hiddenLinks").hide()

        $(".navDropdownOverlayPlant").hide();
        $(".navDropdownOverlayGifts").hide();
        $(".navDropdownOverlayLearn").hide();
        $(".navDropdownOverlayAbout").hide();

    //Google Map API 

    // function initMap(){
    //     //location want to show
    //     const location = {lat: 43.65639296941359, lng:-79.45356737504656};
    //     //map centered at that location
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 15,
    //         center: location
    //     });
    //     //marker positioned at location
    //     const marker = new google.maps.Marker ({
    //         position: location,
    //         map: map
    //     });
    // }
    // initMap();

//Instagram Feed API


// $.ajax({
//     url: 'http://proxy.hackeryou.com',
// 	dataType: 'json',
// 	type: 'GET',
// 	data: {
//         reqUrl:'https://api.instagram.com/v1/users/49485932360/media/recent',
//         access_token: "IGQVJWOS1weU1OekxUWXlPOVJOSGw2TDJRTHh4dFRad3BNV2Q2Y0hRTlI4WjFCMTE4YzdnU2VRRm9QaTNFNFh3SGJtck9uREsxOV9UZA1ExVFhwRHl5ZAE1uR1F1VzM4ZAzRqdDJFcFZAEbF9tb01zcXJhaAZDZD", 
//         count: 4,
//         params: {
//             method:"GET",
//             dataType:"json"
//         }
//     }
// }).then(function(){
//     console.log("it worked");
// });

// Instagram Embedded Widget
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/6ddcd501-c312-48cc-87a3-7d11b6af664b.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();



// success: function(data){
//     console.log(data);
//    for( x in data.data ){
//        $('ul.instaImageContainer').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
//    }
// }

}

plantFilterApp.init();

//Filter Dropdowns

    plantFilterApp.filterDropdownMethod=function(button, filterDropdown,arrow){
        $(button).on ("click", function(){
            $(filterDropdown).toggle();
            $(arrow).toggle("arrowRotation");
        });
    }
        plantFilterApp.filterDropdownMethod('li.sizeButton',".clickableDropDownSize","#sizeArrow");
        plantFilterApp.filterDropdownMethod('li.sunButton',".clickableDropDownSunlight","#sunArrow");
        plantFilterApp.filterDropdownMethod('li.maintButton',".clickableDropDownMaintenance","#mainArrow");



// Sort Buttons
    let sortOption;


    //create a method to generate plant cards based on sorting option plugged in
    plantFilterApp.sortingMethod = function(){
        $(".cardFlexContainer").empty();
        
        sortOption.forEach(function(plant){
        const html=`
            <div class="plantCardItem ${plant.className}">
                                <img class="plantCardImg" src="${plant.imgSRC}" alt="Snake Plant">
                                <div class="cardText">
                                    <h4 class="plantName headingType6 darkGreen noMargin">${plant.name}</h4>
                                    <p class="plantPrice headingType6 darkGreen noMargin">$${plant.price}</p>
                                </div>
                                <p class="plantSize headingType5 darkGreenReducedOp">${plant.size}</p>
                                <button class="hoverAddToCart headingType4 darkGreen ${plant.className}">ADD TO CART</button>
                            </div>`
            //display container with plant cards that are from the sorted array
            $(".cardFlexContainer").append(html)
        });
    }
 

    //create a method to update html of dropdown based on option selected

    plantFilterApp.dropdownHTMLMethod = function(dropDownTop, dropDown1, dropDown2, dropDown3, dropDown4, class1, class2, class3, class4){
        $(".sortBox").empty();
            const htmlDropdown = `
                
                        <div class="dropdown">
                        <div class="dropbtn">
                            <p class="headingType4 darkGrey marginx2 ">${dropDownTop}</p>
                            <img class= "arrowNav" src="../icons/arrow_down_icon 2.10.13 PM.png" alt="dropdown arrow">
                        </div> 
                        <!--Hidden Dropdown Content-->
                        <div class="dropdown-content">
                            <div class="${class1}">
                                <p class="headingType4 darkGrey marginx2 ">${dropDown1}</p>
                            </div>
                            <div class="${class2}">
                                <p class="headingType4 darkGrey marginx2 ">${dropDown2}</p>
                            </div>
                            <div class="${class3}">
                                <p class="headingType4 darkGrey marginx2 ">${dropDown3}</p>
                            </div>
                            <div class="${class4}">
                                <p class="headingType4 darkGrey marginx2 ">${dropDown4}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            $(".sortBox").append (htmlDropdown)
        };


      
    //define the functions for each of the sorting options and call the above methods

    // plantFilterApp.finalSortingFunctions=function(){
        
        // $('.sortBox').on('click','.sortZA',function(){

        //     sortOption= plants.sort(function(a,b){
        //         if (a.name<b.name) {
        //             return 1
        //         } else {
        //             return -1
        //         }
        //     });
        //     console.log(sortOption);
        //     plantFilterApp.sortingMethod();
        //     plantFilterApp.dropdownHTMLMethod("SORT BY Z-A", "SORT BY A-Z", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortNewest","sortLowHigh","sortHighLow");
        // }),
        

        // $('.sortBox').on('click','.sortAZ',function(){
        //     sortOption= plants.sort(function(a,b){
        //         if (a.name>b.name) {
        //             return 1
        //         } else {
        //             return -1
        //         }
        //     });
        //     console.log(sortOption);
        //     plantFilterApp.sortingMethod();
        //     plantFilterApp.dropdownHTMLMethod("SORT BY A-Z", "SORT BY Z-A", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortZA", "sortNewest","sortLowHigh","sortHighLow");
        //     $(".dropdown-content").hide();
        // }),

        // $('.sortBox').on('click','.sortNewest',function(){
        //     sortOption= plants.sort(function(a,b){
        //         if (a.date>b.date) {
        //             return 1
        //         } else {
        //             return -1
        //         }
        //     });
        //     console.log(sortOption);
        //     plantFilterApp.sortingMethod();
        //     plantFilterApp.dropdownHTMLMethod("SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortZA","sortLowHigh", "sortHighLow");
        //     $(".dropdown-content").hide();
        // }),

        // $('.sortBox').on('click','.sortLowHigh',function(){
        //     sortOption= plants.sort(function(a,b){
        //         if (a.price>b.price) {
        //             return 1
        //         } else {
        //             return -1
        //         }
        //     });
        //     console.log(sortOption);
        //     plantFilterApp.sortingMethod();
        //     plantFilterApp.dropdownHTMLMethod("SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE HIGH-LOW","sortNewest", "sortAZ","sortZA","sortHighLow");
        //     $(".dropdown-content").hide();
        // }),

        // $('.sortBox').on('click','.sortHighLow',function(){
        //     sortOption= plants.sort(function(a,b){
        //         if (a.price<b.price) {
        //             return 1
        //         } else {
        //             return -1
        //         }
        //     });
        //     console.log(sortOption);
        //     plantFilterApp.sortingMethod();
        //     plantFilterApp.dropdownHTMLMethod("SORT BY PRICE HIGH-LOW","SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A","sortNewest", "sortLowHigh","sortNewest","sortAZ","sortZA");  
        //     $(".dropdown-content").hide();
        // })
    // }

    // plantFilterApp.finalSortingFunctions();

        
//Filters


    //every time click button on filter, adds that filter into this array
    plantFilterApp.filters =[]

    //pass argument of the array of current filters
    plantFilterApp.filterMethod = function(filters){
        //empty the container holding all the plant cards
        $(".cardFlexContainer").empty();
        
       //create variable for how plants array will be filtered
        let filterPlants
       //if filters array is empty, give back all plants
       if (filters===[]) {
            filterPlants=plants
        } else {
            //apply this filter function for every filter object in the filter array (use filterPlants as base for filtering instead  of plants)
            filterPlants=plants
            filters.forEach(function(filter){
                filterPlants=filterPlants.filter((plant)=>{
                    //obtain the property in property:value from object, will give an array with one property name (eg.size)
                    const prop = Object.keys(filter)[0]
                    //when the plant array prop = the prop from the filter array (eg. size===size)
                    return plant[prop]===filter[prop]
                })
            })
        }
        //for each of the plant array items that has been filtered, do this:
        filterPlants.forEach(function(plant){
        const html=`
        <div class="plantCardItem ${plant.className}">
                            <img class="plantCardImg" src="${plant.imgSRC}" alt="Snake Plant">
                            <div class="cardText">
                                <h4 class="plantName headingType6 darkGreen noMargin">${plant.name}</h4>
                                <p class="plantPrice headingType6 darkGreen noMargin">$${plant.price}</p>
                            </div>
                            <p class="plantSize headingType5 darkGreenReducedOp">${plant.size}</p>
                            <button class="hoverAddToCart headingType4 darkGreen ${plant.className}">ADD TO CART</button>
                        </div>`
        //display container with plant cards that are from the filtered array
        $(".cardFlexContainer").append(html);
        });

        //sort box options 

        $('.sortBox').on('click','.sortZA',function(){
            if (filters === []){
                console.log("sorted original plants array")
                sortOption= plants.sort(function(a,b){
                    if (a.name<b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
                
            } else {
                sortOption= filterPlants.sort(function(a,b){
                    if (a.name<b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
                console.log("sorted with filtered plants")
            }
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY Z-A", "SORT BY A-Z", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortNewest","sortLowHigh","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortAZ',function(){
            if (filters === []){
                console.log("sorted original plants array")
                sortOption= plants.sort(function(a,b){
                    if (a.name>b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
                
            } else {
                sortOption= filterPlants.sort(function(a,b){
                    if (a.name>b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
                console.log("sorted with filtered plants")
            }
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY A-Z", "SORT BY Z-A", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortZA", "sortNewest","sortLowHigh","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortNewest',function(){
            if (filters === []){
                console.log("sorted original plants array")
                sortOption= plants.sort(function(a,b){
                    if (a.date>b.date) {
                        return 1
                    } else {
                        return -1
                    }
                });
                
            } else {
                sortOption= plants.sort(function(a,b){
                    if (a.date>b.date) {
                        return 1
                    } else {
                        return -1
                    }
                });
                console.log("sorted with filtered plants")
            }
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortZA","sortLowHigh", "sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortLowHigh',function(){
            if (filters === []){
                console.log("sorted original plants array")
                sortOption= plants.sort(function(a,b){
                    if (a.price>b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
                
            } else {
                sortOption= plants.sort(function(a,b){
                    if (a.price>b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
                console.log("sorted with filtered plants")
            }
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE HIGH-LOW","sortNewest", "sortAZ","sortZA","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortHighLow',function(){
            if (filters === []){
                console.log("sorted original plants array")
                sortOption= plants.sort(function(a,b){
                    if (a.price<b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
                
            } else {
                sortOption= plants.sort(function(a,b){
                    if (a.price<b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
                console.log("sorted with filtered plants")
            }
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE HIGH-LOW","SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A","sortNewest", "sortLowHigh","sortNewest","sortAZ","sortZA");  
            $(".dropdown-content").hide();
        })
    }

   


    //create functions for each of the filtering options and call above method to generate html accordingly

    plantFilterApp.finalFilterFunctions=function(){

    $("#clearFiltersButton").on("click", function(){
        location.reload();
    })

    $('.dropdownOption_SmallSize').on("click", function(){
        //create activeFilter class (an empty class not visible on page only used to indicate whether filter active)
        
        const activeFilter = $(".dropdownOption_SmallSize").hasClass("activeFilter");
        // if activeFilter currently on, want it to switch to all plants when button clicked and remove the active filter. 
        if (activeFilter === true) {
            //removing size:small from filters array
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.size !== "SMALL"
            })
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_SmallSize").removeClass("activeFilter");
            //remove active button background colour
            $(".dropdownOption_SmallSize").css("background-color", "transparent"); 
        
        } else {
            // adding this filter object to the filters array
            plantFilterApp.filters.push({size:"SMALL"});
            //remove button colour on prev. buttons pushed in size category
            $(".dropdownOption_MedSize").css("background-color", "transparent"); 
            $(".dropdownOption_LargeSize").css("background-color", "transparent"); 
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.size !== "MEDIUM"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.size !== "LARGE"
            })
            console.log(plantFilterApp.filters);
            // pass it the filters array
            plantFilterApp.filterMethod(plantFilterApp.filters);
            //if true(filter inactive), want to set to show filtered plants next time click button and apply activeFilter class
            $(".dropdownOption_SmallSize").addClass("activeFilter");
        //set button active background colour
        $(".dropdownOption_SmallSize").css("background-color", "#faecd1"); 
        }
    }),

    $('.dropdownOption_MedSize').on("click", function(){
    
        const activeFilter = $(".dropdownOption_MedSize").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.size !== "MEDIUM"
            })
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedSize").removeClass("activeFilter");
            $(".dropdownOption_MedSize").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({size:"MEDIUM"});
            $(".dropdownOption_SmallSize").css("background-color", "transparent"); 
            $(".dropdownOption_LargeSize").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.size !== "SMALL"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.size !== "LARGE"
            }) 
            console.log(plantFilterApp.filters);
            // pass it the filters array
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedSize").addClass("activeFilter");
        $(".dropdownOption_MedSize").css("background-color", "#faecd1"); 
        }

    }),

    $('.dropdownOption_LargeSize').on("click", function(){
        const activeFilter = $(".dropdownOption_LargeSize").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.size !== "LARGE"
            })
            $(".dropdownOption_LargeSize").removeClass("activeFilter");
            $(".dropdownOption_LargeSize").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({size:"LARGE"});
            $(".dropdownOption_MedSize").css("background-color", "transparent"); 
            $(".dropdownOption_SmallSize").css("background-color", "transparent"); 
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.size !== "MEDIUM"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.size !== "SMALL"
            })
            // $(".dropdownOption_SmallSize").removeClass("activeFilter");
            // $(".dropdownOption_MedSize").removeClass("activeFilter");
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_LargeSize").addClass("activeFilter");
            $(".dropdownOption_LargeSize").css("background-color", "#faecd1"); 
        }

    }),

    $('.dropdownOption_LowSun').on("click", function(){
        console.log($(".dropdownOption_LowSun").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_LowSun").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.sunlight !== "low"
            })
            $(".dropdownOption_LowSun").removeClass("activeFilter");
            $(".dropdownOption_LowSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"low"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_LowSun").addClass("activeFilter");
            $(".dropdownOption_LowSun").css("background-color", "#faecd1"); 
        }
    }), 

    $('.dropdownOption_MedSun').on("click", function(){
        console.log($(".dropdownOption_MedSun").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_MedSun").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.sunlight !== "medium"
            })
            $(".dropdownOption_MedSun").removeClass("activeFilter");
            $(".dropdownOption_MedSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"medium"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedSun").addClass("activeFilter");
            $(".dropdownOption_MedSun").css("background-color", "#faecd1"); 
        }
    }), 

    $('.dropdownOption_HighSun').on("click", function(){
        console.log($(".dropdownOption_HighSun").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_HighSun").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.sunlight !== "high"
            })
            $(".dropdownOption_HighSun").removeClass("activeFilter");
            $(".dropdownOption_HighSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"high"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_HighSun").addClass("activeFilter");
            $(".dropdownOption_HighSun").css("background-color", "#faecd1"); 
        }    
    }),


    $('.dropdownOption_LowMain').on("click", function(){
        console.log($(".dropdownOption_LowMain").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_LowMain").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.maintenance !== "low"
            })
            $(".dropdownOption_LowMain").removeClass("activeFilter");
            $(".dropdownOption_LowMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"low"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_LowMain").addClass("activeFilter");
        $(".dropdownOption_LowMain").css("background-color", "#faecd1"); 
        }

    }),

    $('.dropdownOption_MedMain').on("click", function(){
        console.log($(".dropdownOption_MedMain").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_MedMain").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.maintenance !== "medium"
            })
            $(".dropdownOption_MedMain").removeClass("activeFilter");
            $(".dropdownOption_MedMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"medium"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
        $(".dropdownOption_MedMain").addClass("activeFilter");
        $(".dropdownOption_MedMain").css("background-color", "#faecd1"); 
        }
    }),

    $('.dropdownOption_HighMain').on("click", function(){
        console.log($(".dropdownOption_HighMain").hasClass("activeFilter"));
        const activeFilter = $(".dropdownOption_HighMain").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.maintenance !== "high"
            })
            $(".dropdownOption_HighMain").removeClass("activeFilter");
            $(".dropdownOption_HighMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"high"});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_HighMain").addClass("activeFilter");
            $(".dropdownOption_HighMain").css("background-color", "#faecd1"); 
        }
    }),
    
    $("input.petFriendly").on("click", function(){
        const activeFilter = $("input.petFriendly").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.petFriendly !== "true"
            })
            $("input.petFriendly").removeClass("activeFilter");
        } else {
            plantFilterApp.filters.push({petFriendly:true});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $("input.petFriendly").addClass("activeFilter");

        }
    }),
    
    $("input.airPurifying").on("click", function(){
        const activeFilter = $("input.airPurifying").hasClass("activeFilter");
        let filterPlants
        if (activeFilter === true) {
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS, then run filter again
                return filterObject.airPurifying !== "true"
            })
            $("input.airPurifying").removeClass("activeFilter");
        } else {
            plantFilterApp.filters.push({airPurifying:true});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $("input.airPurifying").addClass("activeFilter");
        }
    });
}

plantFilterApp.finalFilterFunctions();




//Shopping Cart Icon and Modal Pop-Up

    plantFilterApp.shoppingCartIcon= function(){
        let iconValue=0;
        $("img.cart").on("click", function(){
            $("#shoppingCartPopOut").toggle();
        })

        $("#shoppingModal").click(() => {
            console.log("bye")
            $("#shoppingCartPopOut").hide();
        })

        $(".cardFlexContainer").on("click", ".hoverAddToCart",function(){
            $("#cartUpdater").removeClass('hiddenCartIcon');
            iconValue=iconValue+1;
            $("#cartUpdater").text(`${iconValue}`)

            $("#shoppingCartPopOut").show();

            setTimeout(function(){
                $("#shoppingCartPopOut").hide()
              }, 4000);

            
            
            //clear contents of the shopping cart modal and append item's info
            $(".itemsSection").empty();
            // return that item's name, src, price and store in variable
            const itemSelection = $(".hoverAddToCart", plant.className).val();
            const cartModalHTML =`
            
                <div class="itemsSection">
                    <img class="cartModalImage"src="${itemSelection.imgSRC}">
                    <div class="itemNameSection">
                        <h2 class="offWhite headingType6">${itemSelection.name}</h2>
                        <div class="quantityPicker">
                            <button class="picker headingType4">-</button>
                            <p class="offWhite headingType4">1</p>
                            <button class="picker headingType4">+</button>
                        </div>
                    </div>
                    <button class="picker headingType4">REMOVE</button>
                </div>
                <div class="subtotalSection">
                    <h3 class="headingType3 offWhite">Subtotal:</h3>
                    <h3 class="headingType3 offWhite">${itemSelection.price}</h3>
                </div>
                <button id="checkoutButton" class="long beige marginTop noMarginLeftRight darkGreen ">CHECKOUT</button>
           
            `
            $(".itemsSection").append(cartModalHTML);

        })
    }
    plantFilterApp.shoppingCartIcon();

//Newsletter Pop-Up
    plantFilterApp.newsletterPopUp= function(){
        if($(window).width() >= 1024) {
            setTimeout(function(){
                $("#popup-box").show()
              }, 10000);
        }
        

        $("#newsletterModal").click(() => {
            $("#popup-box").hide();
        })
    }
    plantFilterApp.newsletterPopUp();


//NavBar Box Shadow on Scroll

plantFilterApp.navbarBoxShadow=function(){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 50) {
            $("header").css("box-shadow", "rgba(99, 99, 99, 0.2) 0 4px 2px -2px")
        } else {
            $("header").css("box-shadow", "none")
        }
    })
}
plantFilterApp.navbarBoxShadow();


//Mobile Navbar Hamburger Menu

plantFilterApp.mobileNavHamburgerMenu=function(){
    $(".navbar2").on("click", "svg", function(){
        $(".hiddenLinks").toggle()
    })
}

plantFilterApp.mobileNavHamburgerMenu();




//Button Connections
plantFilterApp.beginnerPlantPageRedirection=function(){
    $("button.heroButton").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("img.heroButton").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("img.logo").on("click", function(){
        window.location.href = '../HTML/homepage.html';
    }) 

    $("#beginnerFriendly").on("click", function(){
        window.location.href = '../HTML/beginnerPlants.html';
    }) 

    $("#checkoutButton").on("click", function(){
        window.location.href = '../HTML/shoppingCart.html';
    })

}

plantFilterApp.beginnerPlantPageRedirection();

//NavBar Dropdowns Desktop

plantFilterApp.navDropdowns=function(button, hideDropdown1, hideDropdown2, hideDropdown3, dropdownShow){
    $(button).on("click", function(event){
        event.preventDefault();
        $(hideDropdown1).hide();
        $(hideDropdown2).hide();
        $(hideDropdown3).hide();
        $(dropdownShow).toggle();
    });
}
    plantFilterApp.navDropdowns("#plantsLink", ".navDropdownOverlayLearn",".navDropdownOverlayAbout",".navDropdownOverlayGifts",".navDropdownOverlayPlant");
    plantFilterApp.navDropdowns("#giftsLink", ".navDropdownOverlayLearn",".navDropdownOverlayAbout",".navDropdownOverlayPlant",".navDropdownOverlayGifts");
    plantFilterApp.navDropdowns("#learnLink", ".navDropdownOverlayPlant",".navDropdownOverlayAbout",".navDropdownOverlayGifts",".navDropdownOverlayLearn");
    plantFilterApp.navDropdowns("#aboutLink", ".navDropdownOverlayLearn",".navDropdownOverlayPlant",".navDropdownOverlayGifts",".navDropdownOverlayAbout");







//Shopping Cart Page 

// const updatedShoppingCartHTML =  `
//         <section class="cartContainer">
//         <h2 class="headingType1 darkGreen">Your Cart</h2>
//         <div class="tableContainer">
//             <table class="tableCart">
//                 <tr>
//                     <th class="darkGreen headingType5" colspan="4">Product</th>
//                     <th class="darkGreen headingType5">Price</th>
//                     <th class="darkGreen headingType5">Quantity</th>
//                     <th class="darkGreen headingType5">Total</th>
//                 </tr>
//                 <tr>
//                     <td colspan="4">
//                         <div class="cartProduct">
//                             <img class="cartProductImage" src="../Images/Plant images:Beginner/medium-plant-snake-white-pot.webp" alt="snake plant">
//                             <p class="darkGreen bodyType3">Snake Plant</p>
//                         </div>
//                     </td>
//                     <td>
//                             <p class="darkGreen bodyType3">$16</p>

//                     </td>
//                     <td>
//                         <div class="quantitySection">
//                             <div class="quantitySelector">
//                                 <button class="selector headingType4">-</button>
//                                 <p class="darkGreen headingType4">1</p>
//                                 <button class="selector headingType4">+</button>
//                             </div>
//                             <button class="selector bodyType3">Remove</button>
//                         </div>
//                     </td> 
//                     <td>
//                             <p class="darkGreen bodyType3">$16</p>
//                     </td>
//                 </tr>
//             </table>

//         <aside class="subtotalArea">
//             <div class="subtotalAmount">
//                 <p class="bodyType3 darkGreen">Subtotal</p>
//                 <p class="bodyType3 darkGreen">$16</p>
//             </div>
//             <p class="bodyType3 darkGreen">Taxes and shipping calculated at checkout</p>
//             <button class="noMarginLeftRight standard green offWhite headingType4 doubleMarginTop">CHECKOUT</button>
//         </aside>
//         </section>
// `

})

            
            
            
                



