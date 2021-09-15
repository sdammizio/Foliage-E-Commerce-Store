
$(document).ready(function(){

//create namespace
let shoppingCartOperations ={};

//when load page initially, hide shopping cart modal window
shoppingCartOperations.init = function(){
    $("#shoppingCartPopOut").hide();
}
shoppingCartOperations.init();

//create new array to store current items in cart
shoppingCartOperations.shoppingCart =[]

//create a new array to store cart item prices
shoppingCartOperations.cartItemPrices =[]

//Shopping Cart Icon Operations

shoppingCartOperations.appendCartModal =function(){
    if (shoppingCartOperations.shoppingCart.length ===0){
        $("#shoppingCartPopOut").empty();
        const emptyCartHTML=   `
        <div class="headerSection">
            <h1 class="headingType2 offWhite">Your Cart</h1>
            <div id="shoppingModal">
                <i class="fas fa-times" alt="hamburger dropdown menu"></i>
            </div>
        </div>
        <div class="itemsSection">
            <div class="indivItem">
                <p class="headingType6 offWhite">Nothing to see here!</p>
            </div>
        </div>
        <div class="subtotalSection tripleMarginTop">
            <h3 class="headingType3 offWhite">Subtotal:</h3>
            <h3 id="subtotal" class="headingType3 offWhite"></h3>
        </div>
        <button id= "checkoutButton" class="noMarginLeftRight long beige darkGreen headingType4 doubleMarginTop">CHECKOUT</button>
        `
    $("#shoppingCartPopOut").append(emptyCartHTML);
    shoppingCartOperations.cartCountAmount();

    } else {
    $(".itemsSection").empty();
    $("#subtotal").text(`$${sum}`);
    $(".subtotalSection").removeClass("tripleMarginTop");

    //for each of the array items, do this:
    shoppingCartOperations.shoppingCart.forEach(function(item){ 
        const cartModalHTML =`
                <div class="indivItem">
                    <img class="cartModalImage"src="${item.src}">
                    <div class="itemNameSection">
                        <h2 class="offWhite headingType6 fixedWidth">${item.name}</h2>
                        <p class="bodyType2 offWhite noMargin noPadding">Qty: 1</p>
                    </div>
                    <button id="removeButton" data-plant= "${item.name}" class="picker headingType4">REMOVE</button>
                </div>
        `
        $(".itemsSection").append(cartModalHTML);
});

}
}

shoppingCartOperations.appendCheckoutPage=function(){
    if (shoppingCartOperations.shoppingCart.length ===0){
        $(".cartContainer").empty();
        const emptyCheckoutHTML=   `
            <h2 class="headingType1 darkGreen">Your Cart</h2>
            <div class="tableContainer">
                <table class="tableCart">
                    <tr>
                        <th class="darkGreen headingType5" colspan="4">Product</th>
                        <th class="darkGreen headingType5">Price</th>
                        <th class="darkGreen headingType5">Quantity</th>
                        <th class="darkGreen headingType5">Total</th>
                    </tr>
                    <tr id="itemInput">
                        <td colspan="4">
                            <div class="cartProduct">
                                <p class="darkGreen bodyType3">Your cart is empty!</p>
                            </div>
                        </td>
                        <td>

                         </td>
                         <td>
                          
                         </td> 
                         <td>
                        </td>
                    </tr>
                </table>

            <aside class="subtotalArea">
                <div class="subtotalAmount">
                    <p class="bodyType3 darkGreen">Subtotal</p>
                    <p id= "cartSubTotal" class="bodyType3 darkGreen"></p>
                </div>
                <p class="bodyType3 darkGreen">Taxes and shipping calculated at checkout</p>
                <button class="noMarginLeftRight standard green offWhite headingType4 doubleMarginTop">CHECKOUT</button>
            </aside>
        `
    
    $(".cartContainer").append(emptyCheckoutHTML);
    shoppingCartOperations.cartCountAmount();

    } else {
    //for each of the array items, do this:
    shoppingCartOperations.shoppingCart.forEach(function(item){ 
        $("#itemInput").empty();
        $("#cartSubTotal").text(`$${sum}`);
        const fullCheckoutHTML =`
                            <td colspan="4">
                                <div class="cartProduct">
                                    <img class="cartProductImage" src="${item.src}" alt="snake plant">
                                    <p class="darkGreen bodyType3">${item.name}</p>
                                </div>
                            </td>
                            <td>
                                    <p class="darkGreen bodyType3">${item.price}</p>

                            </td>
                            <td>
                                <div class="quantitySection">
                                    <div class="quantitySelector">
                                        <button class="selector headingType4">-</button>
                                        <p class="darkGreen headingType4">1</p>
                                        <button class="selector headingType4">+</button>
                                    </div>
                                    <button class="selector bodyType3">Remove</button>
                                </div>
                            </td> 
                            <td>
                                    <p id= "cartSubTotal" class="darkGreen bodyType3">${item.price}</p>
                            </td>     
        `
        
        $("#itemInput").append(fullCheckoutHTML);
        shoppingCartOperations.cartCountAmount();
        }
    )};
}

shoppingCartOperations.removeButton =function(){
//remove item from array of shopping cart items when click on "REMOVE" button

    $("#shoppingCartPopOut").on("click","#removeButton", function() {
        shoppingCartOperations.shoppingCart = shoppingCartOperations.shoppingCart.filter((item)=>{
            return item.name !== $(this).data().plant
        })
        shoppingCartOperations.cartItemPrices = shoppingCartOperations.cartItemPrices.filter((item)=>{
            return item.data !== this.data
        })
    shoppingCartOperations.appendCartModal();
    shoppingCartOperations.appendCheckoutPage();
    shoppingCartOperations.cartCountAmount();
    });

}
shoppingCartOperations.removeButton();

shoppingCartOperations.cartCountAmount=function(){
    if (shoppingCartOperations.shoppingCart.length ===0){
        $(".iconSection > #cartUpdater").hide();
        setTimeout(function(){
            iconValue=shoppingCartOperations.shoppingCart.length;
            $(".iconSection > #cartUpdater").text(`${iconValue}`)
         }, 10); 
    } else {
        $(".iconSection > #cartUpdater").show();
        setTimeout(function(){
            iconValue=shoppingCartOperations.shoppingCart.length;
            $(".iconSection > #cartUpdater").text(`${iconValue}`)
         }, 10); 
    }  
}


let sum;

shoppingCartOperations.shoppingCartIcon= function(){
        let iconValue;

        //toggle cart overlay by pressing on cart icon on page
        $("img.cart").on("click", function(){
            $("#shoppingCartPopOut").toggle();
        });

        //click x on cart modal to close
        $("#shoppingCartPopOut").on("click","#shoppingModal", function() {
            $("#shoppingCartPopOut").hide();
        });  
    }

shoppingCartOperations.shoppingCartIcon();

shoppingCartOperations.addToCart=function(){
 //when click on "Add to Cart" button on a product...
 $(".cardFlexContainer").on("click", ".hoverAddToCart",function(){
    //it shows the cart icon and incrementally adds a number inside it each time you press the button
    $(".iconSection > #cartUpdater.hiddenCartIcon").removeClass('hiddenCartIcon');
    
    // and at the same time it opens up the cart modal pop-up (and closes automatically in 4000ms)
    $("#shoppingCartPopOut").show();
    setTimeout(function(){
    $("#shoppingCartPopOut").hide()
    }, 4000);

    //retrieve "data-" value (plant name) from HTML associated with that plant card
    const cartItem = $(this).data();
    const itemPrice= $(this).data("price");
    // add that data to the cart array via .push()
    shoppingCartOperations.shoppingCart.push(cartItem);

    //add that data to the price array 
    shoppingCartOperations.cartItemPrices.push(itemPrice);
    //calculate sum of price array= subtotal amt
    sum = shoppingCartOperations.cartItemPrices.reduce(function(a, b){
        return a + b;
    }, 0);
    
    shoppingCartOperations.appendCartModal();
    shoppingCartOperations.appendCheckoutPage();
});

}

shoppingCartOperations.addToCart();


});