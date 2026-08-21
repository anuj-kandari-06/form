function validateForm() {

    let marksInput = document.getElementById("marks");

    
    if (marksInput.value.trim() === "") {
        alert("Please enter your marks");
        marksInput.focus();
        return false;
    }

    
    let marks = Number(marksInput.value);

   
    let result = document.getElementById("result");


    if (marks < 0 || marks > 100) {

        alert("No record found");

        result.innerHTML = `
            <div class="alert alert-danger mt-3">
                <h4>No Record Found</h4>
                <p>Marks must be between 0 and 100.</p>
            </div>
        `;

    } else if (marks == 100) {

        alert("A+ Grade");

        result.innerHTML = `
            <div class="alert alert-success mt-3">
                <h4>A+ Grade</h4>
                <p>Marks: ${marks}</p>
            </div>
        `;

    } else if (marks >= 90) {

        alert("A Grade");

        result.innerHTML = `
            <div class="alert alert-success mt-3">
                <h4>A Grade</h4>
                <p>Marks: ${marks}</p>
            </div>
        `;

    } else if (marks >= 75) {

        alert("First Division");

        result.innerHTML = `
            <div class="alert alert-primary mt-3">
                <h4>First Division</h4>
                <p>Marks: ${marks}</p>
            </div>
        `;

    } else if (marks >= 60) {

        alert("Pass");

        result.innerHTML = `
            <div class="alert alert-info mt-3">
                <h4>Pass</h4>
                <p>Marks: ${marks}</p>
            </div>
        `;

    } else {

        alert("Fail");

        result.innerHTML = `
            <div class="alert alert-danger mt-3">
                <h4>Fail</h4>
                <p>Marks: ${marks}</p>
            </div>
        `;
    }

    return false;
}
    // let fnamePattern = /^[A-Za-z ]+$/;
    // if (!fnamePattern.test(fname)) {
    //     alert("Name should contain only letters");
    //     document.getElementById("fname").focus();
    //     return false;
    // }

    // let lname = document.getElementById("lname").value.trim();

    // if (lname === "") {
    //     alert("Please enter your lastname");
    //     document.getElementById("lname").focus();
    //     return false;
    // }

    // let lnamePattern = /^[A-Za-z ]+$/;
    // if (!lnamePattern.test(lname)) {
    //     alert("Name should contain only letters");
    //     document.getElementById("lname").focus();
    //     return false;
    // }

    // let age = document.getElementById("age").value.trim();

    // if (age === "") {
    //     alert("Please enter your age");
    //     document.getElementById("age").focus();
    //     return false;
    // }


    // if ( age <1|| age> 120) {
    //     alert("age must be between 1 to 120");
    //     document.getElementById("age").focus();
    //     return false;
    // }


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

    // let result = " First Name:  " + fname + "<br>" +
    //     "Last Name: " + lname+"<br>"+
    //     "Age: "+ age;
    // document.getElementById("result").innerHTML = result;
    // return false;

