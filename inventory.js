const cardsContainer = document.querySelector(".cards-container");
const goBackHomeBtn = document.querySelector(".go-back-home-btn");
const inventoryEmptyText = document.querySelector(".inv-empty-text");

var username = JSON.parse(localStorage.getItem("currentUser")) || "User";
var user_inventory = JSON.parse(localStorage.getItem(`${username}_inventory`)) || [];
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) 
    document.body.classList.add("dark-mode");

goBackHomeBtn.addEventListener("click", ()=> {
    window.location.href = "home.html";
});

if (user_inventory.length === 0) {
    inventoryEmptyText.style.display = "block";
}
else {
    user_inventory.forEach(card => {
        let inventoryCard = document.createElement('div');
        let productImage = document.createElement('img');
        let productName = document.createElement('h3');
        let productPrice = document.createElement('h3');
        let productQuantity = document.createElement('h3');
        let removeBtn = document.createElement('button');

        inventoryCard.classList.add("inv-card");
        productImage.classList.add("product-image");
        productName.classList.add("product-name");
        productPrice.classList.add("product-price");
        productQuantity.classList.add("product-quantity");
        removeBtn.classList.add("remove-btn");

        productImage.src = card.image;
        productName.textContent = card.name;
        productPrice.textContent = card.price;
        productQuantity.textContent = `Owned: ${card.quantity || 1}`;
        removeBtn.textContent = "remove product";
        inventoryCard.appendChild(productImage);
        inventoryCard.appendChild(productName);
        inventoryCard.appendChild(productPrice);
        inventoryCard.appendChild(productQuantity);
        inventoryCard.appendChild(removeBtn);
        cardsContainer.appendChild(inventoryCard);



        removeBtn.addEventListener("click", ()=> {
            if(card.quantity > 1) {
                card.quantity--;
                productQuantity.textContent = `Owned: ${card.quantity}`;
                localStorage.setItem(`${username}_inventory`, JSON.stringify(user_inventory));
            } else {
                cardsContainer.removeChild(inventoryCard);
                user_inventory = user_inventory.filter(item => item.id !== card.id);
                localStorage.setItem(`${username}_inventory`, JSON.stringify(user_inventory));
            }
        });
    });
}