const signUpOrLogInWelcome = document.querySelector(".sign-up-or-log-in-welcome");
const showProductsBtn = document.querySelector(".show-products-btn");
const playTriviaGameBtn = document.querySelector(".play-trivia-game-btn");
const seeMyCartBtn = document.querySelector(".see-my-cart-btn");
const seeMyInventoryBtn = document.querySelector(".see-my-inventory-btn");
const logOutBtn = document.querySelector(".log-out-btn");
const darkModeToggleBtn = document.querySelector(".dark-mode-toggle-btn");

var username = JSON.parse(localStorage.getItem("currentUser")) || "User";
var user_balance = JSON.parse(localStorage.getItem(`${username}_balance`)) || 0;
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) 
    document.body.classList.add("dark-mode");

signUpOrLogInWelcome.textContent = `Hello, ${username}! Your Balance is ${user_balance.toFixed(2)}`;

showProductsBtn.addEventListener("click", ()=> {
    window.location.href = "products.html";
});

playTriviaGameBtn.addEventListener("click", ()=> {
    window.location.href = "trivia.html";
});
seeMyCartBtn.addEventListener("click", ()=> {
    window.location.href = "cart.html";
});
seeMyInventoryBtn.addEventListener("click", ()=> {
    window.location.href = "inventory.html";
});

logOutBtn.addEventListener("click", ()=> {
    window.location.href = "index.html";
});

darkModeToggleBtn.addEventListener("click", ()=> {
    darkMode = !darkMode;
    darkMode ? darkModeToggleBtn.textContent = "Toggle Light Mode" : darkModeToggleBtn.textContent = "Toggle Dark    Mode";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-mode");
});