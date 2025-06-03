const signUpBtn = document.querySelector(".sign-up-btn");
const logInBtn = document.querySelector(".log-in-btn");
const signUpNameInput = document.querySelector(".sign-up-name-input");
const signUpPassInput = document.querySelector(".sign-up-pass-input");
const logInNameInput = document.querySelector(".log-in-name-input");
const logInPassInput = document.querySelector(".log-in-pass-input");
const signUpWarningMsg = document.querySelector(".sign-up-warning-msg");
const logInWarningMsg = document.querySelector(".log-in-warning-msg");

let users = JSON.parse(localStorage.getItem("usersArray")) || [];

let userObj = {
    name: "", 
    pass: ""
}

const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

signUpBtn.addEventListener("click", ()=>{
    if (signUpNameInput.value == "") {
        signUpWarningMsg.textContent = "Please enter a name";
        return;
    }
    userObj.name = signUpNameInput.value.toLowerCase();
    if  (signUpPassInput.value == "") {
        signUpWarningMsg.textContent = "Please enter a password";
        return;
    }

    if (!strongPasswordRegex.test(signUpPassInput.value)) {
        signUpWarningMsg.textContent = "Password must have atleast 4 characters 1 Uppercase 1 Lowercase letter and 1 number";
        return;
    }
    userObj.pass = signUpPassInput.value;
    users.push(userObj);
    localStorage.setItem("usersArray", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(userObj.name));
    signUpNameInput.value = "";
    window.location.href = "home.html";
});

logInBtn.addEventListener("click", ()=> {
    const enteredName = logInNameInput.value.toLowerCase();
    const foundUser =   users.find(user => user.name === enteredName);
    
    if(!foundUser) {
        logInWarningMsg.textContent = "user with that name doesn't exist";
        return;
    }

    if (logInPassInput.value !== foundUser.pass) {
        logInWarningMsg.textContent = "Incorrect password.";
        return;
    }
    localStorage.setItem("currentUser", JSON.stringify(foundUser.name));
    logInNameInput.value = "";
    window.location.href = "home.html";
});