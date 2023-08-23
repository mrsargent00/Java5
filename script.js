var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function writePassword() {
  var password = generatePassword(); 
  passwordText.value = password; 
}

generateBtn.addEventListener("click", writePassword);
  function generatePassword() {
    var length = 24; 
    var charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*"; // Character set for the password
    var newPassword = "";

    for (var i = 0; i < length; i++) {
    var Index = Math.floor(Math.random() * charset.length);
    newPassword += charset[Index];
  }

  return newPassword;