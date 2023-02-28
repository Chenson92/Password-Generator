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

var generatePassword = function() {

/* the length of the password 8 - 128 characters */
 var passwordLength = parseInt(prompt("Please input length of your password from 8 to 128!"));
 if (passwordLength < 8 || passwordLength > 128){
       alert("Please choose a number between 8 and 128!")    
 } 

 /* Select Criteria*/
 displayPrompts();
 var result = " ";
 let counter = 0;
 if (!wantsLowercase && !wantsUppercase && !wantsNumbers && !wantsSymbols){
      alert ("Please choose at lease one criteria!")      
} else {

    if (wantsLowercase === true) {
    for (counter = 0; counter < passwordLength; counter++) {
      result += lowercaseChart[Math.floor(Math.random() * 26)];
    }
   }

    if (wantsUppercase===true){
    for (counter = 0; counter < passwordLength; counter++) {
      result += uppercaseChart[Math.floor(Math.random() * 26)];
    }
  
   }

    if (wantsNumbers===true) {
    for (counter = 0; counter < passwordLength; counter++) {  
      result += numbers[Math.floor(Math.random() * 10)];
    }
    
   }

    if (wantsSymbols===true) {
    for (counter = 0; counter < passwordLength; counter++){
     result += symbols[Math.floor(Math.random() * symbols.length)];
    }
   
   }
   return result;
  }

  if (wantsLowercase === true && wantsUppercase === true){
    let lettersChart = lowercaseChart.concat(uppercaseChart);
    for (counter = 0; counter < passwordLength; counter++){
      result += lettersChart[Math.floor(Math.random() * lettersChart.length)];
     }
     return result;
  }
}

 

var displayPrompts = function () {
wantsLowercase = confirm("Select 'OK' if you would like to include lowercase letters");
wantsUppercase = confirm("Select 'OK' if you would like to include uppercase letters");
wantsNumbers = confirm("Select 'OK' if you would like to include numbers");
wantsSymbols = confirm("Select 'OK' if you would like to include special characters");
};
 

  
   
  



/*
2.character types: yes/no
lowercase, uppercase, numeric, and/or special characters */

/*const Password = []
if (symbols) {
  Password.concat(symbols)
}
if (numbers) {
  Password.concat(numbers)
}
if (uppercaseChart) {
  Password.concat(uppercaseChart)
}
if (lowercaseChart) {
  Password.concat(lowercaseChart)
}*/

/* after prompt, my input should be validated and 
at least one character type should be selected */

/*let password = '';
let  passwordLength = parseInt(prompt("Please input length of your password from 8 to 128"));
for (let i = 0; i < passwordLength; i++) {
  password += possiblePassword[Math.floor(Math.random() * possiblePassword.length)]
}*/

/* all prompts are answered
THEN a password is generated that matches the selected criteria */


/* the password is either displayed in an alert 
or written to the page */




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







