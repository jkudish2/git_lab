document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    forgotPasswordForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let email = document.getElementById("forgotEmail").value;

        if (email) {
            alert("Password reset instructions sent to " + email);
            forgotPasswordForm.reset();
        } else {
            alert("Please enter your email.");
        }
    });
});
