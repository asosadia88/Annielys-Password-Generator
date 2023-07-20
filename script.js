// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*()_+-={}[]:;".split("");


// This function is used to generate the random password
function generatePassword() {

// Prompt used for user to select password length
  var savedPassword = "";
  var passwordSize = window.prompt("Choose a password length between 8 and 128 characters");
 
  
var passwordOptions = [];


//Prompt for user to confirm the various password criteria 
  if (passwordSize >= 8 && passwordSize <= 128) {
    var isUpperCase = window.confirm("Do you want to include uppercase characters?");
    var isLowerCase = window.confirm("Do you want to include lowercase characters?");
    var isNumbers = window.confirm("Do you want to include numbers?");
    var isSymbols = window.confirm("Do you want to include symbols?");
  }

  // if statement that add all options to password
  if (isUpperCase === true) {
    passwordOptions.push(...upperCase);
  }

  if (isLowerCase === true) {
    passwordOptions.push(...lowerCase);
  }

  if (isNumbers === true) {
    passwordOptions.push(...numbers);
  }

  if (isSymbols === true) {
    passwordOptions.push(...symbols);
  }

  if (isUpperCase === false && isLowerCase === false && isNumbers === false && isSymbols === false) {
    window.alert("You must choose at least one character type")
    return "";
  }

//for-loop to execute code more than once as needed 
for(var i=0; i<passwordSize; i++){
savedPassword+=passwordOptions[Math.floor(Math.random()*passwordOptions.length)];
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
