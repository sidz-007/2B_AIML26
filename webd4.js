function validate(){
let a = document.getElementById("name").value;
if(a == " "&& a!= String){
    alert("Please enter a valid name");
    return false;
}
let b = document.getElementById("number").value;
if (b == " "&& b!= Number){
    alert("Please enter a valid number");
    return false;
}
let c = document.getElementById("email").value;
if (c == " " && c!= String){
    alert("Please enter a valid email");
    return false;
}
let d = document.getElementById("password").value;
if (d == " " && d!= String){
    alert("Please enter a valid password");
    return false;
}
let e = document.getElementById("cpassword").value;
if (e == " " && e!= String){
    alert("Please confirm your password");
    return false;
}
}