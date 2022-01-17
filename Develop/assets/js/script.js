// Assignment code here
var passwordChar = [
  upperChar = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    /*"A", "B", "C", "D", "E","F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
    "T", "U", "V", "W", "X", "Y", "Z"*/
  ],

  lowerChar = [
    "abcdefghijklmnopqrstuvwxyz"
    /*"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"*/
  ],

  numberChar = [
    "0123456789"
    /*"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"*/
  ],

  specialChar = [
    "!@#$%^&*()_+-=[]{};:<>?/~"
    /*"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
    "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", 
    "<", ">", ",", ".", "?", "/"*/
  ],

  numOfChar = []
];

var passwordContent = [];

//function generatePassword (/*this is where the random number selector has to go*/)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (passwordContent, passwordLength) {
  var password = ""
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * numOfChar);
    password += passwordContent.substring(randomNumber, randomNumber +1);
  } 
  return password
}

// Write password to the #password input

function writePassword () {
  var passwordLength = window.prompt("Your password must be between 8 and 128 characters. How long would you like your password to be?");
  numOfChar.push(Number.parseInt(passwordLength));
  // passwordContent.push(numOfChar));
  //console.log(passwordContent)
  console.log(passwordChar[4]);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Number invalid!");
    return false;
  }
  else {
    window.alert("Your password will be " + passwordLength + " characters long.");
  } 

  //taking the input from the user and making those the parameters

  //Uppercase characters added?
  var upperConfirm = window.confirm("Do you want to include uppercase characters?");
    if (upperConfirm) {
      window.alert("Uppercase characters included!");
      
      passwordContent = (passwordContent + passwordChar[0]);
      console.log(passwordContent);
    }
    else {
      window.alert("Uppercase characters excluded from password.");
    };
  
  //Lowercase characters added?  
  var lowerConfirm = window.confirm("Do you want to include lowercase characters?"); 
    if (lowerConfirm) {
      window.alert("Lowercase characters included!");
      
      passwordContent = (passwordContent + passwordChar[1]);
      console.log(passwordContent);
    }
    else {
      window.alert("Lowercase characters excluded from password.");
    };
  
    //Numbers added?
    var numConfirm = window.confirm("Do you want to include numbers?"); 
    if (numConfirm) {
      window.alert("Numbers included!");

      passwordContent = (passwordContent + passwordChar[2]);
      console.log(passwordContent);
    }
    else {
      window.alert("Numbers excluded from password.");
    };

    //Special characters added?
    var specialConfirm = window.confirm("Do you want to include special characters?"); 
    if (specialConfirm) {
      window.alert("Special characters included!");

      passwordContent = (passwordContent + passwordChar[3]);
      console.log(passwordContent);
    }
    else {
      window.alert("Special characters excluded from password.");
    };
    
  //Grab text area in index.html  
  var passwordText = document.querySelector("#password");

  //create text in text area
  passwordText.textContent = generatePassword(passwordContent, passwordLength);  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

