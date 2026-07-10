let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = capitalLetters.toLowerCase();
let numbers = "1234567890";
let symbols = "!@#$%^&*()-+_";
let letters = "";
let availableCharacters = "";

document.querySelector(".generatePass").addEventListener("click", () => {
  letters = "";
  availableCharacters = "";
  let passwordLen = document.querySelector(".len").value;
  let uppercheck = document.querySelector(".upper").checked;
  let lowercheck = document.querySelector(".lower").checked;
  let numbercheck = document.querySelector(".num").checked;
  let symbolcheck = document.querySelector(".symbol").checked;

  if (passwordLen <= 0) {
    alert("Please enter a valid password length");
    return; //Stop this function immediately
  }

  if (!uppercheck && !lowercheck && !numbercheck && !symbolcheck) {
    alert("Please select at least one option");
    return;
  }

  function generatePassword(characters) {
    for (let i = 0; i <= passwordLen - 1; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      console.log(characters[randomIndex]); //for testing in console
      letters = letters + characters[randomIndex];
    }

    document.querySelector(".result").innerHTML = letters;
  }

  if (uppercheck == true) {
    availableCharacters += capitalLetters;
    // generatePassword(availableCharacters)
  }

  if (lowercheck == true) {
    availableCharacters += smallLetters;
  }

  if (numbercheck == true) {
    availableCharacters += numbers;
  }

  if (symbolcheck == true) {
    availableCharacters += symbols;
  }
  generatePassword(availableCharacters);
});
document.querySelector(".copy").addEventListener("click", () => {
  let password = document.querySelector(".result").innerHTML;

  navigator.clipboard.writeText(password);

  alert("Password copied!");
});
