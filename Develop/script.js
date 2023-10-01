// Assignment code here
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var specialCharacters = '!@#$%^&*()-_=+[{]}\|;:,><./?"';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = parseInt(prompt('How many characters for the password? (8-128)'));
  var lowerCase = confirm('Do you want lowercase letters?');
  var upperCase = confirm('Do you want uppercase letters?');
  var numerals = confirm('Do you want numbers?');
  var special = confirm('Do you want special characters?');

  var passwordSelection = '';

  if (lowerCase) {
    passwordSelection += lowercaseLetters;
  }
  if (upperCase) {
    passwordSelection += uppercaseLetters;
  }
  if (numerals) {
    passwordSelection += numbers;
  }
  if (special) {
    passwordSelection += specialCharacters;
  }

  if (passwordSelection === '' || length < 8 || length > 128) {
    alert('Invalid input. Please try again.');
    return '';
  }

  var finalPassword = '';
  for (var i = 0; i < length; i++) {
    var randomPassword = Math.floor(Math.random() * passwordSelection.length);
    finalPassword += passwordSelection.charAt(randomPassword);
  }
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
