// Assignment Code
 var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)


const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specChar = ["!", "@", "#", "$", "%", "^", "&","*", "(", ")"];


function generatePassword() {
var results = "";
var numberOfCharacters = window.prompt("How long would you like your password to be?");
var charQty = parseInt(numberOfCharacters);

  if(charQty > 7 && charQty < 129) { 
  } else {
    window.alert("That is an invalid entry. Select a length between 8 and 128");
    return generatePassword();
  }

var upperCase = window.confirm("Would you like to include upper case letters?");

var lowerCase = window.confirm("How about lower case?");

// var numeric  = window.confirm("Include numbers?");

// var specCar = window.confirm("Special Characters?");
  
if (upperCase == true) {
  for (var i = 0; i < charQty; i++) {
    results += alphabetUpper[Math.floor(Math.random()*26)];
    }}
    if (lowerCase == true) {
  for (var i = 0; i < charQty; i++) {
  results += alphabetLower[Math.floor(Math.random()*26)];
        }}

  return results;
}


// var upperLetters = window.prompt("Would you like to include any upper care letters?")
//   if (upperLetters = true) {
//   }
// }



// function generatePassword() {
//   var password = passwordObjectGen();
//   console.log();
//   console.log();
//   console.log();
// }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

