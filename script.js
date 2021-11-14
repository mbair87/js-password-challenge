// Assignment code here

//User generates password criteria
// - select length 8-128 characters
//  --confirm length or return to select again
//User selects criteria to include
//-- lower case, uppercase, numeric, special characters
//----validate selections or return to select again
//Password is generated and displayed as alert or on page.

//***Character selections***

var lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercasedArr = lettersArr.map(lettersArr => lettersArr.toUpperCase());
var specialArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'];
var numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function selectPassword() {
  var lengthSelection= prompt("Please select a password length between 8 and 128 characters.");

  if (lengthSelection === null || isNaN(lengthSelection) || lengthSelection < 8 || lengthSelection > 128) {
    lengthSelection = prompt("You must enter an number between 8 and 128.  Please make another selection.");
  }
 
  var special = confirm("Would you like your password to include special characters?");
  var lower = confirm("Would you like your password to include lowercase characters?");
  var upper = confirm("Would you like your password to include uppercase characters?");
  var numbers = confirm("Would you like your password to include numbers?");
  
  var passwordRequirements = {
    length: lengthSelection,
    includeSpecial: special,
    includeLower: lower, 
    includeUpper: upper,
    includeNumbers: numbers
  }

  return passwordRequirements;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
