const goBackHomeBtn = document.querySelector(".go-back-home-btn");
const cardContainer = document.querySelector(".card-container");
const cartEmptyMessage = document.querySelector(".cart-empty-message");

var username = JSON.parse(localStorage.getItem("currentUser")) || "User";
var user_cart = JSON.parse(localStorage.getItem(`${username}_cart`)) || [];
var user_inventory = JSON.parse(localStorage.getItem(`${username}_inventory`)) || [];
var user_balance = JSON.parse(localStorage.getItem(`${username}_balance`)) || 0;
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) 
    document.body.classList.add("dark-mode");

let storedQuantities = {};
try {
  const parsed = JSON.parse(localStorage.getItem("product_quantities"));
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    storedQuantities = parsed;
  }
} catch {
  // Leave storedQuantities as empty object if corrupted
}


goBackHomeBtn.addEventListener("click", ()=> {
    window.location.href = "home.html";
});

user_cart.forEach(card => {    
    let cartCard = document.createElement('div');
    let productImage = document.createElement('img');
    let productName = document.createElement('h3');
    let productPrice = document.createElement('h3');
    let productQuantity = document.createElement('h3');
    let buyProductBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    cartCard.classList.add("cart-card");
    productImage.classList.add("product-image");
    productName.classList.add("product-name");
    productPrice.classList.add("product-price");
    productQuantity.classList.add("product-quantity");
    buyProductBtn.classList.add("buy-product-btn");
    removeBtn.classList.add("remove-btn");

    productImage.src = card.image;
    productName.textContent = card.name;
    productPrice.textContent = card.price;
    productQuantity.textContent = `Product Quantity: ${card.quantity || 1}`;

    buyProductBtn.textContent = "Buy Product";
    removeBtn.textContent = "Remove";

    cartCard.appendChild(productImage);
    cartCard.appendChild(productName);
    cartCard.appendChild(productPrice);
    cartCard.appendChild(productQuantity);
    cartCard.appendChild(buyProductBtn);
    cartCard.appendChild(removeBtn);
    cardContainer.appendChild(cartCard);

    const cartObj = {
                id: card.id,
                image: productImage.src,
                name: productName.textContent,
                price: productPrice.textContent,
                quantity: 1
        };
    buyProductBtn.addEventListener("click", () => {
        let product_Price = parseFloat(cartObj.price.replace("$", ""));
        let afterPrice = user_balance - product_Price;

        if (afterPrice >= 0) {
            user_balance = afterPrice;
            buyProductBtn.textContent = "Successfully Bought!";
            localStorage.setItem(`${username}_balance`, user_balance);
                setTimeout(() => {
                buyProductBtn.textContent = "Buy Product";
                }, 1000);
        } else {
            buyProductBtn.textContent = "Can't Afford Product";
            setTimeout(() => {
                buyProductBtn.textContent = "Buy Product";
            }, 1000);
            return;
        }

        const existingProduct = user_inventory.find(item => item.id === card.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            user_inventory.push(cartObj);
        }

        localStorage.setItem(`${username}_inventory`, JSON.stringify(user_inventory));
        if (card.quantity <= 1) {
            setTimeout(() => {
            cardContainer.removeChild(cartCard);
            user_cart = user_cart.filter(item => item.id !== cartObj.id);
            localStorage.setItem(`${username}_cart`, JSON.stringify(user_cart));
            }, 1000);
        }
        else {
            card.quantity--;
            productQuantity.textContent = `Product Quantity: ${card.quantity}`;
            localStorage.setItem(`${username}_cart`, JSON.stringify(user_cart));
        }
    });

    removeBtn.addEventListener("click", ()=> {
        if (card.quantity > 1) {
            card.quantity--;
            productQuantity.textContent = `Product Quantity: ${card.quantity}`;

            const itemIndex = user_cart.findIndex(item => item.id === card.id);
            if (itemIndex !== -1) {
                user_cart[itemIndex].quantity = card.quantity;
                localStorage.setItem(`${username}_cart`, JSON.stringify(user_cart));
            }

            if (storedQuantities[cartObj.id] !== undefined) {
                storedQuantities[cartObj.id]++;
                localStorage.setItem("product_quantities", JSON.stringify(storedQuantities));
            }
        }
        else {
            cardContainer.removeChild(cartCard);
            user_cart = user_cart.filter(item => item.id !== cartObj.id);
            localStorage.setItem(`${username}_cart`, JSON.stringify(user_cart));

            // ✅ Increase quantity back
            if (storedQuantities[cartObj.id] !== undefined) {
                storedQuantities[cartObj.id]++;
                localStorage.setItem("product_quantities", JSON.stringify(storedQuantities));
            }
        }
    });
});

if (user_cart.length === 0) {
    cartEmptyMessage.style.display = "block";
}
else {
    cartEmptyMessage.style.display = "none";
}