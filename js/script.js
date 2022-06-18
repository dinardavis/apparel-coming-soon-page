const emailInput = document.querySelector('.email-input');
const submitButton = document.querySelector('.submit-btn');
const errorIcon = document.querySelector('.icon-error');
const errorMessage = document.querySelector('.error-message');




function emailValidation(input) {
  let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if(input === '' || !regex.test(input)) {
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    submitButton.style.padding = '8.5px 40px';
    errorIcon.style.visibility = 'visible';
    errorMessage.style.visibility = 'visible';
  } else {
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
    submitButton.style.padding = '7px 40px';
    errorIcon.style.visibility = 'hidden';
    errorMessage.style.visibility = 'hidden';
  }
}

function submitForm() {
  emailInput.value = '';
}


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  emailValidation(emailInput.value);
  submitForm();
});