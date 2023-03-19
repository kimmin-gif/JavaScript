const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = "Hello " + username;
}

loginForm.addEventListener("submit", onLoginSubmit);

