const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let nameInputItem = document.getElementById("nameInput");
let signUpButtonItem = document.getElementById("accntSignUp");
let accountReadyMsgItem = document.getElementById("accountReadyMsg");
const emailInputItem = document.getElementById("emailInput");
const passwordInputItem = document.getElementById("passwordInput");

signUpButtonItem.addEventListener('click', () => {
    event.preventDefault();
    let userName = nameInputItem.value.toUpperCase();
    let email = emailInputItem.value;
    let password = passwordInputItem.value;
    console.log(email, password, userName);
    if (userName === "" || email === "" || password === "") {
        accountReadyMsgItem.classList.add("error-msg");
        accountReadyMsgItem.textContent = "Please fill the required info";
    } else {
        accountReadyMsgItem.classList.remove("error-msg");
        accountReadyMsgItem.textContent = `Your account is READY!!! \n ${userName}`;
    }
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    nameInputItem.value = "";
    emailInputItem.value = "";
    passwordInputItem.value = "";
    accountReadyMsgItem.textContent = "";
    container.classList.remove("right-panel-active");
});