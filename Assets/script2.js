//setting up variables for different choices for character passwords
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var special = '~!@#$%^&*()_+=';


// Assignment Code given in inst.
var generateBtn = document.querySelector("#generate");

//prompting the user to spefific character length
var charLength = parseInt(prompt("How many characters for your password?  Please type in a number between 8 and 128."));

console.log (charLength)

var lowerCase = confirm("Would you like lowercase characters?");
var upperCase = confirm("Would you like uppercase characters?");
var specChar = confirm("Would you like special characters?");







