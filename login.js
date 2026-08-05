const email = document.getElementsByName("mail")[0];
const word = document.getElementsByName("word")[0];
const button = document.querySelector("button");
console.log(document.getElementsByName("word").length);
button.addEventListener("click", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email.");
        return;
    }

    if (word.value.trim() === "") {
        alert("Please enter your password.");
        return;
    }

    alert("Login Successful");
});
