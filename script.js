// Signup form handling
const signupForm = document.getElementById("signup-form");
const signupError = document.getElementById("signup-error");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can add more checks)
    if (name && email && password) {
        // Navigate to the login page
        window.location.href = "login.html";
    } else {
        signupError.textContent = "Please fill in all fields.";
    }
});

// Login form handling
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    // Basic validation (you can add more checks)
    if (loginEmail && loginPassword) {
        // Perform login logic here (e.g., check credentials against a database)
        
    } else {
        loginError.textContent = "Please fill in all fields.";
    }
});




