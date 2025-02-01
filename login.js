document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let username = document.getElementById("loginUsername").value;
        let password = document.getElementById("loginPassword").value;

        if (username && password) {
            alert("Login Successful!");
            loginForm.reset();
        } else {
            alert("Please enter username and password.");
        }
    });
});
