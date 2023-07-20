const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  formControl.className = 'form-control error';
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function checkEmail(input) {
  const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailTest.test(input.value.trim()) ? showSuccess(input) : showError(input,
      'Email is not valid')
}

function isEmpty(input) {
  let isEmpty = false;
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input)} is required`)
    isEmpty = true;
  }

  return isEmpty;
}

function checkLength(input, min, max) {
  const inputValueLength = input.value.trim().length
  if (inputValueLength < min) {
    showError(input,
        `${getFieldName(input)} must be at least ${min} characters`)
  } else if (inputValueLength > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input)
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value.trim() !== input2.value.trim()) {
    showError(input2, 'Passwords do not match')
  } else {
    showSuccess(input2)
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!isEmpty(username)) {
    checkLength(username, 3, 15)
  }
  if (!isEmpty(email)) {
    checkEmail(email)
  }
  if (!isEmpty(password)) {
    checkLength(password, 8, 25)
  }
  if (!isEmpty(password) && !isEmpty(password2)) {
    checkPasswordsMatch(password, password2)
  }
})