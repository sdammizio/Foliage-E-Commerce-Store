
$(document).ready(function(){

//create namespace
let shoppingCartOperations ={};

shoppingCartOperations.init = function(){
    $("#shoppingCartPopOut").hide();

}

shoppingCartOperations.init();

//create new array to store items in cart
shoppingCartOperations.shoppingCart =[]

//Shopping Cart Icon and Modal Pop-Up

shoppingCartOperations.shoppingCartIcon= function(){
let iconValue=0;

//toggle cart overlay by pressing on cart icon on page
$("img.cart").on("click", function(){
    $("#shoppingCartPopOut").toggle();
})

//click x on cart modal to close

$("#shoppingModal").click(() => {
    $("#shoppingCartPopOut").hide();
})

//when click an Add to Cart button on a product...
$(".cardFlexContainer").on("click", ".hoverAddToCart",function(){
    //it adds a number beside the cart icon
    $(".iconSection > #cartUpdater.hiddenCartIcon").removeClass('hiddenCartIcon');
    iconValue=iconValue+1;
    $(".iconSection > #cartUpdater").text(`${iconValue}`)
    // and at the same time opens up the cart modal pop-up (and closes automatically in 4000ms)
    $("#shoppingCartPopOut").show();
    setTimeout(function(){
    $("#shoppingCartPopOut").hide()
    }, 4000);

    const cartItem = $(".hoverAddToCart").data();
    console.log(cartItem);
        
}

    
// // add that data to the cart array via .push()

// //clear contents of the cart modal and append array's info via .forEach()
// $(".itemsSection").empty();

//         //for each of the plant array items that has been filtered, do this:
//         cartItem.forEach(function(shoppingCart){ 
//             const cartModalHTML =`
//                     <img class="cartModalImage"src="${shoppingCart.imgSRC}">
//                     <div class="itemNameSection">
//                         <h2 class="offWhite headingType6">${shoppingCart.name}</h2>
//                         <div class="quantityPicker">
//                             <button class="picker headingType4">-</button>
//                             <p class="offWhite headingType4">1</p>
//                             <button class="picker headingType4">+</button>
//                         </div>
//                     </div>
//                     <button class="picker headingType4">REMOVE</button>
//                 </div>
//                 <div class="subtotalSection">
//                     <h3 class="headingType3 offWhite">Subtotal:</h3>
//                     <h3 class="headingType3 offWhite">${shoppingCart.price}</h3>
//                 </div>
//             `
//             $(".itemsSection").append(cartModalHTML);
//         });

//             //and update the content of the Shopping Cart page to show the item too

// // $(".cartContainer").empty();

// // const updatedShoppingCartHTML =  `
// //         <section class="cartContainer">
// //         <h2 class="headingType1 darkGreen">Your Cart</h2>
// //         <div class="tableContainer">
// //             <table class="tableCart">
// //                 <tr>
// //                     <th class="darkGreen headingType5" colspan="4">Product</th>
// //                     <th class="darkGreen headingType5">Price</th>
// //                     <th class="darkGreen headingType5">Quantity</th>
// //                     <th class="darkGreen headingType5">Total</th>
// //                 </tr>
// //                 <tr>
// //                     <td colspan="4">
// //                         <div class="cartProduct">
// //                             <img class="cartProductImage" src="${}" alt="snake plant">
// //                             <p class="darkGreen bodyType3">${}</p>
// //                         </div>
// //                     </td>
// //                     <td>
// //                             <p class="darkGreen bodyType3">${}</p>

// //                     </td>
// //                     <td>
// //                         <div class="quantitySection">
// //                             <div class="quantitySelector">
// //                                 <button class="selector headingType4">-</button>
// //                                 <p class="darkGreen headingType4">1</p>
// //                                 <button class="selector headingType4">+</button>
// //                             </div>
// //                             <button class="selector bodyType3">Remove</button>
// //                         </div>
// //                     </td> 
// //                     <td>
// //                             <p class="darkGreen bodyType3">${}</p>
// //                     </td>
// //                 </tr>
// //             </table>

// //         <aside class="subtotalArea">
// //             <div class="subtotalAmount">
// //                 <p class="bodyType3 darkGreen">Subtotal</p>
// //                 <p class="bodyType3 darkGreen">${}</p>
// //             </div>
// //             <p class="bodyType3 darkGreen">Taxes and shipping calculated at checkout</p>
// //             <button class="noMarginLeftRight standard green offWhite headingType4 doubleMarginTop">CHECKOUT</button>
// //         </aside>
// //         </section>
// // `

//         })
)
}

shoppingCartOperations.shoppingCartIcon();

});