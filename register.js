document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        alert("Registration Successful!");
        registerForm.reset();
    });
});
