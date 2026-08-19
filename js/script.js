function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let comments = document.getElementById("comments").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    // Name should contain only letters and spaces
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Name should contain only letters");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return false;
    }

    // Mobile validation
    if (mobile === "") {
        alert("Please enter your mobile number");
        return false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be exactly 10 digits");
        return false;
    }

    // Comments validation
    if (comments === "") {
        alert("Please enter your comments");
        return false;
    }

    alert("Form submitted successfully!");

    return true;
}