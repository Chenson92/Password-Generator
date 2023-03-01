// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let lowercaseChart = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseChart = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",",
"-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
let possiblePassword = [lowercaseChart,uppercaseChart,numbers,symbols];

let wantsLowercase = false;
let wantsUppercase = false;
let wantsNumbers = false;
let wantsSymbols = false;

var displayPrompts = function () {
  wantsLowercase = confirm("Select 'OK' if you would like to include lowercase letters");
  wantsUppercase = confirm("Select 'OK' if you would like to include uppercase letters");
  wantsNumbers = confirm("Select 'OK' if you would like to include numbers");
  wantsSymbols = confirm("Select 'OK' if you would like to include special characters");}

var generatePassword = function() {

/* the length of the password 8 - 128 characters 
   if the iput is not a number
   select criteria */
 var passwordLength = parseInt(prompt("Please input length of your password from 8 to 128!"));
 if (passwordLength < 8 || passwordLength > 128){
       alert("Please choose a number between 8 and 128!");   
 } else if (isNaN(passwordLength)){
  alert("Please enter a number!");
 }
 else  {  displayPrompts ();
  if (!wantsLowercase && !wantsUppercase && !wantsNumbers && !wantsSymbols){
  alert ("Please choose at lease one criteria!");  
}}
     
 /* generate password based on selected criteria */
 
 let result = "";

 while (result.length < passwordLength) {
  let randomCharSet = possiblePassword[Math.floor(Math.random() * possiblePassword.length)]; // Get random character array.
  let randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)]; // Get random character from randomly chosen character array.

  if (lowercaseChart.includes(randomChar) && wantsLowercase) {
    result += randomChar;
  }

  if (uppercaseChart.includes(randomChar) && wantsUppercase) {
    result += randomChar;
  }

  if (numbers.includes(randomChar) && wantsNumbers) {
    result += randomChar;
  }

  if (symbols.includes(randomChar) && wantsSymbols) {
    result += randomChar;
  }
 }

 return result;
}


  



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





