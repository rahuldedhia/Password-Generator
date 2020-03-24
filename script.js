// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//code written by me
function generatePassword() {
  alert("Select your criteria for password generation");
  var PassLen = prompt("Enter the required length of the password - Enter a whole number between 8 and 128");

  while (PassLen < 8 || PassLen > 128 || isNaN (PassLen) ) {
    alert("Incorrect password length. Please enter a number between 8 & 128");
    PassLen = prompt("Enter the required length of the password - Enter a whole number between 8 and 128");
  }
  PassLen = Math.floor(PassLen);
  
  var LwrCase = confirm("Do you want to inclue lowercase characters? - Select 'OK' for Yes and 'Cancel' for No");
  var UprCase = confirm("Do you want to inclue uppercase characters? - Select 'OK' for Yes and 'Cancel' for No");
  var Numeric = confirm("Do you want to inclue numeric characters? - Select 'OK' for Yes and 'Cancel' for No");
  var SplChar = confirm("Do you want to inclue special characters? - Select 'OK' for Yes and 'Cancel' for No");

  while (LwrCase == false && UprCase == false && Numeric == false && SplChar == false)
  {
    alert("You need to select Yes for at least one criteria");
    LwrCase = confirm("Do you want to inclue lowercase characters? - Select 'OK' for Yes and 'Cancel' for No");
    UprCase = confirm("Do you want to inclue uppercase characters? - Select 'OK' for Yes and 'Cancel' for No");
    Numeric = confirm("Do you want to inclue numeric characters? - Select 'OK' for Yes and 'Cancel' for No");
    SplChar = confirm("Do you want to inclue special characters? - Select 'OK' for Yes and 'Cancel' for No");
  } 

  //console.log(LwrCase);
  //console.log(UprCase);
  //console.log(Numeric);
  //console.log(SplChar);

  alert("Your slection criteria is as follows:" + "\n" + "\n" +
  "Password length is " + PassLen + "\n" +
  "Include lowercase characters = " + LwrCase + "\n" +
  "Include uppercase characters = " + UprCase + "\n" +
  "Include Numeric characters = " + Numeric + "\n" +
  "Include Special characters = " + SplChar
  );

  var AllChars = [];

  if (LwrCase) {
    AllChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }

  if (UprCase) {
    AllChars.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z");
  }

  if (Numeric) {
    AllChars.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  if (SplChar) {
    AllChars.push("~", "!", "@", "#", "$", "%", "^", "&", "*", "?");
  }

 //console.log(AllChars);
 //console.log(Math.floor(Math.random() * AllChars.length));
 var GenPass = "";

 for (i=0; i< PassLen; i++)
 {
   GenPass += AllChars[Math.floor(Math.random() * AllChars.length)];
   //console.log(GenPass);
 }

 alert("Your password has been generated. Please copy it from the box below after clicking OK");
 
 return (GenPass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);