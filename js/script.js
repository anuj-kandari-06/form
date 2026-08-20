function validateForm() {
    let fname = document.getElementById("fname").value.trim();

    if (fname === "") {
        alert("Please enter your name");
        document.getElementById("fname").focus();
        return false;
    }

    let fnamePattern = /^[A-Za-z ]+$/;
    if (!fnamePattern.test(fname)) {
        alert("Name should contain only letters");
        document.getElementById("fname").focus();
        return false;
    }

    let lname = document.getElementById("lname").value.trim();

    if (lname === "") {
        alert("Please enter your lastname");
        document.getElementById("lname").focus();
        return false;
    }

    let lnamePattern = /^[A-Za-z ]+$/;
    if (!lnamePattern.test(lname)) {
        alert("Name should contain only letters");
        document.getElementById("lname").focus();
        return false;
    }

    let age = document.getElementById("age").value.trim();

    if (age === "") {
        alert("Please enter your age");
        document.getElementById("age").focus();
        return false;
    }

   
    if ( age <1|| age> 120) {
        alert("age must be between 1 to 120");
        document.getElementById("age").focus();
        return false;
    }


    //     let email=document .getElementById("email").value.trim();

    // if (email ==="") {
    //     alert("Please enter your email");
    //     document.getElementById("email").focus();
    //     return false;
    // }

    // let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailPattern.test(email)) {
    //         alert("Please enter a valid email");
    //         document.getElementById("email").focus();
    //         return false;
    //     }

    //     let mobile=document .getElementById("mobile").value.trim();

    // if (mobile ==="") {
    //     alert("Please enter your mobile number");
    //     document.getElementById("mobile").focus();
    //     return false;
    // }

    // let mobilePattern = /^[0-9]{10}$/;
    //     if (!mobilePattern.test(mobile)) {
    //         alert("Please enter a valid mobile number");
    //         document.getElementById("mobile").focus();
    //         return false;
    //     }

    //      let comments=document .getElementById("comments").value.trim();

    // if (comments ==="") {
    //     alert("Please enter your comments");
    //     document.getElementById("comments").focus();
    //     return false;
    // }

    // // let commentsPattern = /^[0-9]\.[10]+$/;
    //     if (comments.length < 10) {
    //         alert("Comments must be at least 10 characters");
    //         document.getElementById("comments").focus();
    //         return false;
    //     }

    let result = " First Name:  " + fname + "<br>" +
        "Last Name: " + lname+"<br>"+
        "Age: "+ age;
    document.getElementById("result").innerHTML = result;
    return false;
}
