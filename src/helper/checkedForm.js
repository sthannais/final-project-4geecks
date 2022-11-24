export const validateEmail = (emailField) => {
  // Get our input reference.
  // Define our regular expression.
  let validEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // Using test we can check if the text match the pattern
  if (validEmail.test(emailField)) {
    return true;
  } else {
    return false;
  }
};

export const validInput = (field) => {
  if (field == "" || field == undefined) {
    return "Enter information";
  }
  return false;
};

export const comparationPassword = (password, newPassword) => {
  //return password == newPassword;
  if (password == newPassword) {
    return true;
  } else {
    return false;
  }
};

export const validPhone = (number) => {
  let numberValid = /^[0-9]+$/;
  if (numberValid.test(number) && number.length == 9) {
    return true;
  } else {
    return false;
  }
};
