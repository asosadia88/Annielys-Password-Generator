// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*()_+-={}[]:;".split("");

var savePassword = [];

// This function is used to generate the random password
function generatePassword() {

// Prompt used for user to select password length
  var savedPassword = "";
  var passwordSize = window.prompt("Choose a password length between 8 and 128 characters");

//Prompt for user to confirm the various password criteria 
  if (passwordSize >= 8 && passwordSize <= 128) {
    var isUpperCase = window.confirm("Do you want to include uppercase characters?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters?");
    var isNumbers = window.confirm("Do you want to include numbers?");
    var isSymbols = window.confirm("Do you want to include special characters?");
  }

  if (isUpperCase === true) {
    var randomIndex = Math.floor(Math.random() * upperCase.length);
    savedPassword = savedPassword + upperCase[randomIndex];
  }

  if (isLowerCase === true) {
    var randomIndex = Math.floor(Math.random() * lowerCase.length);
    savedPassword = savedPassword + lowerCase[randomIndex];
  }

  if (isNumbers === true) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    savedPassword = savedPassword + numbers[randomIndex];
  }

  if (isSymbols === true) {
    var randomIndex = Math.floor(Math.random() * symbols.length);
    savedPassword = savedPassword + symbols[randomIndex];
  }

  if (isUpperCase === false && isLowerCase === false && isNumbers === false && isSymbols === false) {
    window.alert("You must choose at least one character type")
    return "";
  }

else { window.alert("You are outside the password range")
}

return savedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
