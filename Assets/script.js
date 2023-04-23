var generateBtn = document.querySelector("#generate");
var generatePassword;
var promptNumber;
var promptCharacter;
var promptUppercase;
var promptLowercase;
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
             "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[",
             "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
         "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);
generateBtn.addEventListener("click", function () {
    ps = generatePassword();
    placeholder = ps;
});
function generatePassword() {
  generatePassword = parseInt(prompt("How many characters? (Choose between 8 and 128)"));
  if (!generatePassword) {
      alert("This needs a value");
  } else if (generatePassword < 8 || generatePassword > 128) {   
    generatePassword = parseInt(prompt("You must choose between 8 and 128"));
  } else {
      promptUppercase = confirm("Will this password have uppercase letters?");
      promptLowercase = confirm("Will this password have lowercase letters?");
      promptNumber = confirm("Will this password have numbers?");
      promptCharacter = confirm("Will this password have special characters?");
  };
  if (!promptCharacter && !promptNumber && !promptUppercase && !promptLowercase) {
      choices = alert("You must choose a criteria!");
  }
  else if (promptCharacter && promptNumber && promptUppercase && promptLowercase) {
      choices = character.concat(number, alpha, alpha2);
  }
  else if (promptCharacter && promptNumber && promptUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (promptCharacter && promptNumber && promptLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (promptCharacter && promptLowercase && promptUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (promptNumber && promptLowercase && promptUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  else if (promptCharacter && promptNumber) {
      choices = character.concat(number);
  } 
  else if (promptCharacter && promptLowercase) {
      choices = character.concat(alpha);
  } 
  else if (promptCharacter && promptUppercase) {
      choices = character.concat(alpha2);
  }
  else if (promptLowercase && promptNumber) {
      choices = alpha.concat(number);
  } 
  else if (promptLowercase && promptUppercase) {
      choices = alpha.concat(alpha2);
  } 
  else if (promptNumber && promptUppercase) {
      choices = number.concat(alpha2);
  }
  else if (promptCharacter) {
      choices = character;
  }
  else if (promptNumber) {
      choices = number;
  }
  else if (promptLowercase) {
      choices = alpha;
  }
  else if (promptUppercase) {
      choices = space.concat(alpha2);
  };
  var password = [];
  for (var i = 0; i < generatePassword; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

