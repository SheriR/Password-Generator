//setting up variables for different choices for character passwords
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating an object (bucket) to save user choices
var userChoices = {};

//prompting the user to spefific character length
var charLength = parseInt(prompt("How many characters do you want your password?  Please type in a number between 8 and 128."));

// userChoice["charLength"] = charLength; 
console.log(charLength)



