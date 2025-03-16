document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("signupUsername").value;
            let password = document.getElementById("signupPassword").value;

            if (localStorage.getItem(username)) {
                alert("Username already exists!");
            } else {
                localStorage.setItem(username, password);
                alert("Signup successful! You can now login.");
                window.location.href = "login.html";
            }
        });
    }
});
