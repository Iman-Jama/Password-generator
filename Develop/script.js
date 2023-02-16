// Assignment Code
var generateBtn = document.querySelector("#generate");

//preparing all the variables, I will require in my function
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  //var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; I decided to not use this variable as i will use toUpperCase instead.
  var numeric = "0123456789";
  var specialSymbols = "#$%&'()*+,-./:;\"\"<=>?@[]^_`{|}~!";


var passwordLength = prompt("Enter a password length, between 8 - 128");

//if length isn't valid, it will stop the script until a valid number is chosen.
while (!validateNumber(passwordLength)) {
  
  passwordLength = prompt("Enter a password length, between 8 - 128");
};

var specialCharNum = confirm("Do you want numbers in your password?");
var specialCharUpper = confirm("DO you want uppercase letters?");
var specialCharLower = confirm("Do you want lowercase letters?");
var specialCharCharac = confirm("Do you want special characters?");

//This function ensures that the password length is within the required values. Otherwise the user will see an alert which will redirect them to the passwordLength variable.
function validateNumber(length) {
  if(length < 8 || length > 128)
  {
    alert("PASSWORD MUST BE BETWEEN 8 - 128 CHARACTERS!");
    return false;
  } else {
    return true;
  }
}

// I initialized an empty variable called randomPassword. Then i used IF statements to see if the user wanted to use numbers/lowercase/uppercase etc. If the value is true, then this will be added to my variable randomPassword.
function generatePassword() {

  var randomPassword = "";

  if (specialCharNum == true) {
    randomPassword += numeric;
  }

  if (specialCharUpper == true) {
    randomPassword += lowerCase.toUpperCase();
  }

  if (specialCharLower == true) {
    randomPassword += lowerCase;
  } 

  if (specialCharCharac == true) {
    randomPassword += specialSymbols;
  }
  //Loops through password length that has been selected and generates random characters based on selection which was chosen and adds it to the finalPassword each time.
  var finalPassword = ""
  for (let i = 0; i < passwordLength; i++) {
   //console logged the finalPassword as i wanted to check if it was working correctly. 
  console.log("generated " + randomPassword[Math.floor(Math.random() * randomPassword.length)]);
   finalPassword += randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }
  return finalPassword;
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
