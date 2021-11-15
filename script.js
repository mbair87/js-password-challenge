// Assignment code here

//User generates password criteria
// - select length 8-128 characters
//  --confirm length or return to select again
//User selects criteria to include
//-- lower case, uppercase, numeric, special characters
//----validate selections or return to select again
//Password is generated and displayed as alert or on page.

//***Character selections***

var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercasedArr = lowercaseArr.map(letter => letter.toUpperCase() );
var specialArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', ']', '[', '\', ^', '_', '`', '{', '|', '}', '~'];
var numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Function to select password criteria
function selectPassword() {
  var lengthSelection = prompt("Please select a password length between 8 and 128 characters.");
//confirm number between 8-128
  while (lengthSelection === null || isNaN(lengthSelection) || lengthSelection < 8 || lengthSelection > 128) {
    lengthSelection = prompt("You must enter an number between 8 and 128.  Please make another selection.");
  }

  //choose characters
  function choosePassword() {
  var special = confirm("Would you like your password to include special characters?");
  var lower = confirm("Would you like your password to include lowercase characters?");
  var upper = confirm("Would you like your password to include uppercase characters?");
  var numbers = confirm("Would you like your password to include numbers?");
  while (special === false, lower === false, upper === false, numbers === false ) {
    confirm("You must make at least one selection. Please try again.")
    choosePassword();
  }

  }
  var passwordRequirements = {
    length: lengthSelection,
    includeSpecial: special,
    includeLower: lower,
    includeUpper: upper,
    includeNumbers: numbers
  }

  return passwordRequirements;

}

function generatePassword() {
  var passwordCriteria = selectPassword();
  console.log(passwordCriteria)
  var finalPasswordArr = [];
  if (passwordCriteria.includeUpper) {
    finalPasswordArr = [...finalPasswordArr,...uppercasedArr]
  }
  if (passwordCriteria.includeLower) {
    finalPasswordArr = [...finalPasswordArr,...lowercaseArr]
  }
  if (passwordCriteria.includeSpecial) {
    finalPasswordArr = [...finalPasswordArr,...specialArr]
  }
  if (passwordCriteria.includeNumbers) {
      finalPasswordArr = [...finalPasswordArr,...numbersArr]
    }
    console.log(finalPasswordArr);
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
