// event listener for generate btn
const generateBtn = document.querySelector('#generate');
const passwordInput = document.querySelector('#password');
generateBtn.addEventListener('click', () => {
  passwordInput.value = generatePassword();
});
function generatePassword() {
  // string of characters available for the function
  const lowercaseOption = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseOption = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericOption = '0123456789';
  const specialOption = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  //prompts user for password length  
  let passwordLength = prompt('Choose a password length between 8-128 characters:');
  // throw error if criteria isnt met
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('Invalid password length. Enter a length between 8-128:');
  }
  // prompts user for all other criteria
  let LowercasePrompt = confirm('Include lowercase characters?');
  let UppercasePrompt = confirm('Include uppercase characters?');
  let NumericPrompt = confirm('Include numeric characters?');
  let SpecialPrompt = confirm('Include special characters?');

  if (
    !LowercasePrompt &&
    !UppercasePrompt &&
    !NumericPrompt &&
    !SpecialPrompt
  ) {
    // throws error if user inputs nothing 
    alert('Please select at least one character type.');
    return '';
  }
  // stores available characters and generated password
  let chars = '';
  let password = '';
  // logic for all variables
  if (LowercasePrompt) {
    chars += lowercaseOption;
    password += lowercaseOption[Math.floor(Math.random() * lowercaseOption.length)];
  }
  if (UppercasePrompt) {
    chars += uppercaseOption;
    password += uppercaseOption[Math.floor(Math.random() * uppercaseOption.length)];
  }
  if (NumericPrompt) {
    chars += numericOption;
    password += numericOption[Math.floor(Math.random() * numericOption.length)];
  }
  if (SpecialPrompt) {
    chars += specialOption;
    password += specialOption[Math.floor(Math.random() * specialOption.length)];
  }
  for (let i = password.length; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  // returns generated password 
  return password;
}
