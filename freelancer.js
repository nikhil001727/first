const fullName = document.getElementById("fullname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const city = document.getElementById("city");
const skills = document.getElementById("skills");
const experience = document.getElementById("experience");
const portfolio = document.getElementById("portfolio");
const button = document.getElementById("registerBtn");

button.addEventListener("click", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/; // simple 10-digit check

    if (fullName.value.trim() === "") {
        alert("Please enter your full name.");
        return;
    }

    if (username.value.trim() === "") {
        alert("Please create a username.");
        return;
    }

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!phonePattern.test(phone.value)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (password.value.trim() === "") {
        alert("Please create a password.");
        return;
    }

    if (confirmPassword.value !== password.value) {
        alert("Passwords do not match.");
        return;
    }

    if (city.value.trim() === "") {
        alert("Please enter your city and country.");
        return;
    }

    if (skills.value.trim() === "") {
        alert("Please enter your skills.");
        return;
    }

    if (experience.value === "") {
        alert("Please select your experience level.");
        return;
    }

    if (portfolio.value.trim() === "") {
        alert("Please enter your portfolio URL.");
        return;
    }

    alert("Freelancer Registration Successful!");
});
