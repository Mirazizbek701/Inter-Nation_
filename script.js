// script.js
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required";
    } else {
        // You can add more complex validation logic here, e.g., checking against a database.
        // For simplicity, this example just shows a success message.
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
    }
}
