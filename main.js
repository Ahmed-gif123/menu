document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeMessage) {
        let loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            welcomeMessage.textContent = "Welcome, " + loggedInUser + "!";
        }
    }
});
