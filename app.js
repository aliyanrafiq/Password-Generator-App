var input = document.getElementById("input");
var numbers = "1234567890";
var special = "@$#&%?{}/!~"
var capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var smallAlpha = "abcdefghijklmnopqrstuvwxyz"
var password = "";
function generatePassword() {
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 10)
        password += capitalAlpha[random];
        password += numbers[random];
        password += smallAlpha[random];
        password += special[random];
    }
    input.value = password
    // console.log(password)
    password = ""
}

function copyPassword() {
    navigator.clipboard.writeText(input.value)
    alert("Password Copied")
}

var validPassword = document.getElementById("validPassword");
// console.log(validPassword)
function validatePassword() {
    for (var i = 0; i < validPassword.value.length; i++) {
        for(var j = 0; j < special.length; j++){
            if(special[j] === i){
                console.log("Chal Raha hai")
            }
            else{
                console.log("Nahi Chal Raha")
            }
        }
    }
}