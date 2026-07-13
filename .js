// ================= FOODIEEXPRESS SCRIPT =================


// Cart data

let cart = [];

let cartCount = 0;



// Select all Add to Cart buttons

const cartButtons = document.querySelectorAll("button");



// Add item to cart

cartButtons.forEach(button => {


    if(button.innerText.includes("Add to Cart")){


        button.addEventListener("click", function(){



            let foodCard = this.parentElement;


            let foodName = foodCard.querySelector("h3").innerText;


            let foodPrice = foodCard.querySelectorAll("p")[1].innerText;



            let item = {

                name: foodName,

                price: foodPrice

            };



            cart.push(item);



            cartCount++;



            alert(foodName + " added to cart 🛒");



            updateCart();



            this.innerText = "Added ✓";



            setTimeout(()=>{


                this.innerText="Add to Cart";


            },1000);



        });


    }


});




// Update Cart button

function updateCart(){


    let cartButton = document.querySelector(".top-buttons button");


    if(cartButton){


        cartButton.innerHTML = "🛒 Cart (" + cartCount + ")";


    }


}



// Show cart items

function showCart(){


    if(cart.length === 0){


        alert("Your cart is empty 🛒");


        return;


    }



    let message="Your Cart:\n\n";



    cart.forEach((item,index)=>{


        message += 

        (index+1)+". "+item.name+" - "+item.price+"\n";


    });



    alert(message);


}



// Cart button click


document.querySelector(".top-buttons button")
.addEventListener("click",showCart);


// ================= LOGIN & SIGNUP SYSTEM =================


// Create Login/Signup Popup HTML

const popupHTML = `

<div id="authBox" style="

display:none;

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,0.5);

justify-content:center;

align-items:center;

z-index:1000;

">


<div style="

background:white;

width:350px;

padding:30px;

border-radius:20px;

text-align:center;

">


<h2 id="authTitle">
Login
</h2>



<input id="userEmail"

type="email"

placeholder="Email Address"

style="

width:90%;

padding:12px;

margin:10px;

border-radius:10px;

border:1px solid #ccc;

">



<input id="userPhone"

type="tel"

placeholder="Phone Number"

style="

width:90%;

padding:12px;

margin:10px;

border-radius:10px;

border:1px solid #ccc;

">



<input id="userPassword"

type="password"

placeholder="Password"

style="

width:90%;

padding:12px;

margin:10px;

border-radius:10px;

border:1px solid #ccc;

">



<button id="authButton">

Login

</button>



<p id="switchText">

Don't have an account? Sign Up

</p>



<button id="closeAuth">

Close

</button>


</div>


</div>

`;



// Add popup to webpage

document.body.insertAdjacentHTML(

"beforeend",

popupHTML

);





// Elements

let authBox = document.getElementById("authBox");

let authTitle = document.getElementById("authTitle");

let authButton = document.getElementById("authButton");

let switchText = document.getElementById("switchText");

let closeAuth = document.getElementById("closeAuth");



let isSignup = false;



// Header buttons

let headerButtons = document.querySelectorAll(".top-buttons button");



// Login button

headerButtons[1].addEventListener("click",()=>{


    isSignup=false;


    authTitle.innerText="Login";


    authButton.innerText="Login";


    authBox.style.display="flex";


});




// Signup button

headerButtons[2].addEventListener("click",()=>{


    isSignup=true;


    authTitle.innerText="Create Account";


    authButton.innerText="Sign Up";


    authBox.style.display="flex";


});





// Switch Login / Signup

switchText.addEventListener("click",()=>{


    isSignup=!isSignup;



    if(isSignup){


        authTitle.innerText="Create Account";


        authButton.innerText="Sign Up";


        switchText.innerText="Already have an account? Login";


    }


    else{


        authTitle.innerText="Login";


        authButton.innerText="Login";


        switchText.innerText="Don't have an account? Sign Up";


    }



});




// Close popup

closeAuth.addEventListener("click",()=>{


    authBox.style.display="none";


});





// Login / Signup action

authButton.addEventListener("click",()=>{


    let email=document.getElementById("userEmail").value;


    let phone=document.getElementById("userPhone").value;


    let password=document.getElementById("userPassword").value;




    if(email==="" || phone==="" || password===""){


        alert("Please fill all details");


        return;


    }




    if(password.length < 6){


        alert("Password should contain minimum 6 characters");


        return;


    }




    if(isSignup){


        alert("Account created successfully 🎉");


    }


    else{


        alert("Login successful 👋");


    }



    authBox.style.display="none";


});

/* =========================================
   FOODIE EXPRESS - PROFESSIONAL FOOD DELIVERY UI
   SCRIPT.JS PART 3/3
========================================= */


// ===============================
// CART SYSTEM
// ===============================

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


function updateCartCount(){

    const cartCount = document.querySelector(".cart-count");

    if(cartCount){
        cartCount.textContent = cartItems.length;
    }

}


function addToCart(itemName, price){

    const item = {
        name:itemName,
        price:price
    };

    cartItems.push(item);

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    updateCartCount();

    showToast(itemName + " added to cart 🛒");

}



document.querySelectorAll(".add-btn")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const card = button.closest(".food-card");

        if(card){

            const name =
            card.querySelector("h3")?.innerText;

            const price =
            card.querySelector(".price")?.innerText;


            addToCart(name,price);

        }

    });

});



// ===============================
// CART POPUP
// ===============================

const cartButton =
document.querySelector(".cart-btn");


if(cartButton){

cartButton.addEventListener("click",()=>{


    let message="";


    if(cartItems.length===0){

        message="Your cart is empty 🛒";

    }
    else{

        message=
        "Items in cart:\n\n";


        cartItems.forEach(item=>{

            message +=
            item.name+
            " - "+
            item.price+
            "\n";

        });

    }


    alert(message);


});


}



// ===============================
// LOGIN / SIGNUP BUTTON
// ===============================


const loginBtn =
document.querySelector(".login-btn");


const signupBtn =
document.querySelector(".signup-btn");



if(loginBtn){

loginBtn.addEventListener("click",()=>{

    showToast("Login page opening 🔐");

});

}



if(signupBtn){

signupBtn.addEventListener("click",()=>{

    showToast("Create your account ✨");

});

}



// ===============================
// SMOOTH SECTION SCROLL
// ===============================


document.querySelectorAll(
"header a, .bottom-nav a"
)
.forEach(link=>{


link.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



// ===============================
// BACK TO TOP BUTTON
// ===============================


const topButton =
document.querySelector(".back-top");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>400){

if(topButton)
topButton.style.display="block";


}
else{


if(topButton)
topButton.style.display="none";


}


});



if(topButton){

topButton.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}



// ===============================
// LOADING ANIMATION
// ===============================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


updateCartCount();


});



// ===============================
// NEWSLETTER BUTTON
// ===============================


const subscribeBtn =
document.querySelector(".subscribe-btn");


if(subscribeBtn){


subscribeBtn.addEventListener(
"click",
()=>{


const email =
document.querySelector(
".newsletter input"
)?.value;



if(email===""){

showToast(
"Enter your email first 📧"
);

}

else{


showToast(
"Subscribed successfully 🎉"
);


}


});


}



// ===============================
// CURRENT YEAR FOOTER
// ===============================


const year =
document.querySelector(".year");


if(year){

year.textContent =
new Date().getFullYear();

}


// ===============================
// END OF SCRIPT.JS
// ===============================