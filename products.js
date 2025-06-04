const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
const goBackHomeBtn = document.querySelector(".go-back-home-btn");

var username = JSON.parse(localStorage.getItem("currentUser")) || "User";
var user_balance = JSON.parse(localStorage.getItem(`${username}_balance`)) || 0;
let user_cart = JSON.parse(localStorage.getItem(`${username}_cart`)) || [];
let storedQuantities = localStorage.getItem("product_quantities");
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) 
    document.body.classList.add("dark-mode");

let allQuantities = {};

try {
    const stored = JSON.parse(localStorage.getItem("product_quantities"));
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
        allQuantities = stored;
    }
} catch {
    // corrupted data → ignore and reset
}

addToCartBtns.forEach(cartBtn => {
    const closestProductCard = cartBtn.closest(".product-card");
    const productId = closestProductCard.id;

    let quantityText = document.createElement("h3");
    quantityText.classList.add("product-quantity-text");
    quantityText.textContent = "Available: ";

    let quantitySpan = document.createElement("span");
    quantitySpan.classList.add("product-quantity");

    if (!(productId in allQuantities)) {
        allQuantities[productId] = 50;
        localStorage.setItem("product_quantities", JSON.stringify(allQuantities));
    }
    
    quantitySpan.textContent = allQuantities[productId];

    quantityText.appendChild(quantitySpan);
    closestProductCard.insertBefore(quantityText, cartBtn);

    cartBtn.addEventListener("click", ()=> {
        const closestProductImage = closestProductCard.querySelector(".product-image");
        const closestProductName = closestProductCard.querySelector(".product-name");
        const closestProductPrice = closestProductCard.querySelector(".product-price");
        const closestProductQuantity = closestProductCard.querySelector(".product-quantity");

        let currentQty = parseInt(closestProductQuantity.textContent);
        
        if (currentQty <= 0) {
            alert("Out of stock!");
            return;
        }

        currentQty--;
        closestProductQuantity.textContent = currentQty;
        allQuantities[productId] = currentQty;
        
        localStorage.setItem("product_quantities", JSON.stringify(allQuantities));

        cartBtn.textContent = "Added!";
        
        setTimeout(() => {
            cartBtn.textContent = "Add to Cart";
        }, 1000);

        const existingProduct = user_cart.find(item => item.id === closestProductCard.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            const cartObj = {
                id: closestProductCard.id,
                image: closestProductImage.src,
                name: closestProductName.textContent,
                price: closestProductPrice.textContent,
                quantity: 1
            };
            user_cart.push(cartObj);
        }
        
        localStorage.setItem(`${username}_cart`, JSON.stringify(user_cart));
    });
});

goBackHomeBtn.addEventListener("click", ()=> {
    window.location.href = "home.html";
});
