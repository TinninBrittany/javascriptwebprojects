const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const formError = document.getElementById('form-error-message')

function showError(input, message) {
  // add form-control error classes to parent element
  // insert message into small innertext
  if(input === '') {
    formError.parentElement.className = 'form-control error'
    formError.innerText = message;
  } else {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error';
    small.innerText = message;
  }
}

function showSuccess(input) {
// add form-control success classes to parent element
  console.log('no error')
}

function checkEmail(input) {
  //use regex to verify input is a valid email then show success message
  // else show error and message: Email is not valid
  const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailTest.test(input.value.trim()) ? showSuccess(input) : showError(input, 'Email is not valid')
}

function isEmpty(inputsArr) {
  // check every input is not empty
  if(!Array.isArray(inputsArr) || !inputsArr.length ) {
    showError('','Fields cannot be empty')
    return;
  }

  let isEmpty = false;
  inputsArr.forEach((input) => {
    console.log('reading')
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
      isEmpty = true;
    } else {
      showSuccess(input)
    }
  })

  return isEmpty;
}

function checkLength(input, min, max) {

}

function checkPasswordsMatch(input1, input2) {

}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(!isEmpty())

  if(isEmpty([username, email, password])) {
    console.log(isEmpty([username, email, password]))
    //check other validations
    //username
    checkLength(username, 3, 15)
    //password
    checkLength(password, 8, 25)
    //email
    checkEmail(email)
    //passwords
    checkPasswordsMatch(password, password2)
  }
})