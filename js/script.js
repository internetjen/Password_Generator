// Assignment Code
// Targets #generate id, red "Generate" button
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
} 
// Function that is generating random password 
function generatePassword () {

  var userInput = window.prompt("Password length?")
  var passwordLength = parseInt(userInput)

  if (isNaN (passwordLength)) {
    window.alert("Oops, that's not a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length must be between 8 and 128 characters!")
    return
  }

  var userWantsNumbers = window.confirm("Include numbers?")
  var userWantsLowercase = window.confirm("Include lowercase?")
  var userWantsUppercase = window.confirm("Include uppercase?")
  var userWantsSymbols = window.confirm("Include symbols?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var symbolsList = ["!", "#", "$", "&", "!", "@", "*", "%"]

  var optionsCart = []

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }
  if (userWantsSymbols === true) {
    optionsCart.push(symbolsList)
  }
  if (optionsCart.length === 0) {
    window.alert("Please choose at least one option.")
    return
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  // Calling generatePassword function and storing it in password variable
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
// Clicking "Generate" button calls writePassword function
generateBtn.addEventListener("click", writePassword);
