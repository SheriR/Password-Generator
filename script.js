//setting up variables for different choices for character passwords
var uppercaseEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseEl = 'abcdefghijklmnopqrstuvwxyz';
var numberEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';
var charPool = ''

var charLength = document.getElementById('charLength');
var numprompt = document.getElementById('num');
var symprompt = document.getElementById('sym')
var specCharprompt = document.getElementById('spec');
var generate = document.getElementById('generate');
var yourPw = document.getElementById('yourPw');
var copy = document.getElementById('copy');

// Assignment Code given in inst.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';

  // loop as many times of the char length
  // get an random idx for the lenght of charPool
  // apppend the char at the randome idx from charPool[idx] to the password var

 
for (var i = 0; i = charLength; i++) {
password = password + values.charLength(Math.floor(Math.random()*charPool.length));
}

charPool=password

//generate password = password; 
}

// Write password to the #password input
function writePassword() {
  //prompting the user to spefific character length
  var charLength = parseInt(prompt("How many characters for your password?  Please type in a number between 8 and 128."));

  var numChar = confirm("Would you like numbers?");
  if (numChar) {
    charPool += numberEl
  }

  var lowerChar = confirm("Would you like lowercase characters?");
  if (lowerChar) {
  charPool += lowercaseEl
}

  var upperChar = confirm("Would you like uppercase characters?");
  if (upperChar) {
  charPool += uppercaseEl
}

  var specChar = confirm("Would you like special characters?");
  if(specChar) {
  charPool += specialEl
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

