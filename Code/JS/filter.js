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
    }

    plantFilterApp.init();

//Filter Dropdowns

    plantFilterApp.filterDropdownMethod=function(){

        $('li.sizeButton').on('click', function(){ 
            $(".clickableDropDownSize").toggle();
            $("#sizeArrow").toggle (".arrowRotation");
        });


        
        $('li.sunButton').on('click', function(){ 
            $(".clickableDropDownSunlight").toggle();
            $("#sunArrow").toggle (".arrowRotation");
        });

        
        $('li.maintButton').on('click', function(){ 
            $(".clickableDropDownMaintenance").toggle();
            $("#mainArrow").toggle (".arrowRotation");
        });
    }

    plantFilterApp.filterDropdownMethod();


// Sort Buttons
    let sortOption;

    //create a method to generate plant cards based on sorting option plugged in
    plantFilterApp.sortingMethod = function(){
        $(".cardFlexContainer").empty();
        
        sortOption.forEach(function(plant){
        const html=`
            <div class="plantCardItem ${plant.name}">
                                <img class="plantCardImg" src="${plant.imgSRC}" alt="Snake Plant">
                                <div class="cardText">
                                    <h4 class="plantName headingType6 darkGreen noMargin">${plant.name}</h4>
                                    <p class="plantPrice headingType6 darkGreen noMargin">$${plant.price}</p>
                                </div>
                                <p class="plantSize headingType5 darkGreenReducedOp">${plant.size}</p>
                                <button class="hoverAddToCart headingType4 darkGreen">ADD TO CART</button>
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

    plantFilterApp.finalSortingFunctions=function(){
        
        $('.sortBox').on('click','.sortZA',function(){

            sortOption= plants.sort(function(a,b){
                if (a.name<b.name) {
                    return 1
                } else {
                    return -1
                }
            });
            console.log(sortOption);
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
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY A-Z", "SORT BY Z-A", "SORT BY NEWEST", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortZA", "sortNewest","sortLowHigh","sortHighLow");
        }),

        $('.sortBox').on('click','.sortNewest',function(){
            sortOption= plants.sort(function(a,b){
                if (a.name>b.name) {
                    return 1
                } else {
                    return -1
                }
            });
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE LOW-HIGH", "SORT BY PRICE HIGH-LOW", "sortAZ", "sortZA","sortLowHigh", "sortHighLow");
           
        }),

        $('.sortBox').on('click','.sortLowHigh',function(){
            sortOption= plants.sort(function(a,b){
                if (a.price>b.price) {
                    return 1
                } else {
                    return -1
                }
            });
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A", "SORT BY PRICE HIGH-LOW","sortNewest", "sortAZ","sortZA","sortHighLow");
        }),

        $('.sortBox').on('click','.sortHighLow',function(){
            sortOption= plants.sort(function(a,b){
                if (a.price<b.price) {
                    return 1
                } else {
                    return -1
                }
            });
            console.log(sortOption);
            plantFilterApp.sortingMethod();
            plantFilterApp.dropdownHTMLMethod("SORT BY PRICE HIGH-LOW","SORT BY PRICE LOW-HIGH", "SORT BY NEWEST","SORT BY A-Z", "SORT BY Z-A","sortNewest", "sortLowHigh","sortNewest","sortAZ","sortZA");  
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
                    //when the plant array prop = the prop from the filter array (eg. size)
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
                            <button class="hoverAddToCart headingType4 darkGreen">ADD TO CART</button>
                        </div>`
        //display container with plant cards that are from the filtered array
        $(".cardFlexContainer").append(html);
        });

    }


    //create functions for each of the filtering options and call above method to generate html accordingly

    plantFilterApp.finalFilterFunctions=function(){

    $("#clearFiltersButton").on("click", function(){
        location.reload();
    })

    $('.dropdownOption_SmallSize').on("click", function(){
        //ccreate activeFilter class (an empty class not visible on page only used to indicate whether filter active)
        console.log($(".dropdownOption_SmallSize").hasClass("activeFilter"));
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
        console.log($(".dropdownOption_MedSize").hasClass("activeFilter"));
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
            console.log(plantFilterApp.filters);
            // pass it the filters array
            plantFilterApp.filterMethod(plantFilterApp.filters);
            $(".dropdownOption_MedSize").addClass("activeFilter");
        $(".dropdownOption_MedSize").css("background-color", "#faecd1"); 
        }

    }),

    $('.dropdownOption_LargeSize').on("click", function(){
        console.log($(".dropdownOption_LargeSize").hasClass("activeFilter"));
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


  
//Pull-Out Search Bar

    plantFilterApp.searchBarPopOut=function(){
        $(".search").on("click", function(){
            console.log("hi")
            $("#searchBar").toggleClass("hiddenSearchBar");
        })
    }
    plantFilterApp.searchBarPopOut();

//Shopping Cart Update Icon and Overlay

    plantFilterApp.shoppingCartIcon= function(){
        let iconValue=0;
        $("img.cart").on("click", function(){
            $("#shoppingCartPopOut").toggle();
        })

        $(".cardFlexContainer").on("click", ".hoverAddToCart",function(){
            $("#cartUpdater").removeClass('hiddenCartIcon');
            iconValue=iconValue+1;
            $("#cartUpdater").text(`${iconValue}`)

            $("#shoppingCartPopOut").show();
           
            $("#shoppingModal").click(() => {
                console.log("bye")
                $("#shoppingCartPopOut").hide();
            })
            setTimeout(function(){
                $("#shoppingCartPopOut").hide()
              }, 4000);

            //when click Add to Cart on an item, return that item's name, src, price
            const itemSelection = $(".plantCardItem", plant.className).val();
            console.log(itemSelection)
            //clear contents of the shopping cart modal and append item's info
            // $("#shoppingCartPopOut").empty();
            // const cartModalHTML =`
            // <modal id="shoppingCartPopOut" class="hiddenModal">
            //     <div class="headerSection">
            //         <h1 class="headingType2 offWhite">Your Cart</h1>
            //         <i id="shoppingModal"class="fas fa-times"></i>
            //     </div>
            //     <div class="itemsSection">
            //         <img class="cartModalImage"src="${plant.imgSRC}">
            //         <div class="itemNameSection">
            //             <h2 class="offWhite headingType6">${plant.name}</h2>
            //             <div class="quantityPicker">
            //                 <button class="picker headingType4">-</button>
            //                 <p class="offWhite headingType4">1</p>
            //                 <button class="picker headingType4">+</button>
            //             </div>
            //         </div>
            //         <button class="picker headingType4">REMOVE</button>
            //     </div>
            //     <div class="subtotalSection">
            //         <h3 class="headingType3 offWhite">Subtotal:</h3>
            //         <h3 class="headingType3 offWhite">${plant.price}</h3>
            //     </div>
            //     <button class="long beige marginTop noMarginLeftRight darkGreen">CHECKOUT</button>
            // </modal>
            // `
            // $("#shoppingCartPopOut").append(cartModalHTML);

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

}

plantFilterApp.beginnerPlantPageRedirection();

//NavBar Dropdowns Desktop

plantFilterApp.navDropdowns=function(){
    $("#plantsLink").on("click", function(event){
        event.preventDefault();
        $(".navDropdownOverlayGifts").hide();
        $(".navDropdownOverlayLearn").hide();
        $(".navDropdownOverlayAbout").hide();
        $(".navDropdownOverlayPlant").toggle();
       
    });


    $("#giftsLink").on("click", function(event){
        event.preventDefault();
        $(".navDropdownOverlayPlant").hide();
        $(".navDropdownOverlayLearn").hide();
        $(".navDropdownOverlayAbout").hide();
        $(".navDropdownOverlayGifts").toggle();
     
    });


    $("#aboutLink").on("click", function(event){
        event.preventDefault();
        $(".navDropdownOverlayGifts").hide();
        $(".navDropdownOverlayPlant").hide();
        $(".navDropdownOverlayLearn").hide();
        $(".navDropdownOverlayAbout").toggle();
    });


    $("#learnLink").on("click", function(event){
        event.preventDefault();
        $(".navDropdownOverlayGifts").hide();
        $(".navDropdownOverlayPlant").hide();
        $(".navDropdownOverlayAbout").hide();
        $(".navDropdownOverlayLearn").toggle();
      
    });

}

plantFilterApp.navDropdowns();


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

            
            
            
                



