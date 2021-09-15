//Plant Array
const plants = [
    {name: "Snake Plant",className: "snakePlant", size: "MEDIUM",sunlight: "low",maintenance: "low",petFriendly: true,airPurifying: false,price:16, imgSRC:"../Assets/snakePlant.jpg",replacementText:"Snake Plant", date: 30},

    {name: "ZZ Plant",className:"zzPlant",size:"LARGE",sunlight: "medium",maintenance: "medium",petFriendly: true,airPurifying: false,price:26, imgSRC:"../Assets/zzPlant.jpg", replacementText:"ZZ Plant",date: 25},

    {name: "Dragon Tree",className:"dragonTree",size: "LARGE", sunlight: "high",maintenance: "medium",petFriendly: false,airPurifying: false,price:20, imgSRC:"../Assets/dragonTree.jpeg",replacementText:"Dragon Tree", date: 10},
    
    {name: "Sago Palm",className:"sagoPalm",size: "SMALL",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: true,price:10, imgSRC:"../Assets/sagoPalm.jpeg", replacementText:"Sago Palm",date: 12},

    {name: "Devil's Ivy",className:"devilsIvy",size: "LARGE",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: true,price:30, imgSRC:"../Assets/devilsIvy.jpeg", replacementText:"Devil's Ivy",date: 3},
    
    {name: "Blue Star Fern",className:"blueStarFern",size: "MEDIUM",sunlight: "low",maintenance: "medium",petFriendly: false,airPurifying: false,price:15, imgSRC:"../Assets/blueStarFern.jpeg",replacementText:"Blue Star Fern", date: 9},

    {name: "Jade Succulent",className:"jadeSucculent",size: "LARGE",sunlight: "low",maintenance: "high",petFriendly: true,airPurifying: true,price:25, imgSRC:"../Assets/succulentJade.jpeg", replacementText:"Jade Succulent",date: 21},

    {name: "Pilea",className:"pilea",size: "SMALL",sunlight: "medium",maintenance: "high",petFriendly: false,airPurifying: false,price:15, imgSRC:"../Assets/pilea.jpeg", replacementText:"Pilea",date: 30},

    {name: "Rubber Plant",className:"rubberPlant",size: "MEDIUM",sunlight: "low",maintenance: "high",petFriendly: true,airPurifying: true,price:25, imgSRC:"../Assets/fiscus.jpeg",replacementText:"Rubber Plant",date: 15},

    {name: "Watermellon Pepperomelia",className:"watermellonPeperomelia",size: "MEDIUM",sunlight: "high",maintenance: "low",petFriendly: false,airPurifying: false,price:22, imgSRC:"../Assets/watermellon.jpeg",replacementText:"Rubber Plant", date: 2},
]


$(document).ready(function(){

//create namespace
let plantFilterApp ={};

plantFilterApp.init = function(){

$('.sortBox').on('click', function(){ 
    $(".dropdown-content").toggle(); 
});

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
                                <img class="plantCardImg" src="${plant.imgSRC}" alt="${plant.replacementText}">
                                <div class="cardText">
                                    <h4 class="plantName headingType6 darkGreen noMargin">${plant.name}</h4>
                                    <p class="plantPrice headingType6 darkGreen noMargin">$${plant.price}</p>
                                </div>
                                <p class="plantSize headingType5 darkGreenReducedOp">${plant.size}</p>
                                <button class="hoverAddToCart headingType4 darkGreen" data-name="${plant.name}" data-price="${plant.price}" data-src="${plant.imgSRC}">ADD TO CART</button>
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
                            <img class= "arrowNav" src="../Assets/iconArrowDown.png" alt="dropdown arrow">
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

    plantFilterApp.finalSortingFunctions=function(){
        
        $('.sortBox').on('click','.sortZA',function(){

            sortOption= plants.sort(function(a,b){
                if (a.name<b.name) {
                    return 1
                } else {
                    return -1
                }
            });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY Z-A", "SORT BY A-Z", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortNewest","sortLowHigh","sortHighLow");
        }),
        

        $('.sortBox').on('click','.sortAZ',function(){
            sortOption= plants.sort(function(a,b){
                if (a.name>b.name) {
                    return 1
                } else {
                    return -1
                }
            });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY A-Z", "SORT BY Z-A", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortZA", "sortNewest","sortLowHigh","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortNewest',function(){
            sortOption= plants.sort(function(a,b){
                if (a.date>b.date) {
                    return 1
                } else {
                    return -1
                }
            });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortZA","sortLowHigh", "sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortLowHigh',function(){
            sortOption= plants.sort(function(a,b){
                if (a.price>b.price) {
                    return 1
                } else {
                    return -1
                }
            });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE HIGH-LOW","sortNewest", "sortAZ","sortZA","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortHighLow',function(){
            sortOption= plants.sort(function(a,b){
                if (a.price<b.price) {
                    return 1
                } else {
                    return -1
                }
            });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE HIGH-LOW","SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A","sortNewest", "sortLowHigh","sortNewest","sortAZ","sortZA");  
            $(".dropdown-content").hide();
        })
    }

    plantFilterApp.finalSortingFunctions();

        
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
                            <img class="plantCardImg" src="${plant.imgSRC}" alt="${plant.replacementText}">
                            <div class="cardText">
                                <h4 class="plantName headingType6 darkGreen noMargin">${plant.name}</h4>
                                <p class="plantPrice headingType6 darkGreen noMargin">$${plant.price}</p>
                            </div>
                            <p class="plantSize headingType5 darkGreenReducedOp">${plant.size}</p>
                            <button class="hoverAddToCart headingType4 darkGreen" data-name="${plant.name}" data-price="${plant.price}" data-src="${plant.imgSRC}">ADD TO CART</button>
                        </div>`
        //display container with plant cards that are from the filtered array
        $(".cardFlexContainer").append(html);
        });

        //sort box options 

        $('.sortBox').on('click','.sortZA',function(){
                sortOption= filterPlants.sort(function(a,b){
                    if (a.name<b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY Z-A", "SORT BY A-Z", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortNewest","sortLowHigh","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortAZ',function(){
                sortOption= filterPlants.sort(function(a,b){
                    if (a.name>b.name) {
                        return 1
                    } else {
                        return -1
                    }
                });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY A-Z", "SORT BY Z-A", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortZA", "sortNewest","sortLowHigh","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortNewest',function(){
                sortOption= filterPlants.sort(function(a,b){
                    if (a.date>b.date) {
                        return 1
                    } else {
                        return -1
                    }
                });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortZA","sortLowHigh", "sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortLowHigh',function(){
                sortOption= filterPlants.sort(function(a,b){
                    if (a.price>b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE HIGH-LOW","sortNewest", "sortAZ","sortZA","sortHighLow");
            $(".dropdown-content").hide();
        }),

        $('.sortBox').on('click','.sortHighLow',function(){
         
                sortOption= filterPlants.sort(function(a,b){
                    if (a.price<b.price) {
                        return 1
                    } else {
                        return -1
                    }
                });
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_LowSun").removeClass("activeFilter");
            $(".dropdownOption_LowSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"low"});
            $(".dropdownOption_MedSun").css("background-color", "transparent"); 
            $(".dropdownOption_HighSun").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.sunlight !== "medium"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.size !== "high"
            }) 
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedSun").removeClass("activeFilter");
            $(".dropdownOption_MedSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"medium"});
            $(".dropdownOption_LowSun").css("background-color", "transparent"); 
            $(".dropdownOption_HighSun").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.sunlight !== "low"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.sunlight !== "high"
            }) 
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_HighSun").removeClass("activeFilter");
            $(".dropdownOption_HighSun").css("background-color", "transparent"); 
        
        } else {
            plantFilterApp.filters.push({sunlight:"high"});
            $(".dropdownOption_LowSun").css("background-color", "transparent"); 
            $(".dropdownOption_MedSun").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.sunlight !== "low"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.sunlight !== "medium"
            }) 
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_LowMain").removeClass("activeFilter");
            $(".dropdownOption_LowMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"low"});
            $(".dropdownOption_MedMain").css("background-color", "transparent"); 
            $(".dropdownOption_HighMain").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance !== "medium"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance !== "high"
            }) 
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedMain").removeClass("activeFilter");
            $(".dropdownOption_MedMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"medium"});
            $(".dropdownOption_LowMain").css("background-color", "transparent"); 
            $(".dropdownOption_HighMain").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance !== "low"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance !== "high"
            }) 
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
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_HighMain").removeClass("activeFilter");
            $(".dropdownOption_HighMain").css("background-color", "transparent"); 
        } else {
            plantFilterApp.filters.push({maintenance:"high"});
            $(".dropdownOption_LowSun").css("background-color", "transparent"); 
            $(".dropdownOption_MedSun").css("background-color", "transparent");
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance!== "low"
            })
            plantFilterApp.filters = plantFilterApp.filters.filter((filterObject)=>{
                //remove size:small property from array of FILTERS
                return filterObject.maintenance !== "medium"
            }) 
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
                return filterObject.petFriendly !== true
            })
            plantFilterApp.filterMethod(plantFilterApp.filters);
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
                return filterObject.airPurifying !== true
            })
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $("input.airPurifying").removeClass("activeFilter");
        } else {
            plantFilterApp.filters.push({airPurifying:true});
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $("input.airPurifying").addClass("activeFilter");
        }
    });
}

plantFilterApp.finalFilterFunctions();


})

            
            
            
                



