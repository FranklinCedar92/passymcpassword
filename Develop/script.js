// Assignment code here
var passwordChar = [
  upperChar = [
    "A", "B", "C", "D", "E","F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
    "T", "U", "V", "W", "X", "Y", "Z"
  ],

  lowerChar = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"
  ],

  numberChar = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ],

  specialChar = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
    "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", 
    "<", ">", ",", ".", "?", "/"
  ],

  numOfChar = []
];

var passwordContent = [];

//function generatePassword (/*this is where the random number selector has to go*/)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//make all of this an object so get passwordInput.length or passwordInput.upper
function writePassword () {
  var passwordLength = window.prompt("Your password must be between 8 and 128 characters. How long would you like your password to be?");
  numOfChar.push(passwordLength);
  passwordContent.push(numOfChar);
  //console.log(passwordContent)
  console.log(numOfChar);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Number invalid!");
    return false;
  }
  else {
    window.alert("Your password will be " + passwordLength + " characters long.");
  } 
  //here I have to take the input from the user and make that the parameter


  var upperConfirm = window.confirm("Do you want to include uppercase characters?");
    if (upperConfirm) {
      window.alert("Uppercase characters included!");
      //How do I include the characteristics that I have confirmed?
      passwordContent.push(upperChar);
      console.log(passwordContent);
    }
    else {
      window.alert("Uppercase characters excluded from password.");
    };
  

  var lowerConfirm = window.confirm("Do you want to include lowercase characters?"); 
    if (lowerConfirm) {
      window.alert("Lowercase characters included!");
      //How do I include the characteristics that I have confirmed?
      passwordContent.push(lowerChar);
      console.log(passwordContent);  
    }
    else {
      window.alert("Lowercase characters excluded from password.");
    };
  
    var numConfirm = window.confirm("Do you want to include numbers?"); 
    if (numConfirm) {
      window.alert("Numbers included!");
      //How do I include the characteristics that I have confirmed?
      passwordContent.push(numberChar);
      console.log(passwordContent);
    }
    else {
      window.alert("Numbers excluded from password.");
    };

    var specialConfirm = window.confirm("Do you want to include special characters?"); 
    if (specialConfirm) {
      window.alert("Special characters included!");
      //How do I include the characteristics that I have confirmed?
      passwordContent.push(specialChar);
      console.log(passwordContent);
    }
    else {
      window.alert("Special characters excluded from password.");
    };

//Here all the information for the parameters has been gathered

  var password = generatePassword();
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordContent);
    password += passwordContent.substring(randomNumber, randomNumber +1);
   } //"generatePassword" needs to be a defined function?
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * passwordLength);

  return value;
}; 

*/

/* First I have all the criteria that the password
can be made of. This information is in the arrays.

Then I have the prompts that retrieve the info.

Next I have to somehow use the information that
I collected to be the parameters for the 
password.

I have to figure out how to include letters and
special characters in a randomly generated string



*/

/* Do I use a for loop?

for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * passwordContent);
   password += passwordContent.substring(randomNumber, randomNumber +1);
  }
*/