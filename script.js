// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  

    // password characters represented in string variables in object
  const passwordCharacters = {
    specialCharacters: "~`!@#$%^&*()-_+={[}]|/?",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    passwordNumbers: "0123456789" }; 

    // window prompts for password length with control statements
  var passwordLength= window.prompt("How many characters would you like your password to contain? Please choose a number from 8 to 128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128){
    window.confirm("Valid password length!")  
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.prompt("Please enter a number between 8 and 128.")
    return null;
  } else {
    window.prompt("Please enter a valid number.")
    return null;
  }

  var generatedPass = "";
  var newPassword = "";

  // window confirmation statements to add or not add specific character types
  var addSpecialCharacters = window.confirm("Would you like to add special characters to your password?");
  if (addSpecialCharacters) {
    generatedPass += passwordCharacters.specialCharacters;
  };

  var addNumericCharacters = window.confirm("Would you like to add numbers to your password?");
  if (addNumericCharacters) {
    generatedPass += passwordCharacters.passwordNumbers;
  };

  var addLowerCaseCharacters = window.confirm("Would you like to add lowercase characters to your password?");
  if (addLowerCaseCharacters) {
    generatedPass += passwordCharacters.lowerCase;
  };

  var addUpperCaseCharacters = window.confirm("Would you like to add uppercase characters to your password?");
  if (addUpperCaseCharacters) {
    generatedPass += passwordCharacters.upperCase;
  };

    // for loop to loop through charcter strings to generate user chosen password
    for(let i = 0; i > passwordLength.length; i++ ) {
      newPassword += generatePassword(Math.random() * passwordLength)
    }
    return newPassword;

    
  
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

