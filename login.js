document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("loginUsername").value;
            let password = document.getElementById("loginPassword").value;

            if (localStorage.getItem(username) === password) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }
});
