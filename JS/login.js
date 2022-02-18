const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const userHello = document.getElementById("hello");

function loginSubmit(event) {
    event.preventDefault();
    loginForm.style.display = "none";
    const username = loginInput.value;
    localStorage.setItem("savedUsername", username);
    userHello.innerText = "Hello " + username;
}

loginForm.addEventListener("submit", loginSubmit);

const getUsername = localStorage.getItem("savedUsername");

if (getUsername !== null) {
    userHello.innerText = "Hello " + getUsername;
    loginForm.style.display = "none";
}