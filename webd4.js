function validate() {

    let a = document.getElementById("name").value;
    let b = document.getElementById("number").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("password").value;
    let e = document.getElementById("cpassword").value;

    if (a.trim() == "") {
        alert("Please enter your name");
        return false;
    }

    if (b.trim() == "") {
        alert("Please enter your mobile number");
        return false;
    }

    if (c.trim() == "") {
        alert("Please enter your email");
        return false;
    }

    if (d.trim() == "") {
        alert("Please enter your password");
        return false;
    }

    if (e.trim() == "") {
        alert("Please confirm your password");
        return false;
    }

    if (d != e) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration successful!");
    return true;
}